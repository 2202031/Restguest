"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import bcrypt from "bcryptjs";

export default function Perfil() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [loaded, setLoaded] = useState(false);

  // Modal state
  const [editingField, setEditingField] = useState(null); // "nombre" | "apellido" | "email" | "password" | null
  const [modalValue, setModalValue] = useState("");
  const [modalValue2, setModalValue2] = useState(""); // used for confirm password
  const [modalError, setModalError] = useState("");
  const [modalSuccess, setModalSuccess] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sessionRaw = localStorage.getItem("session");
    const storedUserRaw = localStorage.getItem("user");

    let session = null;
    let storedUser = null;

    try {
      session = sessionRaw ? JSON.parse(sessionRaw) : null;
    } catch (e) {
      session = null;
    }

    try {
      storedUser = storedUserRaw ? JSON.parse(storedUserRaw) : null;
    } catch (e) {
      storedUser = null;
    }

    if (!session || !session.active || !storedUser) {
      router.push("/login");
      return;
    }

    setUser(storedUser);
    setLoaded(true);
  }, [router]);

  // Open modal for a field
  const openEditModal = (field) => {
    setModalError("");
    setModalSuccess("");
    setEditingField(field);
    if (!user) return;
    if (field === "password") {
      setModalValue("");
      setModalValue2("");
    } else {
      // prefill with existing value
      setModalValue(user[field] ?? "");
      setModalValue2("");
    }
  };

  const closeModal = () => {
    setEditingField(null);
    setModalValue("");
    setModalValue2("");
    setModalError("");
    setModalSuccess("");
  };

  // Validators
  const validateField = (field, val, val2 = "") => {
    if (field === "nombre" || field === "apellido") {
      if (!val.trim()) return "Este campo es obligatorio.";
      if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(val))
        return "Solo se permiten letras y espacios.";
      return "";
    }

    if (field === "email") {
      if (!val.trim()) return "El correo es obligatorio.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return "Correo no válido.";
      return "";
    }

    if (field === "password") {
      if (!val) return "La contraseña es obligatoria.";
      if (val.length < 6) return "La contraseña debe tener al menos 6 caracteres.";
      if (val !== val2) return "Las contraseñas no coinciden.";
      return "";
    }

    return "";
  };

  // Save modal edit
  const handleSaveModal = async () => {
    setModalError("");
    setModalSuccess("");

    const field = editingField;
    if (!field) return;

    const err = validateField(field, modalValue, modalValue2);
    if (err) {
      setModalError(err);
      return;
    }

    // Update user object
    let updatedUser = { ...user };

    if (field === "password") {
      // hash password
      const hashed = await bcrypt.hash(modalValue, 10);
      updatedUser.password = hashed;
    } else {
      updatedUser[field] = modalValue;
    }

    // Persist
    try {
      localStorage.setItem("user", JSON.stringify(updatedUser));

      // update session name/email if those fields changed
      const sessionRaw = localStorage.getItem("session");
      let session = null;
      try {
        session = sessionRaw ? JSON.parse(sessionRaw) : null;
      } catch (e) {
        session = null;
      }
      if (session && session.active) {
        const newSession = {
          ...session,
          email: updatedUser.email ?? session.email,
          nombre: updatedUser.nombre ?? session.nombre,
        };
        localStorage.setItem("session", JSON.stringify(newSession));
      }

      setUser(updatedUser);
      setModalSuccess("Cambios guardados correctamente.");
      setModalError("");

      // close modal shortly after success to show message
      setTimeout(() => {
        closeModal();
      }, 900);
    } catch (e) {
      setModalError("Error guardando. Intenta nuevamente.");
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("session");
    router.push("/login");
  };

  if (!loaded) return null;

  return (
    <div className="min-h-screen bg-[#F3F4E5] p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-[#2f312d] mb-4">Mi Perfil</h1>

          {/* Row: Nombre */}
          <div className="flex items-center justify-between border-b border-gray-100 py-4">
            <div>
              <div className="text-sm text-gray-500">Nombre</div>
              <div className="text-lg font-medium text-gray-800">{user.nombre}</div>
            </div>
            <div>
              <button
                onClick={() => openEditModal("nombre")}
                className="bg-[#2f312d] hover:bg-[#3c3e39] text-white px-3 py-1 rounded-md text-sm"
              >
                Editar
              </button>
            </div>
          </div>

          {/* Row: Apellido */}
          <div className="flex items-center justify-between border-b border-gray-100 py-4">
            <div>
              <div className="text-sm text-gray-500">Apellido</div>
              <div className="text-lg font-medium text-gray-800">{user.apellido}</div>
            </div>
            <div>
              <button
                onClick={() => openEditModal("apellido")}
                className="bg-[#2f312d] hover:bg-[#3c3e39] text-white px-3 py-1 rounded-md text-sm"
              >
                Editar
              </button>
            </div>
          </div>

          {/* Row: Email */}
          <div className="flex items-center justify-between border-b border-gray-100 py-4">
            <div>
              <div className="text-sm text-gray-500">Correo</div>
              <div className="text-lg font-medium text-gray-800">{user.email}</div>
            </div>
            <div>
              <button
                onClick={() => openEditModal("email")}
                className="bg-[#2f312d] hover:bg-[#3c3e39] text-white px-3 py-1 rounded-md text-sm"
              >
                Editar
              </button>
            </div>
          </div>

          {/* Row: Password (masked) */}
          <div className="flex items-center justify-between py-4">
            <div>
              <div className="text-sm text-gray-500">Contraseña</div>
              <div className="text-lg font-medium text-gray-800">**************</div>
            </div>
            <div>
              <button
                onClick={() => openEditModal("password")}
                className="bg-[#2f312d] hover:bg-[#3c3e39] text-white px-3 py-1 rounded-md text-sm"
              >
                Cambiar
              </button>
            </div>
          </div>

          {/* Actions: save profile info and logout */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => {
                // Save all visible fields (name, apellido, email). Password is via modal.
                localStorage.setItem("user", JSON.stringify(user));
                // update session
                const sessionRaw = localStorage.getItem("session");
                let session = null;
                try {
                  session = sessionRaw ? JSON.parse(sessionRaw) : null;
                } catch (e) {
                  session = null;
                }
                if (session && session.active) {
                  const newSession = {
                    ...session,
                    email: user.email ?? session.email,
                    nombre: user.nombre ?? session.nombre,
                  };
                  localStorage.setItem("session", JSON.stringify(newSession));
                }
                // show small inline success (temporary)
                const el = document.createElement("div");
                el.textContent = "Cambios guardados.";
                el.className =
                  "fixed bottom-6 right-6 bg-[#2f312d] text-white px-4 py-2 rounded-md shadow";
                document.body.appendChild(el);
                setTimeout(() => el.remove(), 1200);
              }}
              className="bg-[#A1C1BE] hover:bg-[#89B1AC] text-white px-4 py-2 rounded-md"
            >
              Guardar perfil
            </button>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>

      {/* =========================
          MODAL (ESTILO DASHBOARD OSCURO)
         ========================= */}
      {editingField && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => {
              // click outside closes modal
              closeModal();
            }}
          />

          {/* modal panel */}
          <div className="relative bg-[#1f1f1f] text-white rounded-2xl w-full max-w-lg mx-4 shadow-xl p-6 z-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">
                {editingField === "password"
                  ? "Cambiar contraseña"
                  : `Editar ${editingField}`}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-300 hover:text-white text-sm"
              >
                Cerrar
              </button>
            </div>

            {/* Modal content */}
            <div className="space-y-3">
              {editingField !== "password" ? (
                <>
                  <label className="text-sm text-gray-300">Nuevo valor</label>
                  <input
                    autoFocus
                    value={modalValue}
                    onChange={(e) => setModalValue(e.target.value)}
                    className="w-full p-2 rounded-lg bg-[#111111] border border-[#333] text-white"
                  />
                </>
              ) : (
                <>
                  <div>
                    <label className="text-sm text-gray-300">Nueva contraseña</label>
                    <input
                      type="password"
                      value={modalValue}
                      onChange={(e) => setModalValue(e.target.value)}
                      className="w-full p-2 rounded-lg bg-[#111111] border border-[#333] text-white"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-300">Confirmar contraseña</label>
                    <input
                      type="password"
                      value={modalValue2}
                      onChange={(e) => setModalValue2(e.target.value)}
                      className="w-full p-2 rounded-lg bg-[#111111] border border-[#333] text-white"
                    />
                  </div>
                </>
              )}

              {/* error / success messages inside modal */}
              {modalError && (
                <div className="text-sm text-red-400 bg-black/20 p-2 rounded">
                  {modalError}
                </div>
              )}

              {modalSuccess && (
                <div className="text-sm text-green-400 bg-black/20 p-2 rounded">
                  {modalSuccess}
                </div>
              )}
            </div>

            {/* modal actions */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 text-white"
              >
                Cancelar
              </button>
              <button
                onClick={async () => {
                  setModalError("");
                  setModalSuccess("");
                  // validation
                  const err = validateField(editingField, modalValue, modalValue2);
                  if (err) {
                    setModalError(err);
                    return;
                  }
                  // For email uniqueness: if changing email, ensure not empty and valid
                  if (editingField === "email") {
                    // optionally check that new email is not equal to something else - since only one user exists locally, OK.
                  }

                  // Apply changes locally and save
                  if (editingField === "password") {
                    // hash and save handled in handleSaveModal (but here we inline to show immediate feedback)
                    try {
                      const hashed = await bcrypt.hash(modalValue, 10);
                      const updatedUser = { ...user, password: hashed };
                      localStorage.setItem("user", JSON.stringify(updatedUser));
                      // update session if needed
                      const sessionRaw = localStorage.getItem("session");
                      let session = null;
                      try {
                        session = sessionRaw ? JSON.parse(sessionRaw) : null;
                      } catch (e) {
                        session = null;
                      }
                      if (session && session.active) {
                        const newSession = {
                          ...session,
                          email: updatedUser.email ?? session.email,
                          nombre: updatedUser.nombre ?? session.nombre,
                        };
                        localStorage.setItem("session", JSON.stringify(newSession));
                      }

                      setUser(updatedUser);
                      setModalSuccess("Contraseña actualizada correctamente.");
                      // close after short delay
                      setTimeout(() => closeModal(), 900);
                    } catch (e) {
                      setModalError("Error actualizando la contraseña.");
                    }
                  } else {
                    // other fields
                    const updatedUser = { ...user, [editingField]: modalValue };
                    try {
                      localStorage.setItem("user", JSON.stringify(updatedUser));
                      // update session values if name/email changed
                      const sessionRaw = localStorage.getItem("session");
                      let session = null;
                      try {
                        session = sessionRaw ? JSON.parse(sessionRaw) : null;
                      } catch (e) {
                        session = null;
                      }
                      if (session && session.active) {
                        const newSession = {
                          ...session,
                          email: updatedUser.email ?? session.email,
                          nombre: updatedUser.nombre ?? session.nombre,
                        };
                        localStorage.setItem("session", JSON.stringify(newSession));
                      }
                      setUser(updatedUser);
                      setModalSuccess("Campo actualizado correctamente.");
                      setTimeout(() => closeModal(), 700);
                    } catch (e) {
                      setModalError("Error guardando el campo.");
                    }
                  }
                }}
                className="px-4 py-2 rounded-lg bg-[#89B1AC] hover:bg-[#6f9c95] text-white"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

}
