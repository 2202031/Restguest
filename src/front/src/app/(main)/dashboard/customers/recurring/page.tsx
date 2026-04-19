"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, Users, Star, CalendarDays, Edit2 } from "lucide-react";

// Datos de demostración
const clientsData = [
    { name: 'Vanessa González', email: 'vanessa@ejemplo.com', category: 'Frecuente', visits: 15, lastVisit: '15/07/2026', spend: '$85.50' },
    { name: 'Floyd Miles', email: 'floyd@yahoo.com', category: 'Frecuente', visits: 12, lastVisit: '18/07/2026', spend: '$95.00' },
    { name: 'Ronald Richards', email: 'ronald@adobe.com', category: 'Frecuente', visits: 8, lastVisit: '20/07/2026', spend: '$120.75' },
    { name: 'Marvin McKinney', email: 'marvin@tesla.com', category: 'Ocasional', visits: 5, lastVisit: '10/06/2026', spend: '$65.25' },
    { name: 'Jerome Bell', email: 'jerome@google.com', category: 'Nuevo', visits: 3, lastVisit: '05/05/2026', spend: '$45.50' },
];

export default function RecurringCustomersPage() {
    const [activeTab, setActiveTab] = useState("todos");

    // Lógica para filtrar y ordernar la información
    let processedData = [...clientsData];
    
    if (activeTab === "frecuentes") {
        processedData = processedData.filter(client => client.category === "Frecuente");
    } else if (activeTab === "visitas") {
        // Ordenar simulando las más recientes primero
        processedData.sort((a, b) => {
            const [dayA, monthA, yearA] = a.lastVisit.split('/');
            const [dayB, monthB, yearB] = b.lastVisit.split('/');
            return new Date(`${yearB}-${monthB}-${dayB}`).getTime() - new Date(`${yearA}-${monthA}-${dayA}`).getTime();
        });
    }

    // Clases dinámicas de estilo para pestañas
    const activeClass = "flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-[#2E5E60] text-white font-bold text-sm shadow-lg shadow-[#2E5E60]/20 transition-all hover:opacity-90";
    const inactiveClass = "flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-[#F8F9FA] text-gray-500 font-bold text-sm border border-gray-200 hover:bg-gray-100 hover:text-gray-700 transition-all";

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
                                Clientes Recurrentes
                            </h1>
                            <p className="text-gray-500 font-medium mt-1">
                                Analiza la retención y segmentación de tus clientes activos
                            </p>
                        </div>
                    </div>
                </div>

                {/* Búsqueda y Pestañas */}
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 mb-10 shadow-xl border border-gray-100">
                    <div className="relative mb-8">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Buscar por nombre, correo electrónico o categoría..." 
                            className="w-full pl-14 pr-6 py-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#2E5E60]/10 border border-gray-200 bg-[#F8F9FA] text-base text-gray-800 font-medium transition-all" 
                        />
                    </div>

                    {/* Pestañas de Filtro (Tabs) */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button 
                            className={activeTab === "todos" ? activeClass : inactiveClass}
                            onClick={() => setActiveTab("todos")}
                        >
                            <Users className="w-5 h-5" /> 
                            Todos los Clientes
                        </button>
                        <button 
                            className={activeTab === "frecuentes" ? activeClass : inactiveClass}
                            onClick={() => setActiveTab("frecuentes")}
                        >
                            <Star className="w-5 h-5" /> 
                            Clientes Frecuentes
                        </button>
                        <button 
                            className={activeTab === "visitas" ? activeClass : inactiveClass}
                            onClick={() => setActiveTab("visitas")}
                        >
                            <CalendarDays className="w-5 h-5" /> 
                            Visitas Recientes
                        </button>
                    </div>
                </div>

                {/* Panel de Resultados: Tabla */}
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-gray-100">
                    <div className="flex justify-between items-end mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Directorio Completo</h2>
                        <p className="text-sm font-semibold text-gray-400 bg-gray-100 px-4 py-2 rounded-full">
                            {processedData.length} resultados devueltos
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b-2 border-gray-100">
                                    <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-xs">Cliente</th>
                                    <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-xs text-center">Categoría</th>
                                    <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-xs text-center">Visitas</th>
                                    <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-xs text-center">Última Visita</th>
                                    <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-xs text-center">Gasto Promedio</th>
                                    <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-xs text-center">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {processedData.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="text-center py-10 font-bold text-gray-400">
                                            No se encontraron clientes para este filtro.
                                        </td>
                                    </tr>
                                ) : processedData.map((client, index) => {
                                    // Determinar color de badge por categoria
                                    let badgeColor = "bg-gray-100 text-gray-700";
                                    if (client.category === "Frecuente") badgeColor = "bg-emerald-100 text-emerald-700 border border-emerald-200";
                                    if (client.category === "Ocasional") badgeColor = "bg-sky-100 text-sky-700 border border-sky-200";
                                    if (client.category === "Nuevo") badgeColor = "bg-fuchsia-100 text-fuchsia-700 border border-fuchsia-200";

                                    return (
                                        <tr key={index} className="border-b border-gray-50 hover:bg-[#F8F9FA] transition group">
                                            <td className="py-5">
                                                <div className="flex flex-row items-center gap-4">
                                                    <div className="w-10 h-10 rounded-full bg-[#E4EFEE] flex justify-center items-center text-[#2E5E60] font-bold text-sm shrink-0">
                                                        {client.name.charAt(0)}
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="font-bold text-gray-900">{client.name}</span>
                                                        <span className="text-xs font-semibold text-gray-400 mt-0.5">{client.email}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-5 text-center">
                                                <span className={`px-4 py-1.5 rounded-full text-xs font-bold inline-block min-w-[100px] text-center ${badgeColor}`}>
                                                    {client.category}
                                                </span>
                                            </td>
                                            <td className="py-5 font-bold text-gray-900 text-center">{client.visits}</td>
                                            <td className="py-5 font-medium text-gray-500 text-center">{client.lastVisit}</td>
                                            <td className="py-5 font-bold text-[#2E5E60] text-center">{client.spend}</td>
                                            <td className="py-5 text-center">
                                                <button className="mx-auto flex justify-center items-center w-10 h-10 rounded-full text-gray-400 hover:text-[#2E5E60] hover:bg-[#E4EFEE] transition">
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
