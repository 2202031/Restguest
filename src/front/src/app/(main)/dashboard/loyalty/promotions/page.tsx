"use client";

import Link from "next/link";
import { ArrowLeft, CalendarDays, ChevronDown, Eye, Edit2, Trash2, Import, Tag, LayoutList } from "lucide-react";

export default function AsignarPromocionesPage() {
    const promocionesList = [
        { name: "15% por primera visita", assigned: "5", used: "2", percentage: "15%", date: "20/01/2026" },
        { name: "20% por tercera visita a la semana", assigned: "4", used: "1", percentage: "20%", date: "20/01/2026" },
        { name: "20% en desayunos", assigned: "5", used: "3", percentage: "20%", date: "20/01/2026" },
        { name: "10% en comida del menu para niños", assigned: "2", used: "0", percentage: "10%", date: "20/01/2026" },
    ];

    const comensalesList = [
        { name: "Bryan Myers", date: "20/01/2026", visits: "4", promo: "15% desc. inicial", total: "$78.50" },
        { name: "Samuel de Luque", date: "01/02/2026", visits: "3", promo: "Ninguna", total: "$320.00" },
        { name: "Benito Antonio", date: "10/02/2026", visits: "Solo", promo: "Ninguna", total: "$520.00" },
        { name: "Ricardo Izecson", date: "20/03/2026", visits: "1", promo: "20% fidelidad", total: "$550.00" },
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
                                Asignar Promociones
                            </h1>
                            <p className="text-gray-500 font-medium mt-1">
                                Crea y asigna descuentos estratégicos a grupos de comensales
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 1: Crear promoción */}
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 mb-10 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                        <div className="bg-[#E4EFEE] p-3 rounded-2xl">
                            <Tag className="w-6 h-6 text-[#2E5E60]" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Crear Nueva Promoción</h2>
                    </div>
                    
                    <div className="flex flex-col lg:flex-row gap-6 items-end">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full flex-1">
                            {/* Nombre de promoción */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Nombre de Campaña</label>
                                <input
                                    type="text"
                                    placeholder="Ej: 2x1 en Bebidas"
                                    className="px-4 h-12 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#2E5E60]/20 border border-gray-200 bg-[#F8F9FA] text-sm text-gray-800 font-medium transition-all"
                                />
                            </div>

                            {/* Porcentaje */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Descuento (%)</label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        placeholder="Ej: 15"
                                        className="pl-4 pr-10 h-12 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#2E5E60]/20 border border-gray-200 bg-[#F8F9FA] text-sm text-gray-800 font-medium transition-all"
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">%</span>
                                </div>
                            </div>

                            {/* Fecha que expira */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Fecha de Expiración</label>
                                <div className="relative">
                                    <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input
                                        type="date"
                                        className="pl-11 pr-4 h-12 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#2E5E60]/20 border border-gray-200 bg-[#F8F9FA] text-sm text-gray-800 font-medium transition-all cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>

                        <button className="bg-[#2E5E60] hover:bg-[#1A3839] text-white font-bold h-12 px-10 rounded-xl transition-all shadow-md text-sm uppercase tracking-wider w-full lg:w-auto">
                            + Publicar
                        </button>
                    </div>
                </div>

                {/* Grid para Lista Promociones y Base de Comensales */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    {/* Section 2: Lista de promociones */}
                    <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col">
                        <div className="flex justify-between items-end mb-6">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#E4EFEE] p-3 rounded-2xl">
                                    <List className="w-5 h-5 text-[#2E5E60]" />
                                </div>
                                <h2 className="text-xl font-bold text-gray-800 tracking-tight">Catalogo Activo</h2>
                            </div>
                            <span className="text-xs font-bold bg-[#E4EFEE] text-[#2E5E60] px-3 py-1 rounded-full uppercase">
                                {promocionesList.length} Promos
                            </span>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b-2 border-gray-100">
                                        <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-[10px]">Campaña</th>
                                        <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-[10px] text-center">Asig.</th>
                                        <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-[10px] text-center">Usos</th>
                                        <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-[10px] text-center">Valor</th>
                                        <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-[10px] text-center">Vence</th>
                                        <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-[10px] text-center">Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {promocionesList.map((item, index) => (
                                        <tr key={index} className="border-b border-gray-50 hover:bg-[#F8F9FA] transition group">
                                            <td className="py-4 font-bold text-gray-800 text-sm max-w-[130px] leading-tight">{item.name}</td>
                                            <td className="py-4 font-medium text-gray-500 text-sm text-center">{item.assigned}</td>
                                            <td className="py-4 font-medium text-emerald-600 text-sm text-center font-bold">{item.used}</td>
                                            <td className="py-4 text-center">
                                                <span className="bg-amber-100 text-amber-700 font-bold px-2 py-1 rounded-md text-xs">{item.percentage}</span>
                                            </td>
                                            <td className="py-4 font-medium text-gray-500 text-xs text-center">{item.date}</td>
                                            <td className="py-4 text-center flex justify-center gap-1">
                                                <button className="w-8 h-8 rounded-full flex justify-center items-center text-gray-400 hover:text-[#2E5E60] hover:bg-[#E4EFEE] transition">
                                                    <Edit2 className="w-3.5 h-3.5" />
                                                </button>
                                                <button className="w-8 h-8 rounded-full flex justify-center items-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition">
                                                    <Trash2 className="w-3.5 h-3.5" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Section 4: Lista de comensales */}
                    <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col">
                        <div className="flex justify-between items-end mb-6">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#E4EFEE] p-3 rounded-2xl">
                                    <LayoutList className="w-5 h-5 text-[#2E5E60]" />
                                </div>
                                <h2 className="text-xl font-bold text-gray-800 tracking-tight">Base de Comensales</h2>
                            </div>
                            <button className="text-xs font-bold border border-gray-200 text-gray-500 hover:text-black hover:bg-gray-50 transition px-3 py-1 rounded-full uppercase">
                                Filtrar
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b-2 border-gray-100">
                                        <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-[10px]">Cliente</th>
                                        <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-[10px] text-center">Visitas</th>
                                        <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-[10px] text-center">Promo Vigente</th>
                                        <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-[10px] text-center">Consumo</th>
                                        <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-[10px] text-center">Asignar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comensalesList.map((item, index) => (
                                        <tr key={index} className="border-b border-gray-50 hover:bg-[#F8F9FA] transition group">
                                            <td className="py-4">
                                                <div className="flex flex-row items-center gap-3">
                                                    <div className="w-7 h-7 rounded-full bg-gray-200 flex justify-center items-center text-gray-600 font-bold text-xs shrink-0">
                                                        {item.name.charAt(0)}
                                                    </div>
                                                    <span className="font-bold text-gray-800 text-sm whitespace-nowrap">{item.name}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 font-bold text-gray-700 text-sm text-center">{item.visits}</td>
                                            <td className="py-4 text-center">
                                                {item.promo !== "Ninguna" 
                                                    ? <span className="bg-[#E4EFEE] text-[#2E5E60] font-bold px-2 py-1 rounded-md text-[10px] uppercase">{item.promo}</span>
                                                    : <span className="text-gray-400 text-xs italic">N/A</span>
                                                }
                                            </td>
                                            <td className="py-4 font-bold text-[#2E5E60] text-sm text-center">{item.total}</td>
                                            <td className="py-4 text-center flex justify-center">
                                                <button className="w-8 h-8 rounded-full flex justify-center items-center text-gray-400 hover:text-[#2E5E60] hover:bg-[#E4EFEE] transition">
                                                    <Import className="w-4 h-4 rotate-180" />
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

function List(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  );
}
