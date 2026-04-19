"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, User, Mail, Phone, Calendar, UserCheck } from "lucide-react";

export default function RegisterCustomerPage() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Lógica simulada: Mostrar éxito y devolver al listado principal de clientes
        alert("¡Cliente registrado con éxito en RestGuest!");
        router.push("/dashboard/customers");
    };
    return (
        <div className="w-full flex justify-center py-10 px-4">
            <div className="w-full max-w-5xl">
                {/* Header Section */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <Link href="/dashboard/customers">
                            <button className="flex items-center justify-center bg-white shadow-sm hover:shadow-md text-gray-700 hover:text-black w-12 h-12 rounded-full transition-all duration-300">
                                <ArrowLeft className="w-6 h-6" />
                            </button>
                        </Link>
                        <div>
                            <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#2E5E60] to-[#8CB1AD]">
                                Registro de Cliente
                            </h1>
                            <p className="text-gray-500 font-medium mt-1">
                                Ingresa los datos personales para dar de alta al cliente en el sistema
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form Card */}
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                    <form id="customers-register-form" onSubmit={handleSubmit} className="flex flex-col gap-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            
                            {/* Nombre */}
                            <div className="space-y-3">
                                <label className="text-sm font-bold text-gray-700 flex items-center gap-2 uppercase tracking-wide">
                                    <User className="w-4 h-4 text-[#2E5E60]" />
                                    Nombre
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="Ej. Juan"
                                    className="w-full bg-[#F8F9FA] border border-gray-200 text-gray-800 rounded-xl h-14 px-5 outline-none transition-all focus:border-[#2E5E60] focus:ring-4 focus:ring-[#2E5E60]/10 font-medium"
                                />
                            </div>

                            {/* Apellido */}
                            <div className="space-y-3">
                                <label className="text-sm font-bold text-gray-700 flex items-center gap-2 uppercase tracking-wide">
                                    <User className="w-4 h-4 text-[#2E5E60]" />
                                    Apellido
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="Ej. Pérez"
                                    className="w-full bg-[#F8F9FA] border border-gray-200 text-gray-800 rounded-xl h-14 px-5 outline-none transition-all focus:border-[#2E5E60] focus:ring-4 focus:ring-[#2E5E60]/10 font-medium"
                                />
                            </div>

                            {/* Correo Electrónico */}
                            <div className="space-y-3">
                                <label className="text-sm font-bold text-gray-700 flex items-center gap-2 uppercase tracking-wide">
                                    <Mail className="w-4 h-4 text-[#2E5E60]" />
                                    Correo Electrónico
                                </label>
                                <input 
                                    type="email" 
                                    placeholder="correo@ejemplo.com"
                                    className="w-full bg-[#F8F9FA] border border-gray-200 text-gray-800 rounded-xl h-14 px-5 outline-none transition-all focus:border-[#2E5E60] focus:ring-4 focus:ring-[#2E5E60]/10 font-medium"
                                />
                            </div>

                            {/* Teléfono */}
                            <div className="space-y-3">
                                <label className="text-sm font-bold text-gray-700 flex items-center gap-2 uppercase tracking-wide">
                                    <Phone className="w-4 h-4 text-[#2E5E60]" />
                                    Teléfono
                                </label>
                                <input 
                                    type="tel" 
                                    placeholder="10 dígitos"
                                    className="w-full bg-[#F8F9FA] border border-gray-200 text-gray-800 rounded-xl h-14 px-5 outline-none transition-all focus:border-[#2E5E60] focus:ring-4 focus:ring-[#2E5E60]/10 font-medium"
                                />
                            </div>

                            {/* Fecha de Nacimiento */}
                            <div className="space-y-3">
                                <label className="text-sm font-bold text-gray-700 flex items-center gap-2 uppercase tracking-wide">
                                    <Calendar className="w-4 h-4 text-[#2E5E60]" />
                                    Fecha de Nacimiento
                                </label>
                                <input 
                                    type="date" 
                                    className="w-full bg-[#F8F9FA] border border-gray-200 text-gray-800 rounded-xl h-14 px-5 outline-none transition-all focus:border-[#2E5E60] focus:ring-4 focus:ring-[#2E5E60]/10 font-medium"
                                />
                            </div>

                            {/* Género */}
                            <div className="space-y-3">
                                <label className="text-sm font-bold text-gray-700 flex items-center gap-2 uppercase tracking-wide">
                                    <UserCheck className="w-4 h-4 text-[#2E5E60]" />
                                    Género
                                </label>
                                <div className="relative">
                                    <select 
                                        className="w-full appearance-none bg-[#F8F9FA] border border-gray-200 text-gray-800 rounded-xl h-14 px-5 outline-none transition-all focus:border-[#2E5E60] focus:ring-4 focus:ring-[#2E5E60]/10 font-medium cursor-pointer"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Selecciona un género</option>
                                        <option value="masculino">Masculino</option>
                                        <option value="femenino">Femenino</option>
                                        <option value="otro">Otro</option>
                                        <option value="prefiero_no_decir">Prefiero no decir</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-500">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Buttons Area */}
                        <div className="flex flex-col-reverse md:flex-row justify-end items-center gap-4 mt-8 pt-8 border-t border-gray-100">
                            <Link href="/dashboard/customers" className="w-full md:w-auto">
                                <button type="button" className="w-full md:w-auto font-bold py-4 px-10 rounded-2xl transition-all text-gray-500 hover:text-gray-800 hover:bg-gray-50 border-2 border-transparent hover:border-gray-200">
                                    Cancelar
                                </button>
                            </Link>
                            <button 
                                type="submit" 
                                className="w-full md:w-auto font-bold py-4 px-12 rounded-2xl shadow-lg shadow-[#2E5E60]/20 text-white hover:opacity-90 transition-opacity"
                                style={{ backgroundColor: "#2E5E60" }}
                            >
                                <span className="text-lg uppercase tracking-wider">Registrar Cliente</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
