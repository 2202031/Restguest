"use client";

import Link from "next/link";
import { ArrowLeft, Search, CalendarDays, ChevronDown, Eye, Edit2, Users, Receipt, Percent } from "lucide-react";

export default function LoyaltyTrackingPage() {
    const visits: any[] = [];

    return (
        <div className="w-full flex justify-center py-10 px-4">
            <div className="w-full max-w-7xl">
                {/* Encabezado */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <Link href="/dashboard/customers">
                            <button className="flex items-center justify-center bg-white shadow-sm hover:shadow-md text-gray-700 hover:text-black w-12 h-12 rounded-full transition-all duration-300">
                                <ArrowLeft className="w-6 h-6" />
                            </button>
                        </Link>
                        <div>
                            <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#2E5E60] to-[#8CB1AD]">
                                Seguimiento de Comensales
                            </h1>
                            <p className="text-gray-500 font-medium mt-1">
                                Monitorea las visitas y el uso de promociones de tus clientes
                            </p>
                        </div>
                    </div>
                </div>

                {/* Filter Section */}
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 mb-10 shadow-xl border border-gray-100">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-[#E4EFEE] p-3 rounded-2xl">
                                <Search className="w-6 h-6 text-[#2E5E60]" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Filtro de Visitas</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {/* Cliente */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Cliente</label>
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Nombre del comensal"
                                    className="pl-11 pr-4 h-12 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#2E5E60]/20 border border-gray-200 bg-[#F8F9FA] text-sm text-gray-800 font-medium transition-all"
                                />
                            </div>
                        </div>

                        {/* Fecha de visita */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Fecha de Visita</label>
                            <div className="relative">
                                <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                    type="date"
                                    className="pl-11 pr-4 h-12 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#2E5E60]/20 border border-gray-200 bg-[#F8F9FA] text-sm text-gray-800 font-medium transition-all cursor-pointer"
                                />
                            </div>
                        </div>

                        {/* Acompañantes */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Acompañantes</label>
                            <div className="relative">
                                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <select className="pl-11 pr-4 h-12 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#2E5E60]/20 border border-gray-200 bg-[#F8F9FA] text-sm text-gray-800 font-medium transition-all appearance-none cursor-pointer" defaultValue="">
                                    <option value="" disabled>Ej: 1, 2, 3...</option>
                                    <option value="solo">Solo</option>
                                    <option value="1">1 Acompañante</option>
                                    <option value="2">2 Acompañantes</option>
                                    <option value="3+">3 o más</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>
                        </div>

                        {/* Promociones aplicadas */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Promociones Usadas</label>
                            <div className="relative">
                                <Percent className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <select className="pl-11 pr-4 h-12 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#2E5E60]/20 border border-gray-200 bg-[#F8F9FA] text-sm text-gray-800 font-medium transition-all appearance-none cursor-pointer" defaultValue="">
                                    <option value="" disabled>Selecciona Promo...</option>
                                    <option value="ninguna">Ninguna</option>
                                    <option value="primera_compra">Primera Compra</option>
                                    <option value="descuento_15">15% de Descuento</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>
                        </div>

                        {/* Consumo del comensal */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Consumo Aprox.</label>
                            <div className="relative">
                                <Receipt className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <select className="pl-11 pr-4 h-12 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#2E5E60]/20 border border-gray-200 bg-[#F8F9FA] text-sm text-gray-800 font-medium transition-all appearance-none cursor-pointer" defaultValue="">
                                    <option value="" disabled>Ej: 0-200...</option>
                                    <option value="0-200">$0 - $200</option>
                                    <option value="201-500">$201 - $500</option>
                                    <option value="500+">Más de $500</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex justify-end items-center gap-4 mt-8 pt-8 border-t border-gray-100">
                        <button className="font-bold py-3 px-8 rounded-2xl transition-all text-gray-500 hover:text-gray-800 hover:bg-gray-50 border-2 border-transparent hover:border-gray-200">
                            Limpiar Filtro
                        </button>
                        <button 
                            className="font-bold py-3 px-10 rounded-2xl shadow-md text-white hover:opacity-90 transition-opacity bg-[#2E5E60]"
                        >
                            Aplicar Búsqueda
                        </button>
                    </div>
                </div>

                {/* List Section */}
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-gray-100">
                    <div className="flex justify-between items-end mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Registro de Visitas</h2>
                        <p className="text-sm font-semibold text-gray-400 bg-gray-100 px-4 py-2 rounded-full">
                            {visits.length} comensales en lista
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b-2 border-gray-100">
                                    <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-xs">Comensal</th>
                                    <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-xs text-center">Fecha</th>
                                    <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-xs text-center">Acompañantes</th>
                                    <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-xs text-center">Promoción Aplicada</th>
                                    <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-xs text-center">Consumo Total</th>
                                    <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-xs text-center">Más info</th>
                                    <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-xs text-center">Añadir Promo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {visits.length > 0 ? (
                                    visits.map((visit, index) => (
                                        <tr key={index} className="border-b border-gray-50 hover:bg-[#F8F9FA] transition group">
                                            <td className="py-5">
                                                <div className="flex flex-row items-center gap-4">
                                                    <div className="w-10 h-10 rounded-full bg-[#E4EFEE] flex justify-center items-center text-[#2E5E60] font-bold text-sm shrink-0">
                                                        {visit.name.charAt(0)}
                                                    </div>
                                                    <span className="font-bold text-gray-900">{visit.name}</span>
                                                </div>
                                            </td>
                                            <td className="py-5 font-medium text-gray-500 text-center">{visit.date}</td>
                                            <td className="py-5 font-bold text-gray-900 text-center">
                                            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                                                    {visit.companions}
                                            </span>
                                            </td>
                                            <td className="py-5 font-medium text-gray-500 text-center">
                                                {visit.promotion !== "Ninguna" 
                                                    ? <span className="text-[#2E5E60] font-bold bg-[#E4EFEE] px-3 py-1 rounded-full text-xs">{visit.promotion}</span>
                                                    : <span className="text-gray-400 italic text-sm">{visit.promotion}</span>
                                                }
                                            </td>
                                            <td className="py-5 font-bold text-gray-900 text-center">{visit.amount}</td>
                                            <td className="py-5 text-center">
                                                <button className="mx-auto flex justify-center items-center w-10 h-10 rounded-full text-gray-400 hover:text-[#2E5E60] hover:bg-[#E4EFEE] transition">
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                            </td>
                                            <td className="py-5 text-center">
                                                <button className="mx-auto flex justify-center items-center w-10 h-10 rounded-full text-gray-400 hover:text-[#2E5E60] hover:bg-[#E4EFEE] transition">
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={7} className="py-20 text-center">
                                            <div className="flex flex-col items-center justify-center">
                                                <Users className="w-16 h-16 text-gray-200 mb-4" />
                                                <p className="text-gray-500 font-medium text-lg">Todavía no has registrado las visitas de tus comensales.</p>
                                                <p className="text-gray-400 text-sm mt-1">Conecta con tus clientes y fomenta su recurrencia.</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
