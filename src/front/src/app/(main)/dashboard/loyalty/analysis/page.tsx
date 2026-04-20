"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, BarChart2, Star, Send } from "lucide-react";
import CustomBarChart, { ChartDataPoint } from "@/components/loyalty/CustomBarChart";

export default function AnalisisPromocionesPage() {
    // Data mapping roughly estimating the heights from the mockups
    
    // Chart 1: Numero de promociones canjeadas por semana
    const dataCanjeadasSemana: ChartDataPoint[] = [
        { label: "Lunes", value: 100 },
        { label: "Martes", value: 65 },
        { label: "Miercoles", value: 75 },
        { label: "Jueves", value: 70 },
        { label: "Viernes", value: 50 },
        { label: "Sabado", value: 75 },
    ];

    // Chart 2: Promociones mas usadas
    const dataPromocionesUsadas: ChartDataPoint[] = [
        { label: ["15%", "de", "descuento"], value: 100 },
        { label: ["20%", "Primera", "visita"], value: 65 },
        { label: ["10%", "tercera", "visita"], value: 75 },
        { label: ["15%", "por", "visita"], value: 65 },
        { label: ["10% de", "los", "sabados"], value: 50 },
    ];

    // Chart 3: Correos enviados a los comensales
    const dataCorreosEnviados: ChartDataPoint[] = [
        { label: "Lunes", value: 100 },
        { label: "Martes", value: 60 },
        { label: "Miercoles", value: 75 },
        { label: "Jueves", value: 70 },
        { label: "Viernes", value: 55 },
        { label: "Sabado", value: 75 },
    ];

    return (
        <div className="w-full flex justify-center py-10 px-4">
            <div className="w-full max-w-7xl">
                {/* Encabezado */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <Link href="/dashboard">
                            <button className="flex items-center justify-center bg-white shadow-sm hover:shadow-md text-gray-700 hover:text-black w-12 h-12 rounded-full transition-all duration-300">
                                <ArrowLeft className="w-6 h-6" />
                            </button>
                        </Link>
                        <div>
                            <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#2E5E60] to-[#8CB1AD]">
                                Análisis de Rendimiento
                            </h1>
                            <p className="text-gray-500 font-medium mt-1">
                                Estadísticas interactivas sobre el éxito de tus campañas
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Section 1: Numero de promociones canjeadas por semana */}
                    <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-[#E4EFEE] p-3 rounded-2xl">
                                <BarChart2 className="w-6 h-6 text-[#2E5E60]" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-800 tracking-tight">
                                Promociones Canjeadas
                            </h2>
                        </div>

                        <div className="flex-1 min-h-[300px]">
                            <CustomBarChart data={dataCanjeadasSemana} />
                        </div>

                        <div className="flex flex-col gap-4 mt-6 pt-6 border-t border-gray-100">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input type="date" className="pl-11 pr-4 h-12 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#2E5E60]/20 border border-gray-200 bg-[#F8F9FA] text-sm text-gray-800 font-medium transition-all cursor-pointer" />
                                </div>
                                <div className="relative">
                                    <select className="pl-4 pr-10 h-12 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#2E5E60]/20 border border-gray-200 bg-[#F8F9FA] text-sm text-gray-800 font-medium transition-all cursor-pointer appearance-none">
                                        <option>Todas las promos</option>
                                        <option>Primera Compra</option>
                                    </select>
                                </div>
                            </div>
                            <button className="w-full bg-[#2E5E60] hover:bg-[#1A3839] text-white font-bold h-12 rounded-xl transition-all shadow-md mt-2 text-sm uppercase tracking-wider">
                                Filtrar Resultados
                            </button>
                        </div>
                    </div>

                    {/* Section 2: Promociones mas usadas */}
                    <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-[#E4EFEE] p-3 rounded-2xl">
                                <Star className="w-6 h-6 text-[#2E5E60]" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-800 tracking-tight">
                                Promociones Más Usadas
                            </h2>
                        </div>

                        <div className="flex-1 min-h-[300px]">
                            <CustomBarChart data={dataPromocionesUsadas} />
                        </div>

                        <div className="flex flex-col gap-4 mt-6 pt-6 border-t border-gray-100">
                            <div className="relative">
                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <select className="pl-11 pr-10 h-12 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#2E5E60]/20 border border-gray-200 bg-[#F8F9FA] text-sm text-gray-800 font-medium transition-all cursor-pointer appearance-none">
                                    <option>Últimos 7 días</option>
                                    <option>Último Mes</option>
                                </select>
                            </div>
                            <button className="w-full bg-[#2E5E60] hover:bg-[#1A3839] text-white font-bold h-12 rounded-xl transition-all shadow-md mt-2 text-sm uppercase tracking-wider">
                                Generar Reporte
                            </button>
                        </div>
                    </div>
                </div>

                {/* Section 3: Correos enviados a los comensales */}
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-gray-100 mb-10 w-full lg:w-2/3 mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-6 text-center">
                        <div className="bg-[#E4EFEE] p-3 rounded-2xl">
                            <Send className="w-6 h-6 text-[#2E5E60]" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
                            Correos Enviados (Marketing)
                        </h2>
                    </div>

                    <div className="min-h-[300px] mb-6">
                        <CustomBarChart data={dataCorreosEnviados} />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6 pt-6 border-t border-gray-100 justify-center items-center">
                        <div className="relative w-full max-w-[260px]">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <select className="pl-11 pr-10 h-12 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#2E5E60]/20 border border-gray-200 bg-[#F8F9FA] text-sm text-gray-800 font-medium transition-all cursor-pointer appearance-none">
                                <option>Periodo Analizado</option>
                                <option>Mes actual</option>
                            </select>
                        </div>
                        <button className="w-full sm:w-auto px-10 bg-[#2E5E60] hover:bg-[#1A3839] text-white font-bold h-12 rounded-xl transition-all shadow-md text-sm uppercase tracking-wider">
                            Actualizar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
