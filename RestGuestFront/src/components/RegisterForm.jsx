"use client";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex">
      {/* Formulario a la izquierda */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-blue-50">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2">
            <h2 className="mt-6 text-gray-800 text-2xl font-semibold">¡Regístrate ahora!</h2>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-gray-700">Nombre</label>
                <input
                  placeholder="Juan"
                  className="w-full border border-blue-200 rounded-md p-2 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="text-gray-700">Apellido</label>
                <input
                  placeholder="Pérez"
                  className="w-full border border-blue-200 rounded-md p-2 focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-700">Correo electrónico</label>
              <input
                type="email"
                placeholder="tucorreo@ejemplo.com"
                className="w-full border border-blue-200 rounded-md p-2 focus:outline-none focus:border-blue-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-gray-700">Contraseña</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full border border-blue-200 rounded-md p-2 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="text-gray-700">Confirmar contraseña</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full border border-blue-200 rounded-md p-2 focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-400 hover:bg-blue-500 text-white rounded-md p-2"
            >
              Crear cuenta
            </button>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              ¿Ya eres cliente?{" "}
              <button
                onClick={() => router.push("/login")}
                className="text-blue-600 hover:underline"
              >
                Inicia sesión aquí
              </button>
            </p>
          </div>

          <div className="text-center text-xs text-gray-500">
            <p>© 2025 - Todos los derechos reservados.</p>
          </div>
        </div>
      </div>

      {/* Imagen a la derecha */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1622700950970-e82a3df61a89?auto=format&fit=crop&w=1080&q=80"
          alt="Person working at office desk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="absolute bottom-8 left-8 right-8">
          <div className="bg-blue-400 bg-opacity-90 text-white p-6 rounded-lg">
            <h3 className="mb-2 text-lg font-semibold">Tu negocio, tu control.</h3>
            <p className="text-sm opacity-90">
              Únete a miles de restaurantes que ya confían en nuestra plataforma para gestionar sus operaciones diarias.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}