"use client";

import Link from "next/link";
import { FiArrowLeft, FiFileText, FiTrash2, FiSearch, FiClock, FiUserX } from "react-icons/fi";
import { useTutorial } from "@/context/TutorialContext";

// Datos de demostración
const requestsData = [
    { id: 'SOL-001', name: 'Vanessa González', email: 'vanessa@ejemplo.com', date: '10/07/2023', reason: 'Preocupaciones de privacid...', status: 'Pendiente' },
    { id: 'SOL-002', name: 'Ana López', email: 'ana@ejemplo.com', date: '15/07/2023', reason: 'Ya no visita el restaurante', status: 'En revisión' },
    { id: 'SOL-003', name: 'Laura Sánchez', email: 'laura@ejemplo.com', date: '05/07/2023', reason: 'Solicitud del cliente', status: 'Completado' },
];

const getStatusStyles = (status: string) => {
    switch(status) {
        case 'Pendiente': return 'bg-[#FCF3CF] text-[#9A7D0A] border border-[#F7DC6F]';
        case 'En revisión': return 'bg-[#AED6F1] text-[#21618C] border border-[#85C1E9]';
        case 'Completado': return 'bg-[#A3E4D7] text-[#117A65] border border-[#76D7C4]';
        default: return 'bg-gray-200 text-gray-800 border-gray-300';
    }
}

export default function DeleteDataPage() {
    const { isActive, endTutorial } = useTutorial();

    const handleDelete = () => {
        if (isActive) {
            endTutorial();
            alert("¡Felicidades! Has completado el entrenamiento interactivo de RestGuest. Ya sabes cómo gestionar clientes.");
        } else {
            alert("Solicitud de eliminación enviada correctamente.");
        }
    };

    return (
        <div className="p-8 min-h-screen" style={{ backgroundColor: "#F2F4EC" }}>
            {/* Header */}
            <div className="relative flex items-center mb-10 max-w-6xl mx-auto">
                <Link 
                    href="/dashboard/customers" 
                    className="absolute left-0 text-3xl text-gray-800 hover:text-black transition p-2 -ml-2 rounded-full hover:bg-gray-200 hover:bg-opacity-20"
                >
                    <FiArrowLeft />
                </Link>
                <h1 className="text-4xl font-extrabold text-[#1F1E1A] w-full text-center">
                    Eliminación de Datos
                </h1>
            </div>
            
            {/* Section 1: Política de Privacidad */}
            <div className="bg-[#E2E4DC] p-8 md:p-10 rounded-2xl shadow-sm max-w-6xl mx-auto mb-10">
                <div className="flex items-center gap-3 mb-2">
                    <FiFileText className="text-3xl text-[#565551]" />
                    <h2 className="text-3xl font-bold text-[#565551]">Política de Privacidad</h2>
                </div>
                <p className="text-sm text-[#73726D] mb-6">
                    Información sobre el proceso de eliminación de datos
                </p>

                <div className="bg-[#D5D8CB] p-6 rounded-xl border border-[#C2C4BC]">
                    <h3 className="font-bold text-[#565551] mb-2 text-lg">Importante</h3>
                    <p className="text-sm text-[#565551] mb-4 leading-relaxed">
                        De acuerdo con nuestra política de privacidad y las regulaciones de protección de datos, los clientes tienen derecho a solicitar la eliminación de sus datos personales.
                    </p>
                    <p className="text-sm text-[#565551] leading-relaxed">
                        El proceso de eliminación puede tardar hasta 30 días en completarse. Durante este tiempo, se revisará la solicitud y se procederá a la eliminación si no hay impedimentos legales o contractuales.
                    </p>
                </div>
            </div>

            {/* Section 2: Solicitudes de Eliminación */}
            <div className="bg-[#E2E4DC] p-8 md:p-10 rounded-2xl shadow-sm max-w-6xl mx-auto mb-10">
                <h2 className="text-3xl font-bold text-[#565551] mb-2">Solicitudes de Eliminación</h2>
                <p className="text-sm text-[#73726D] mb-8">
                    Gestiona las solicitudes de eliminación de datos de clientes
                </p>

                <div className="relative mb-8">
                    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9B9A95] text-lg" />
                    <input 
                        type="text" 
                        placeholder="Buscar por nombre, correo electrónico o categoría" 
                        className="pl-12 pr-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#92B5B3] shadow-sm bg-white text-sm text-[#565551]" 
                    />
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[#565551] min-w-[950px]">
                        <thead>
                            <tr className="border-b border-[#D5D8CB]">
                                <th className="pb-4 font-bold text-[#4E4D48]">ID Solicitud</th>
                                <th className="pb-4 font-bold text-[#4E4D48]">Cliente</th>
                                <th className="pb-4 font-bold text-[#4E4D48]">Fecha Solicitud</th>
                                <th className="pb-4 font-bold text-[#4E4D48]">Motivo</th>
                                <th className="pb-4 font-bold text-[#4E4D48] text-center">Estado</th>
                                <th className="pb-4 font-bold text-[#4E4D48] text-center w-[120px]">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requestsData.map((req, index) => (
                                <tr key={index} className="border-b border-white/40 hover:bg-white/10 transition">
                                    <td className="py-6 font-bold text-[#1F1E1A]">{req.id}</td>
                                    <td className="py-6">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-[#1F1E1A]">{req.name}</span>
                                            <span className="text-xs text-[#73726D] mt-1">{req.email}</span>
                                        </div>
                                    </td>
                                    <td className="py-6 font-bold text-[#1F1E1A]">{req.date}</td>
                                    <td className="py-6 text-sm font-semibold text-[#565551]">{req.reason}</td>
                                    <td className="py-6 text-center">
                                        <span className={`px-5 py-1.5 rounded-md text-xs font-bold inline-block min-w-[120px] text-center ${getStatusStyles(req.status)}`}>
                                            {req.status}
                                        </span>
                                    </td>
                                    <td className="py-6 text-center">
                                        {req.status === 'Pendiente' && <button className="text-2xl text-[#565551] hover:text-[#B7950B] transition mx-auto flex"><FiClock /></button>}
                                        {req.status === 'En revisión' && <button className="text-2xl text-[#565551] hover:text-[#2874A6] transition mx-auto flex"><FiUserX /></button>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Section 3: Nueva Solicitud de Eliminación */}
            <div className="bg-[#E2E4DC] p-8 md:p-10 rounded-2xl shadow-sm max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-2">
                    <FiTrash2 className="text-3xl text-[#565551]" />
                    <h2 className="text-3xl font-bold text-[#565551]">Nueva Solicitud de Eliminación</h2>
                </div>
                <p className="text-sm text-[#73726D] mb-8">
                    Registra una nueva solicitud de eliminación de datos
                </p>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[#565551]">ID del Cliente</label>
                            <input 
                                type="text" 
                                placeholder="Ej: CLI-001" 
                                className="px-5 py-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#92B5B3] shadow-sm bg-white text-sm text-[#565551]" 
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[#565551]">Email del Cliente</label>
                            <input 
                                type="email" 
                                placeholder="Ej: correo@ejemplo.com" 
                                className="px-5 py-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#92B5B3] shadow-sm bg-white text-sm text-[#565551]" 
                            />
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-[#565551]">Motivo de Solicitud</label>
                        <input 
                            type="text" 
                            placeholder="Describe el motivo de la eliminación" 
                            className="px-5 py-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#92B5B3] shadow-sm bg-white text-sm text-[#565551]" 
                        />
                    </div>
                    
                    <div className="flex justify-center mt-10 pt-4">
                        <button 
                            id="customers-delete-list"
                            onClick={handleDelete}
                            type="button" 
                            className="bg-white px-10 py-3 rounded-md font-bold text-[#565551] shadow-sm hover:bg-gray-50 transition"
                        >
                            Registrar Nueva Solicitud
                        </button>
                    </div>
                </form>
            </div>
            
        </div>
    );
}
