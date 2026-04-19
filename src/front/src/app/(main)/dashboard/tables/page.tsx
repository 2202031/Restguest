"use client";

import { useState } from "react";
import { PlusCircle, X, User } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import TableCard from "@/components/tables/TableCard";
import { useRestaurant } from "@/context/RestaurantContext";

// tables are now loaded from context

export default function MesasActivasPage() {
    const router = useRouter();
    const { tables, assignTable, freeTable, setActiveTableId } = useRestaurant();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTableId, setSelectedTableId] = useState<string | null>(null);
    const [customerName, setCustomerName] = useState("");
    const [isNewCustomer, setIsNewCustomer] = useState(true);

    const openAssignModal = (tableId: string) => {
        setSelectedTableId(tableId);
        setCustomerName("");
        setIsNewCustomer(true);
        setIsModalOpen(true);
    };

    const handleAssignSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedTableId || !customerName) return;

        assignTable(selectedTableId, customerName);
        setIsModalOpen(false);
    };

    const handleFreeTable = (tableId: string) => {
        if (confirm("¿Forzar la liberación de esta mesa?")) {
            freeTable(tableId);
        }
    };

    return (
        <div className="w-full flex justify-center py-10 px-4 relative">
            <div className="w-full max-w-7xl">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
                    <div>
                        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#2E5E60] to-[#8CB1AD]">
                            Plano de Mesas
                        </h1>
                        <p className="text-gray-500 font-medium mt-2">
                            Gestiona la disponibilidad y el estado de tu piso de ventas actual
                        </p>
                    </div>
                    
                    <button
                        onClick={() => {
                            setActiveTableId(null);
                            router.push("/dashboard/pos");
                        }}
                        className="flex items-center gap-2 bg-[#2E5E60] hover:bg-[#1A3839] text-white px-6 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-[#2E5E60]/20 hover:-translate-y-1"
                    >
                        <PlusCircle className="w-5 h-5" />
                        <span>Nueva Orden Rápida</span>
                    </button>
                </div>

                {/* Dashboard Stats */}
                <div id="tables-stats" className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col items-center justify-center">
                        <span className="text-3xl font-black text-gray-800">{tables.length}</span>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wide mt-1">Total Mesas</span>
                    </div>
                    <div className="bg-sky-50/50 backdrop-blur-md rounded-2xl p-5 border border-sky-100 shadow-sm flex flex-col items-center justify-center">
                        <span className="text-3xl font-black text-sky-700">{tables.filter(t => t.status === 'ocupado').length}</span>
                        <span className="text-xs font-bold text-sky-500 uppercase tracking-wide mt-1">Ocupadas</span>
                    </div>
                    <div className="bg-emerald-50/50 backdrop-blur-md rounded-2xl p-5 border border-emerald-100 shadow-sm flex flex-col items-center justify-center">
                        <span className="text-3xl font-black text-emerald-700">{tables.filter(t => t.status === 'libre').length}</span>
                        <span className="text-xs font-bold text-emerald-500 uppercase tracking-wide mt-1">Disponibles</span>
                    </div>
                    <div className="bg-amber-50/50 backdrop-blur-md rounded-2xl p-5 border border-amber-100 shadow-sm flex flex-col items-center justify-center">
                        <span className="text-3xl font-black text-amber-700">{tables.filter(t => t.status === 'esperando').length}</span>
                        <span className="text-xs font-bold text-amber-500 uppercase tracking-wide mt-1">Pidiendo Cuenta</span>
                    </div>
                </div>

                {/* Tables Grid */}
                <div id="tables-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                    {tables.map((table) => (
                        <TableCard 
                            key={table.id} 
                            {...table} 
                            onAssignTable={() => openAssignModal(table.id)}
                            onViewDetails={() => {
                                setActiveTableId(table.id);
                                router.push('/dashboard/pos');
                            }}
                            onCheckout={() => {
                                setActiveTableId(table.id);
                                router.push('/dashboard/pos/checkout');
                            }}
                            onFreeTable={() => handleFreeTable(table.id)}
                        />
                    ))}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in">
                    <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95">
                        <div className="flex justify-between items-center p-6 border-b border-gray-100">
                            <h3 className="text-xl font-bold text-gray-800">Asignar Mesa</h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <form onSubmit={handleAssignSubmit} className="p-6">
                            
                            <div className="flex bg-gray-100 p-1 rounded-xl mb-6">
                                <button
                                    type="button"
                                    onClick={() => setIsNewCustomer(true)}
                                    className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${isNewCustomer ? "bg-white text-gray-900 shadow" : "text-gray-500 hover:text-gray-700"}`}
                                >
                                    Cliente Nuevo
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsNewCustomer(false)}
                                    className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${!isNewCustomer ? "bg-white text-gray-900 shadow" : "text-gray-500 hover:text-gray-700"}`}
                                >
                                    Ya Registrado
                                </button>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-bold text-gray-700 mb-2">Nombre del Cliente</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input 
                                        type="text" 
                                        required
                                        placeholder={isNewCustomer ? "Ej. Juan Pérez" : "Buscar cliente..."}
                                        value={customerName}
                                        onChange={(e) => setCustomerName(e.target.value)}
                                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#2E5E60]/10 focus:border-[#2E5E60] transition-all font-medium"
                                    />
                                </div>
                                {isNewCustomer && (
                                    <p className="text-xs text-gray-400 mt-2">
                                        Se guardará automáticamente en tu base de clientes para fidelización.
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 rounded-2xl font-bold text-white bg-[#2E5E60] hover:bg-[#1A3839] transition-all shadow-lg hover:-translate-y-0.5"
                            >
                                Añadir y Asignar
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
