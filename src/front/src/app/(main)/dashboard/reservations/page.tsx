"use client";

import { Calendar, Monitor, Edit, X } from "lucide-react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ReservationsPage() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div id="reservations-cards" className="flex gap-8 items-stretch pt-12 items-start justify-center flex-wrap relative">
            {/* Modal Overlay */}
            {showModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-[#EAE9E0] rounded-xl shadow-lg w-[500px] h-[300px] p-8 flex flex-col relative">
                        <button 
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-gray-600 hover:text-black"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        
                        <div className="flex-1 flex flex-col items-center justify-center gap-10 mt-4">
                            <h2 className="text-2xl font-bold text-center" style={{ color: "#59554E" }}>
                                ¿El cliente se ha dado de alta en el sistema?
                            </h2>
                            
                            <div className="flex justify-center gap-6 w-full">
                                <Link href="/dashboard/reservations/new" className="w-1/2">
                                    <button 
                                        className="w-full bg-white text-black font-bold text-xl py-4 rounded-md shadow-sm"
                                    >
                                        Si
                                    </button>
                                </Link>
                                <Link href="/dashboard/customers/register" className="w-1/2">
                                    <button 
                                        className="w-full font-bold text-xl py-4 rounded-md shadow-sm text-white"
                                        style={{ backgroundColor: "#2E5E60" }}
                                    >
                                        No
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Card 1: Agendar una reserva */}
            <div className="bg-[#E4E3D7] rounded-2xl p-8 shadow-md flex flex-col justify-between max-w-[360px] w-full min-h-[300px]">
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-[#C5D0CD] p-3 rounded-full flex items-center justify-center">
                            <Calendar className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold" style={{ color: "#59554E" }}>
                            Agendar una reserva
                        </h2>
                    </div>
                    <div className="flex flex-col gap-4 text-sm font-medium mb-8" style={{ color: "#59554E" }}>
                        <p>Haz una reserva en el restaurante</p>
                        <p>Consulta fechas y disponibilidades del restaurante</p>
                    </div>
                </div>
                <button 
                    onClick={() => setShowModal(true)}
                    className="bg-white w-full py-3 px-6 rounded-lg flex items-center justify-between shadow-sm hover:bg-gray-50 transition-colors"
                >
                    <span className="font-semibold" style={{ color: "#59554E" }}>Ver reservas</span>
                    <ChevronRight className="w-5 h-5 text-gray-500" />
                </button>
            </div>

            {/* Card 2: Mapa de mesas */}
            <div className="bg-[#E4E3D7] rounded-2xl p-8 shadow-md flex flex-col justify-between max-w-[360px] w-full min-h-[300px]">
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-[#C5D0CD] p-3 rounded-full flex items-center justify-center">
                            <Monitor className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold" style={{ color: "#59554E" }}>
                            Mapa de mesas
                        </h2>
                    </div>
                    <div className="flex flex-col gap-4 text-sm font-medium mb-8" style={{ color: "#59554E" }}>
                        <p>Visualiza las mesas disponibles</p>
                        <p>Consulta el mapa de mesas para verificar cuales tiene disponibilidad</p>
                    </div>
                </div>
                <Link href="/dashboard/tables">
                    <button className="bg-white w-full py-3 px-6 rounded-lg flex items-center justify-between shadow-sm hover:bg-gray-50 transition-colors">
                        <span className="font-semibold" style={{ color: "#59554E" }}>Ver mapa</span>
                        <ChevronRight className="w-5 h-5 text-gray-500" />
                    </button>
                </Link>
            </div>

            {/* Card 3: Modificar reservación */}
            <div className="bg-[#E4E3D7] rounded-2xl p-8 shadow-md flex flex-col justify-between max-w-[360px] w-full min-h-[300px]">
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-[#C5D0CD] p-3 rounded-full flex items-center justify-center">
                            <Edit className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold" style={{ color: "#59554E" }}>
                            Modificar reservación
                        </h2>
                    </div>
                    <div className="flex flex-col gap-4 text-sm font-medium mb-8" style={{ color: "#59554E" }}>
                        <p>Modifica reservaciones de tus clientes</p>
                        <p>Cancela o modifica la reservación de tus clientes</p>
                    </div>
                </div>
                <Link href="/dashboard/reservations/history">
                    <button className="bg-white w-full py-3 px-6 rounded-lg flex items-center justify-between shadow-sm hover:bg-gray-50 transition-colors">
                        <span className="font-semibold" style={{ color: "#59554E" }}>Ver Historial</span>
                        <ChevronRight className="w-5 h-5 text-gray-500" />
                    </button>
                </Link>
            </div>
        </div>
    );
}
