"use client";

import Link from "next/link";
import { ArrowLeft, CalendarDays, ChevronDown, Trash2, MailOpen, FileText } from "lucide-react";

export default function MarketingPage() {
    const correosList = [
        { name: "15% por primera visita", date: "20/01/2026", promo: "15% por primera visita", recipients: "25" },
        { name: "20% segunda visita", date: "01/02/2026", promo: "20% segunda visita", recipients: "10" },
        { name: "15% quinta visita", date: "10/02/2026", promo: "15% quinta visita", recipients: "5" },
        { name: "20% por tercera visita a la semana", date: "20/03/2026", promo: "20% por 3ra vis.", recipients: "35" },
    ];

    return (
        <div className="w-full flex justify-center py-10 px-4">
            <div className="w-full max-w-7xl">
                {/* Encabezado */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <Link href="/dashboard/loyalty">
                            <button className="flex items-center justify-center bg-white shadow-sm hover:shadow-md text-gray-700 hover:text-black w-12 h-12 rounded-full transition-all duration-300">
                                <ArrowLeft className="w-6 h-6" />
                            </button>
                        </Link>
                        <div>
                            <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#2E5E60] to-[#8CB1AD]">
                                Campañas de Marketing
                            </h1>
                            <p className="text-gray-500 font-medium mt-1">
                                Redacta y programa envíos masivos a tu base de comensales
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 1: Crear correo de promoción */}
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 mb-10 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
                        <div className="bg-[#E4EFEE] p-3 rounded-2xl">
                            <MailOpen className="w-6 h-6 text-[#2E5E60]" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Redactar Nueva Campaña</h2>
                    </div>
                    
                    <div className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                            {/* Nombre de promoción */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Título de Campaña</label>
                                <input
                                    type="text"
                                    placeholder="Promoción de Verano"
                                    className="px-4 h-12 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#2E5E60]/20 border border-gray-200 bg-[#F8F9FA] text-sm text-gray-800 font-medium transition-all"
                                />
                            </div>

                            {/* Promociones aplicadas */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Promoción a Enviar</label>
                                <div className="relative">
                                    <select className="px-4 pr-10 h-12 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#2E5E60]/20 border border-gray-200 bg-[#F8F9FA] text-sm text-gray-800 font-medium transition-all appearance-none cursor-pointer" defaultValue="">
                                        <option value="" disabled>Seleccionar promo...</option>
                                        <option>20% Segunda visita</option>
                                        <option>15% Postre gratis</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                </div>
                            </div>

                            {/* Selecciona los comensales */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Destinatarios</label>
                                <div className="relative">
                                    <select className="px-4 pr-10 h-12 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#2E5E60]/20 border border-gray-200 bg-[#F8F9FA] text-sm text-gray-800 font-medium transition-all appearance-none cursor-pointer" defaultValue="">
                                        <option value="" disabled>Seleccionar público...</option>
                                        <option>Todos los recurrentes</option>
                                        <option>Visitas último mes</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                </div>
                            </div>

                            {/* Fecha de envio */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Fecha de Envío</label>
                                <div className="relative">
                                    <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input
                                        type="date"
                                        className="pl-11 pr-4 h-12 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#2E5E60]/20 border border-gray-200 bg-[#F8F9FA] text-sm text-gray-800 font-medium transition-all cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Editor Area */}
                        <div className="w-full mt-2 flex flex-col gap-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Cuerpo del Correo</label>
                            <textarea 
                                className="w-full min-h-[220px] bg-[#F8F9FA] border border-gray-200 rounded-2xl p-6 outline-none text-sm text-gray-800 resize-none focus:border-[#2E5E60] focus:ring-4 focus:ring-[#2E5E60]/10 transition-all font-medium"
                                placeholder="Escribe tu mensaje interactivo aquí..."
                            ></textarea>
                        </div>

                        <div className="flex justify-end items-center mt-2">
                            <button className="bg-[#2E5E60] hover:bg-[#1A3839] text-white font-bold py-3 px-12 rounded-2xl transition-all shadow-md uppercase tracking-wider text-sm">
                                Programar Envío
                            </button>
                        </div>
                    </div>
                </div>

                {/* Historial Section */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
                    {/* Section 2: Filtro de marketing */}
                    <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-[#E4EFEE] p-3 rounded-2xl">
                                <FileText className="w-6 h-6 text-[#2E5E60]" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-800 tracking-tight">Buscar en Historial</h2>
                        </div>

                        <div className="flex-1 flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Destinatarios</label>
                                <select className="px-4 h-12 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#2E5E60]/20 border border-gray-200 bg-[#F8F9FA] text-sm text-gray-800 font-medium transition-all appearance-none cursor-pointer">
                                    <option>Última semana</option>
                                    <option>Último mes</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Fecha de Envío</label>
                                <input type="date" className="px-4 h-12 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#2E5E60]/20 border border-gray-200 bg-[#F8F9FA] text-sm text-gray-800 font-medium transition-all" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Status de Campaña</label>
                                <select className="px-4 h-12 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#2E5E60]/20 border border-gray-200 bg-[#F8F9FA] text-sm text-gray-800 font-medium transition-all appearance-none cursor-pointer">
                                    <option>Enviado</option>
                                    <option>Borrador</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col mt-8 gap-3 pt-6 border-t border-gray-100">
                            <button className="w-full bg-[#2E5E60] text-white font-bold h-12 rounded-xl hover:bg-[#1A3839] transition-all shadow-sm">
                                Buscar
                            </button>
                            <button className="w-full text-gray-500 font-bold h-12 rounded-xl hover:bg-gray-100 transition-all border border-gray-200">
                                Limpiar Filtros
                            </button>
                        </div>
                    </div>

                    {/* Section 3: Lista de marketing */}
                    <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-gray-100">
                        <div className="flex justify-between items-end mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Registro de Correos</h2>
                            <p className="text-sm font-semibold text-gray-400 bg-gray-100 px-4 py-2 rounded-full">
                                {correosList.length} correos
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b-2 border-gray-100">
                                        <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-xs">Asunto de Correo</th>
                                        <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-xs text-center">Fecha</th>
                                        <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-xs text-center">Promoción (Etiqueta)</th>
                                        <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-xs text-center">Alcance</th>
                                        <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-xs text-center">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {correosList.map((item, index) => (
                                        <tr key={index} className="border-b border-gray-50 hover:bg-[#F8F9FA] transition group">
                                            <td className="py-5 font-bold text-gray-900 leading-snug">{item.name}</td>
                                            <td className="py-5 font-medium text-gray-500 text-center">{item.date}</td>
                                            <td className="py-5 text-center">
                                                <span className="bg-[#E4EFEE] text-[#2E5E60] font-bold px-3 py-1 rounded-full text-xs">
                                                    {item.promo}
                                                </span>
                                            </td>
                                            <td className="py-5 font-bold text-gray-900 text-center">{item.recipients} users</td>
                                            <td className="py-5 text-center">
                                                <button className="mx-auto flex justify-center items-center w-10 h-10 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
