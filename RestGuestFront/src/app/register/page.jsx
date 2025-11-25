"use client";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import bcrypt from "bcryptjs";

export default function RegisterForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio.";
    } else if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(form.nombre)) {
      newErrors.nombre = "El nombre solo puede contener letras.";
    }

    if (!form.apellido.trim()) {
      newErrors.apellido = "El apellido es obligatorio.";
    } else if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(form.apellido)) {
      newErrors.apellido = "El apellido solo puede contener letras.";
    }

    if (!form.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Ingresa un correo electrónico válido.";
    }

    if (!form.password) {
      newErrors.password = "La contraseña es obligatoria.";
    } else if (form.password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres.";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Debes confirmar tu contraseña.";
    } else if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Las contraseñas no coinciden.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Encriptar contraseña
    const hashedPassword = bcrypt.hashSync(form.password, 10);

    // Guardar usuario
    const userData = {
      nombre: form.nombre,
      apellido: form.apellido,
      email: form.email,
      password: hashedPassword,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    // Crear sesión
    localStorage.setItem("session", "true");

    // Redirigir al dashboard
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex bg-[#F3F4E5,]">
      {/* Formulario a la izquierda */}
      <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-center bg-[#F3F4E5] overflow-hidden p-8">
        
        {/* Partículas - FONDO */}
        <Particles
          className="absolute inset-0 z-0"
          init={useCallback(async (engine) => {
            await loadSlim(engine);
          }, [])}
          options={{
            background: {
              color: { value: "#F3F4E5" },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: {
                repulse: { distance: 50, duration: 0.4 },
              },
            },
            particles: {
              color: { value: ["#A1C1BE", "#E2E3D9", "#59554E"] },
              links: {
                color: "#A1C1BE",
                distance: 140,
                enable: true,
                opacity: 0.25,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 1.4,
                straight: false,
              },
              number: { density: { enable: true, area: 800 }, value: 250 },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />

        {/* Logo */}
        <div className="absolute top-6 left-6 z-10">
          <img
            src="/RestGuest_LoGO.png"
            alt="RestGuest Logo"
            className="w-28 mb-6"
          />
        </div>

        {/* Contenedor del formulario */}
        <div className="relative z-10 w-full max-w-md space-y-6">
          <div className="space-y-2">
            <h2 className="text-[#0A0A0A] text-2xl font-semibold text-center">
              ¡Regístrate ahora!
            </h2>
          </div>

          {/* FORMULARIO ORIGINAL */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[#59554E] font-medium mb-1">
                  Nombre
                </label>
                <input
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Nombre"
                  className={`w-full border rounded-md p-2 focus:outline-none ${
                    errors.nombre
                      ? "border-red-400 focus:border-red-500"
                      : "border-[#E2E3D9] focus:border-[#A1C1BE]"
                  } text-[#0A0A0A] placeholder-gray-500 bg-[#FFFF]`}
                />
                {errors.nombre && (
                  <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
                )}
              </div>

              <div>
                <label className="block text-[#59554E] font-medium mb-1">
                  Apellido
                </label>
                <input
                  name="apellido"
                  value={form.apellido}
                  onChange={handleChange}
                  placeholder="Apellido"
                  className={`w-full border rounded-md p-2 focus:outline-none ${
                    errors.apellido
                      ? "border-red-400 focus:border-red-500"
                      : "border-[#E2E3D9] focus:border-[#A1C1BE]"
                  } text-[#0A0A0A] placeholder-gray-500 bg-[#FFFF]`}
                />
                {errors.apellido && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.apellido}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-[#59554E] font-medium mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="tucorreo@ejemplo.com"
                className={`w-full border rounded-md p-2 focus:outline-none ${
                  errors.email
                    ? "border-red-400 focus:border-red-500"
                    : "border-[#E2E3D9] focus:border-[#A1C1BE]"
                } text-[#0A0A0A] placeholder-gray-500 bg-[#FFFF]`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[#59554E] font-medium mb-1">
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full border rounded-md p-2 focus:outline-none ${
                    errors.password
                      ? "border-red-400 focus:border-red-500"
                      : "border-[#E2E3D9] focus:border-[#A1C1BE]"
                  } text-[#0A0A0A] placeholder-gray-500 bg-[#FFFF]`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-[#59554E] font-medium mb-1">
                  Confirmar contraseña
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full border rounded-md p-2 focus:outline-none ${
                    errors.confirmPassword
                      ? "border-red-400 focus:border-red-500"
                      : "border-[#E2E3D9] focus:border-[#A1C1BE]"
                  } text-[#0A0A0A] placeholder-gray-500 bg-[#FFFF]`}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#A1C1BE] hover:bg-[#89B1AC] text-[#FFFF] font-medium rounded-md p-2 transition-colors"
            >
              Crear cuenta
            </button>
          </form>

          <div className="text-center">
            <p className="text-sm text-[#59554E]">
              ¿Ya eres cliente?{" "}
              <button
                onClick={() => router.push("/login")}
                className="text-[#A1C1BE] hover:underline font-medium"
              >
                Inicia sesión aquí
              </button>
            </p>
          </div>

          <div className="text-center text-xs text-[#59554E]">
            <p>© 2025 - Todos los derechos reservados.</p>
          </div>
        </div>
      </div>

      {/* Imagen derecha */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1622700950970-e82a3df61a89?auto=format&fit=crop&w=1080&q=80"
          alt="Restaurante elegante"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-30" />
        <div className="absolute bottom-8 left-8 right-8">
          <div className="bg-[#A1C1BE]/90 text-[#0A0A0A] p-6 rounded-lg">
            <h3 className="mb-2 text-lg font-semibold">Tu negocio, tu control.</h3>
            <p className="text-sm opacity-90">
              Crea tu cuenta en segundos y empieza a gestionar tu restaurante de forma eficiente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
