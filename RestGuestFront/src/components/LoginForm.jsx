"use client";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex">
      {/* Imagen a la izquierda */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?auto=format&fit=crop&w=1080&q=80"
          alt="Chef cooking in kitchen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="absolute bottom-8 left-8 right-8">
          <div className="bg-black bg-opacity-50 text-white p-4 rounded-lg">
            <p className="text-sm">
              Gestiona tu restaurante de manera eficiente y mantén a tus huéspedes satisfechos con nuestra plataforma integral.
            </p>
          </div>
        </div>
      </div>

      {/* Formulario a la derecha */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-blue-50">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <h2 className="mt-6 text-gray-800 text-2xl font-semibold">Bienvenido, inicia sesión</h2>
          </div>

          <form className="space-y-4">
            <div>
              <label className="text-gray-700">Correo Electrónico</label>
              <input
                type="email"
                placeholder="tucorreo@ejemplo.com"
                className="w-full border border-blue-200 rounded-md p-2 focus:outline-none focus:border-blue-400"
              />
            </div>

            <div>
              <label className="text-gray-700">Contraseña</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-blue-200 rounded-md p-2 focus:outline-none focus:border-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-400 hover:bg-blue-500 text-white rounded-md p-2"
            >
              Iniciar sesión
            </button>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              ¿No eres cliente?{" "}
              <button
                onClick={() => router.push("/register")}
                className="text-blue-600 hover:underline"
              >
                Regístrate ahora aquí
              </button>
            </p>
          </div>

          <div className="text-center text-xs text-gray-500">
            <p>© 2025 - Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  );
}