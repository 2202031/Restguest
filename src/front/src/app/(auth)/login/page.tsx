"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement login logic
        console.log("Login:", { email, password });
        router.push("/dashboard");
    };

    return (
        <div className="min-h-screen flex w-full">
            
            {/* Left Column - Image (Hidden on mobile) */}
            <div className="hidden lg:flex w-1/2 relative bg-gray-900">
                <Image 
                    src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200" 
                    alt="Restaurante Barista" 
                    fill 
                    className="object-cover opacity-90"
                />
                
                {/* Fixed Footer Text Overlay on image */}
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex flex-col gap-2 text-white/80 text-sm font-medium">
                        <div className="flex items-center gap-4">
                            <span>@2025 Todos los derechos reservados.</span>
                            <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                            <span>Desarrollado por Restguest</span>
                        </div>
                        <div className="flex items-center gap-4 mt-2">
                            <Link href="#" className="hover:text-white transition-colors">Terminos de uso</Link>
                            <Link href="#" className="hover:text-white transition-colors">Politicas de privacidad</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#F3F4E5] p-6 relative">
                
                {/* Card Container */}
                <div className="w-full max-w-md bg-white p-10 pt-16 shadow-xl relative mt-16">
                    
                    {/* Overlapping Logo */}
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40">
                        <Image 
                            src="/images/logo.png" 
                            alt="RestGuest Logo" 
                            fill 
                            className="object-contain"
                        />
                    </div>

                    <h1 className="text-2xl font-medium text-center text-gray-900 mb-8 mt-2">
                        Bienvenido, inicia sesión
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        
                        <div>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Correo Electrónico*"
                                required
                                className="w-full px-4 py-3 bg-transparent border border-gray-200 transition-colors focus:outline-none focus:border-gray-400 text-gray-900 placeholder:text-gray-400"
                            />
                        </div>

                        <div>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Contraseña*"
                                required
                                className="w-full px-4 py-3 bg-transparent border border-gray-200 transition-colors focus:outline-none focus:border-gray-400 text-gray-900 placeholder:text-gray-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 text-white font-bold transition-all hover:opacity-90 tracking-wide mt-2"
                            style={{ backgroundColor: "#A1C1BE" }}
                        >
                            INICIAR SESIÓN
                        </button>

                    </form>

                    <div className="text-center mt-8">
                        <Link
                            href="/register"
                            className="text-sm font-bold text-[#2E5E60] hover:underline"
                        >
                            ¿No eres cliente? Empieza ahora aquí!
                        </Link>
                    </div>

                    {/* Back to Home Link (Optional, for easy navigation during dev) */}
                    <div className="absolute top-4 right-4">
                        <Link href="/" className="text-xs text-gray-400 hover:text-gray-600">
                           ✕ Cerrar
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
