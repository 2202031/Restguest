"use client";

import Link from "next/link";
import { ArrowLeft, Filter, Search, Calendar, Package, DollarSign, Eye } from "lucide-react";

// Datos de ejemplo vacios para simular estado de nuevo usuario
const tableData: any[] = [];

export default function HistoryPage() {
    return (
        <div className="w-full flex justify-center py-10 px-4">
            <div className="w-full max-w-7xl">
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
                                Historial de Consumo
                            </h1>
                            <p className="text-gray-500 font-medium mt-1">
                                Monitorea y filtra las órdenes previas de todos tus clientes
                            </p>
                        </div>
                    </div>
                </div>

                {/* Filtros */}
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 mb-10 shadow-xl border border-gray-100 flex flex-col gap-6">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-[#E4EFEE] p-3 rounded-2xl">
                                <Filter className="w-6 h-6 text-[#2E5E60]" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Filtros de Búsqueda</h2>
                        </div>
                        <button 
                            type="button" 
                            className="text-sm font-bold text-[#2E5E60] hover:text-[#1A3839] transition-colors uppercase tracking-wider"
                        >
                            Limpiar Filtros
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {/* Cliente */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Cliente</label>
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input 
                                    type="text" 
                                    placeholder="Buscar por nombre..." 
                                    className="pl-11 pr-4 h-12 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#2E5E60]/20 border border-gray-200 bg-[#F8F9FA] text-sm text-gray-800 font-medium transition-all" 
                                />
                            </div>
                        </div>
                        
                        {/* Fecha Desde */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Fecha Desde</label>
                            <div className="relative">
                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input 
                                    type="date" 
                                    className="pl-11 pr-4 h-12 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#2E5E60]/20 border border-gray-200 bg-[#F8F9FA] text-sm text-gray-800 font-medium transition-all" 
                                />
                            </div>
                        </div>

                        {/* Fecha Hasta */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Fecha Hasta</label>
                            <div className="relative">
                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input 
                                    type="date" 
                                    className="pl-11 pr-4 h-12 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#2E5E60]/20 border border-gray-200 bg-[#F8F9FA] text-sm text-gray-800 font-medium transition-all" 
                                />
                            </div>
                        </div>

                        {/* Tipo de Producto */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Tipo Producto</label>
                            <div className="relative">
                                <Package className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <select 
                                    className="pl-11 pr-4 h-12 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#2E5E60]/20 border border-gray-200 bg-[#F8F9FA] text-sm text-gray-800 font-medium transition-all appearance-none cursor-pointer" 
                                    defaultValue=""
                                >
                                    <option value="" disabled>Categoría...</option>
                                    <option value="bebida">Bebidas</option>
                                    <option value="plato_fuerte">Plato Fuerte</option>
                                    <option value="postre">Postres</option>
                                </select>
                            </div>
                        </div>

                        {/* Monto Minimo */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Monto Mínimo</label>
                            <div className="relative">
                                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input 
                                    type="number" 
                                    placeholder="0.00" 
                                    className="pl-11 pr-4 h-12 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#2E5E60]/20 border border-gray-200 bg-[#F8F9FA] text-sm text-gray-800 font-medium transition-all" 
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Resultados Tabla */}
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-gray-100">
                    <div className="flex justify-between items-end mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Registro de Órdenes</h2>
                        <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Registro de Órdenes</h2>
                        <p className="text-sm font-semibold text-gray-400 bg-gray-100 px-4 py-2 rounded-full">
                            {tableData.length} resultados encontrados
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b-2 border-gray-100">
                                    <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-xs">ID de Orden</th>
                                    <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-xs">Cliente</th>
                                    <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-xs">Fecha Factura</th>
                                    <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-xs">Monto Total</th>
                                    <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-xs">Estado</th>
                                    <th className="pb-4 font-bold text-gray-400 uppercase tracking-wider text-xs text-center">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.length > 0 ? (
                                    tableData.map((row, index) => {
                                        // Determinar color de badge por estado
                                        let badgeColor = "bg-green-100 text-green-700";
                                        if (row.status === "Cancelado") badgeColor = "bg-red-100 text-red-700";
                                        if (row.status === "Procesando") badgeColor = "bg-amber-100 text-amber-700";

                                        return (
                                            <tr key={index} className="border-b border-gray-50 hover:bg-[#F8F9FA] transition group">
                                                <td className="py-5 font-semibold text-gray-500">{row.id}</td>
                                                <td className="py-5 font-bold text-gray-900 flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-[#E4EFEE] flex justify-center items-center text-[#2E5E60] font-bold text-xs">
                                                        {row.client.charAt(0)}
                                                    </div>
                                                    {row.client}
                                                </td>
                                                <td className="py-5 font-medium text-gray-500">{row.date}</td>
                                                <td className="py-5 font-bold text-gray-900">{row.total}</td>
                                                <td className="py-5 font-bold">
                                                    <span className={`px-3 py-1 rounded-full text-xs box-border ${badgeColor}`}>
                                                        {row.status}
                                                    </span>
                                                </td>
                                                <td className="py-5">
                                                    <button className="mx-auto flex justify-center items-center w-10 h-10 rounded-full text-gray-400 hover:text-[#2E5E60] hover:bg-[#E4EFEE] transition">
                                                        <Eye className="w-5 h-5" />
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <tr>
                                        <td colSpan={6} className="py-20 text-center">
                                            <div className="flex flex-col items-center justify-center">
                                                <Package className="w-16 h-16 text-gray-200 mb-4" />
                                                <p className="text-gray-500 font-medium text-lg">No hay órdenes registradas todavía.</p>
                                                <p className="text-gray-400 text-sm mt-1">Cuando cobres la primera mesa, aparecerá aquí.</p>
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
