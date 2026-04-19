"use client";

import { ArrowLeft, Users, Clock, X, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ModifyReservationsPage() {
    const [selectedTable, setSelectedTable] = useState<any>(null);

    const [reservedTables, setReservedTables] = useState<any[]>([]);

    const handleDelete = () => {
        if (selectedTable) {
            setReservedTables(reservedTables.filter(t => t.id !== selectedTable.id));
            setSelectedTable(null);
        }
    };

    return (
        <div className="w-full flex flex-col p-6 relative">
            {/* Modal Overlay */}
            {selectedTable && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-[#EAE9E0] rounded-xl shadow-lg w-[500px] p-8 flex flex-col relative">
                        <button 
                            onClick={() => setSelectedTable(null)}
                            className="absolute top-4 right-4 text-gray-600 hover:text-black"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        
                        <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: "#59554E" }}>
                            Detalles de la Reserva
                        </h2>
                        
                        <div className="flex flex-col gap-4 text-[#59554E] font-medium mb-8">
                            <div className="flex justify-between border-b border-[#D4D3C7] pb-2">
                                <span className="text-gray-600">Mesa:</span>
                                <span>{selectedTable.name}</span>
                            </div>
                            <div className="flex justify-between border-b border-[#D4D3C7] pb-2">
                                <span className="text-gray-600">Cliente:</span>
                                <span>{selectedTable.customerName}</span>
                            </div>
                            <div className="flex justify-between border-b border-[#D4D3C7] pb-2">
                                <span className="text-gray-600">Correo Electrónico:</span>
                                <span>{selectedTable.email}</span>
                            </div>
                            <div className="flex justify-between border-b border-[#D4D3C7] pb-2">
                                <span className="text-gray-600">Fecha de Reserva:</span>
                                <span>{selectedTable.date} a las {selectedTable.time}</span>
                            </div>
                            <div className="flex justify-between border-b border-[#D4D3C7] pb-2">
                                <span className="text-gray-600">Número de Personas:</span>
                                <span className="flex items-center gap-1">
                                    <Users className="w-4 h-4 text-[#8CB1AD]" />
                                    {selectedTable.people}
                                </span>
                            </div>
                            <div className="flex justify-between pb-2">
                                <span className="text-gray-600">Estado:</span>
                                <span className="bg-[#FCA016] text-white px-2 py-0.5 rounded-md text-sm font-bold shadow-sm">
                                    {selectedTable.status}
                                </span>
                            </div>
                        </div>

                        {/* Buttons inside Modal */}
                        <div className="flex justify-between gap-4 mt-2">
                            <button 
                                onClick={handleDelete}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md shadow-sm w-1/2 transition-colors"
                            >
                                Eliminar
                            </button>
                            <Link href="/dashboard/reservations/edit" className="w-1/2">
                                <button 
                                    className="text-white font-bold py-3 px-6 rounded-md shadow-sm w-full hover:opacity-90 transition-opacity"
                                    style={{ backgroundColor: "#2E5E60" }}
                                >
                                    Modificar
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {/* Header / Back button */}
            <div className="flex items-center mb-10 relative">
                <Link href="/dashboard/reservations" className="absolute left-0">
                    <button className="flex items-center text-gray-700 hover:text-black hover:bg-gray-200 p-2 rounded-full transition-colors">
                        <ArrowLeft className="w-8 h-8" />
                    </button>
                </Link>
                <h1 className="text-5xl md:text-6xl text-center w-full" style={{ color: "#2B2A29" }}>
                    Mapa de mesas
                </h1>
            </div>

            {/* Tables Grid */}
            <div className="flex flex-wrap gap-8 justify-center mt-8">
                {reservedTables.length > 0 ? (
                    reservedTables.map((table) => (
                        <div 
                            key={table.id} 
                            className="bg-[#E4E3D7] rounded-2xl p-6 shadow-md flex flex-col min-w-[320px] max-w-[350px] w-full"
                        >
                            {/* Title and Badge */}
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-3xl font-bold" style={{ color: "#59554E" }}>
                                    {table.name}
                                </h2>
                                <span className="bg-[#FCA016] text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-sm">
                                    Reservado
                                </span>
                            </div>

                            {/* Details */}
                            <div className="flex flex-col gap-3 mb-8">
                                <div className="flex items-center gap-3 text-gray-600 font-medium tracking-wide">
                                    <Users className="w-5 h-5 text-[#8CB1AD]" />
                                    <span>{table.people} personas</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600 font-medium tracking-wide">
                                    <Clock className="w-5 h-5 text-[#8CB1AD]" />
                                    <span>Desde {table.time}</span>
                                </div>
                            </div>

                            {/* Button */}
                            <button 
                                onClick={() => setSelectedTable(table)}
                                className="bg-white w-full py-3 rounded-lg font-bold shadow-sm hover:bg-gray-50 transition-colors mt-auto" 
                                style={{ color: "#59554E" }}
                            >
                                Ver detalles
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="w-full flex justify-center py-20 bg-[#E4E3D7] rounded-3xl mt-4">
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="bg-white p-6 rounded-full mb-4 shadow-sm">
                                <Calendar className="w-12 h-12 text-[#2E5E60]" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2" style={{ color: "#59554E" }}>No hay reservas programadas</h3>
                            <p className="text-gray-500 font-medium max-w-md">Tu restaurante todavía no tiene reservaciones planificadas para los próximos días.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
