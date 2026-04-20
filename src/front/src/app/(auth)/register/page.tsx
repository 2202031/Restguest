"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        // Lógica simulada de registro
        console.log("Register:", { name, lastName, email, password });
        
        // Reset tutorial flag for new accounts!
        localStorage.removeItem("restguest_tutorial_done");
        
        // Redirigir a selección de plan (Fase 1.5 del onboarding)
        router.push("/subscription");
    };

    return (
        <div className="min-h-screen flex w-full">
            
            {/* Left Column - Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between bg-[#F3F4E5] relative p-8">
                
                {/* Logo Top Left */}
                <div className="w-24 h-24 mb-4 lg:absolute lg:top-8 lg:left-8">
                    <Link href="/">
                        <Image 
                            src="/images/logo.png" 
                            alt="RestGuest Logo" 
                            width={96}
                            height={96}
                            className="object-contain"
                        />
                    </Link>
                </div>

                {/* Form Container */}
                <div className="w-full max-w-lg mx-auto my-auto pt-16">
                    <h1 className="text-4xl font-bold text-center text-[#1a1a1a] mb-12">
                        ¡Registrate ahora!
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Nombre */}
                            <div>
                                <label className="block text-sm mb-2 text-[#59554E]">Nombre*</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 bg-white border border-gray-200 transition-colors focus:outline-none focus:border-gray-400 text-gray-900 rounded-sm"
                                />
                            </div>
                            
                            {/* Apellido */}
                            <div>
                                <label className="block text-sm mb-2 text-[#59554E]">Apellido*</label>
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 bg-white border border-gray-200 transition-colors focus:outline-none focus:border-gray-400 text-gray-900 rounded-sm"
                                />
                            </div>
                        </div>

                        {/* Correo Electrónico */}
                        <div>
                            <label className="block text-sm mb-2 text-[#59554E]">Correo electrónico*</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-3 bg-white border border-gray-200 transition-colors focus:outline-none focus:border-gray-400 text-gray-900 rounded-sm"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Contraseña */}
                            <div>
                                <label className="block text-sm mb-2 text-[#59554E]">Contraseña*</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    minLength={8}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 transition-colors focus:outline-none focus:border-gray-400 text-gray-900 rounded-sm"
                                />
                            </div>
                            
                            {/* Confirmar Contraseña */}
                            <div>
                                <label className="block text-sm mb-2 text-[#59554E]">Confirmar contraseña*</label>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    minLength={8}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 transition-colors focus:outline-none focus:border-gray-400 text-gray-900 rounded-sm"
                                />
                            </div>
                        </div>

                        {/* Checkbox */}
                        <div className="flex items-center gap-3 pt-2">
                             <input 
                                type="checkbox" 
                                id="terms" 
                                checked={agreeTerms}
                                onChange={(e) => setAgreeTerms(e.target.checked)}
                                required
                                className="w-4 h-4 text-[#A1C1BE] border-gray-300 rounded focus:ring-[#A1C1BE]"
                             />
                             <label htmlFor="terms" className="text-sm text-[#59554E]/80">
                                By checking the box you agree to our <span className="text-[#59554E] font-medium">Terms</span> and <span className="text-[#59554E] font-medium">Conditions</span>.
                             </label>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center mt-6">
                            <button
                                type="submit"
                                className="w-[300px] py-4 text-white font-bold transition-all hover:opacity-90 tracking-wide rounded-sm"
                                style={{ backgroundColor: "#A1C1BE" }}
                            >
                                CREAR CUENTA
                            </button>
                        </div>
                    </form>

                    <div className="text-center mt-6">
                        <Link
                            href="/login"
                            className="text-sm font-bold text-[#2E5E60] hover:underline"
                        >
                            ¿Ya eres cliente? Inicia sesión aquí!
                        </Link>
                    </div>
                </div>

                {/* Footer Left */}
                <div className="mt-auto pt-8">
                    <p className="text-xs text-[#59554E] font-medium">
                        @2025 Todos los derechos reservados.
                    </p>
                </div>
            </div>

            {/* Right Column - Image */}
            <div className="hidden lg:flex w-1/2 relative bg-gray-900">
                <Image 
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200" 
                    alt="Restaurante Interior" 
                    fill 
                    className="object-cover opacity-90"
                />
                
                {/* Floating Glassmorphism Box */}
                <div className="absolute bottom-8 right-8 w-[450px] bg-[#A1C1BE]/80 backdrop-blur-md p-10 shadow-2xl">
                    <h2 className="text-4xl font-bold text-white leading-snug text-center">
                        Tu negocio, tu<br/> control. Crea tu<br/> cuenta en<br/> segundos.
                    </h2>
                </div>
            </div>

        </div>
    );
}
