"use client";

import Link from "next/link";
import { useState } from "react";
import { FiArrowLeft, FiSearch } from "react-icons/fi";

// Datos de ejemplo para la lista de clientes
const clients = [
    { id: 1, name: "María González" },
    { id: 2, name: "Floyd Miles" },
    { id: 3, name: "Ronald Richards" }
];

export default function PreferencesPage() {
    const [selectedClient, setSelectedClient] = useState<number | null>(null);

    return (
        <div className="p-8 min-h-screen" style={{ backgroundColor: "#F2F4EC" }}>
            {/* Header */}
            <div className="relative flex items-center mb-10 max-w-7xl mx-auto">
                <Link 
                    href="/dashboard/customers" 
                    className="absolute left-0 text-3xl text-gray-800 hover:text-black transition p-2 -ml-2 rounded-full hover:bg-gray-200 hover:bg-opacity-20"
                >
                    <FiArrowLeft />
                </Link>
                <h1 className="text-4xl font-extrabold text-[#1F1E1A] w-full text-center">
                    Preferencias y Alergias
                </h1>
            </div>

            {/* Configuración de 2 columnas */}
            <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto items-start">
                
                {/* Panel Izquierdo: Lista de Clientes */}
                <div className="bg-[#E2E4DC] p-8 rounded-2xl shadow-sm w-full lg:w-[40%]">
                    <h2 className="text-3xl font-bold text-[#565551] mb-2">Clientes</h2>
                    <p className="text-sm text-[#73726D] mb-6">
                        Selecciona un cliente para editar sus preferencias
                    </p>

                    <div className="relative mb-8">
                        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9B9A95] text-lg" />
                        <input 
                            type="text" 
                            placeholder="Buscar" 
                            className="pl-12 pr-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#92B5B3] shadow-sm bg-white text-sm text-[#565551]" 
                        />
                    </div>

                    {/* Tabla / Lista de clientes contenida */}
                    <div className="border border-[#D5D8CB] rounded-2xl overflow-hidden bg-[#F2F4EC] shadow-sm">
                        {/* Cabecera de la tabla */}
                        <div className="flex justify-between items-center px-6 py-4 border-b border-[#D5D8CB]">
                            <span className="text-xs font-semibold text-[#9B9A95]">Nombre</span>
                            <span className="text-xs font-semibold text-[#9B9A95]">Acciones</span>
                        </div>
                        
                        {/* Filas */}
                        <div className="flex flex-col">
                            {clients.map((client, index) => (
                                <div 
                                    key={client.id}
                                    onClick={() => setSelectedClient(client.id)}
                                    className={`flex justify-between items-center px-6 py-5 cursor-pointer transition
                                        ${index !== clients.length - 1 ? 'border-b border-[#D5D8CB]' : ''}
                                        ${selectedClient === client.id ? 'bg-white/40' : 'hover:bg-white/20'}
                                    `}
                                >
                                    <span className="text-sm font-semibold text-[#565551]">{client.name}</span>
                                    <span className="text-sm text-[#73726D] hover:text-[#3A6361] transition font-medium">Editar</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Panel Derecho: Área de Edición o Estado Vacío */}
                <div className="bg-[#E2E4DC] p-8 rounded-2xl shadow-sm w-full lg:w-[60%] flex items-center justify-center min-h-[500px]">
                    {selectedClient ? (
                        <div className="w-full h-full flex flex-col">
                            {/* Dummy state for when a user is editing, just as an added bonus */}
                            <h3 className="text-2xl font-bold text-[#565551] mb-8">
                                Editando: {clients.find(c => c.id === selectedClient)?.name}
                            </h3>
                            <div className="flex-1 border-2 border-dashed border-[#C2C4BC] rounded-xl flex items-center justify-center">
                                <span className="text-[#9B9A95]">Aquí irá el formulario de preferencias y alergias</span>
                            </div>
                        </div>
                    ) : (
                        <p className="text-[#73726D] text-sm text-center">
                            Selecciona un cliente para editar sus preferencias y alergias
                        </p>
                    )}
                </div>

            </div>
        </div>
    );
}
