"use client";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import bcrypt from "bcryptjs";

export default function LoginForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Obtener usuario guardado
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      setErrors({ email: "No existe una cuenta con este correo." });
      return;
    }

    if (savedUser.email !== form.email) {
      setErrors({ email: "El correo no coincide con ninguna cuenta registrada." });
      return;
    }

    // Comparar contraseña usando bcrypt
    const passwordMatch = await bcrypt.compare(form.password, savedUser.password);

    if (!passwordMatch) {
      setErrors({ password: "La contraseña es incorrecta." });
      return;
    }

    // Crear sesión
    localStorage.setItem(
      "session",
      JSON.stringify({
        active: true,
        email: savedUser.email,
        name: savedUser.fullname,
      })
    );

    router.push("/dashboard");
  };

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="min-h-screen flex bg-[#F3F4E5]">
      {/* Imagen grande a la izquierda */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1622700950970-e82a3df61a89?auto=format&fit=crop&w=1080&q=80"
          alt="Restaurante elegante"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-30 z-10" />
        <div className="absolute bottom-8 left-8 right-8 z-20">
          <div className="bg-[#0A0A0A]/60 text-[#F3F4E5] p-4 rounded-lg">
            <p className="text-sm">
              Gestiona tu restaurante de manera eficiente y mantén a tus huéspedes satisfechos con nuestra plataforma integral.
            </p>
          </div>
        </div>
      </div>

      {/* Formulario con fondo animado */}
      <div className="relative w-full lg:w-1/2 flex items-center justify-center bg-[#F3F4E5] overflow-hidden p-8">
        <Particles
          id="tsparticles"
          init={particlesInit}
          className="absolute inset-0 z-0"
          options={{
            background: { color: { value: "#F3F4E5" } },
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
                speed: 1.2,
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

        <div className="relative z-10 w-full max-w-md space-y-6">
          <div className="w-full h-20 flex items-center justify-center mb-4">
            <img src="/RestGuest_LoGO.png" alt="RestGuest Logo" className="w-28 mb-6" />
          </div>

          <div className="text-center space-y-2">
            <h2 className="text-[#0A0A0A] text-2xl font-semibold">Bienvenido, inicia sesión</h2>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[#59554E] font-medium mb-1">Correo Electrónico</label>
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
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-[#59554E] font-medium mb-1">Contraseña</label>
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
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-[#A1C1BE] hover:bg-[#89B1AC] text-[#FFFF] font-medium rounded-md p-2 transition-colors"
            >
              Iniciar sesión
            </button>
          </form>

          <div className="text-center">
            <p className="text-sm text-[#59554E]">
              ¿No eres cliente?{" "}
              <button
                onClick={() => router.push("/register")}
                className="text-[#A1C1BE] hover:underline font-medium"
              >
                Regístrate ahora aquí
              </button>
            </p>
          </div>

          <div className="text-center text-xs text-[#59554E]">
            <p>© 2025 - Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
