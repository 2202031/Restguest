import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewReservationSearchClient() {
    return (
        <div className="w-full flex justify-center mt-6">
            <div className="w-full max-w-5xl">
                {/* Back button */}
                <div className="mb-4">
                    <Link href="/dashboard/reservations">
                        <button className="flex items-center text-gray-700 hover:text-black hover:bg-gray-200 p-2 rounded-full transition-colors">
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                    </Link>
                </div>

                {/* Form Container */}
                <div className="bg-[#E4E3D7] rounded-3xl p-10 shadow-sm w-full min-h-[500px] flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-2" style={{ color: "#59554E" }}>
                            Buscar cliente
                        </h1>
                        <p className="text-sm text-gray-600 mb-10">
                            Ingresa los datos del cliente para buscarlo en el sistema
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            {/* Col 1 */}
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold" style={{ color: "#59554E" }}>
                                        Nombre del cliente
                                    </label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-white rounded-md h-12 px-4 outline-none focus:ring-2 focus:ring-[#59554E]/20"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold" style={{ color: "#59554E" }}>
                                        Correo Electrónico
                                    </label>
                                    <input 
                                        type="email" 
                                        className="w-full bg-white rounded-md h-12 px-4 outline-none focus:ring-2 focus:ring-[#59554E]/20"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold" style={{ color: "#59554E" }}>
                                        Fecha de Nacimiento
                                    </label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-white rounded-md h-12 px-4 outline-none focus:ring-2 focus:ring-[#59554E]/20"
                                    />
                                </div>
                            </div>

                            {/* Col 2 */}
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold" style={{ color: "#59554E" }}>
                                        Genero
                                    </label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-white rounded-md h-12 px-4 outline-none focus:ring-2 focus:ring-[#59554E]/20"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold" style={{ color: "#59554E" }}>
                                        Teléfono
                                    </label>
                                    <input 
                                        type="tel" 
                                        className="w-full bg-white rounded-md h-12 px-4 outline-none focus:ring-2 focus:ring-[#59554E]/20"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center gap-8 mt-16 pb-4">
                        <Link href="/dashboard/reservations">
                            <button className="bg-white text-black font-bold py-3 px-12 rounded-md shadow-sm w-48 text-center hover:bg-gray-50 transition-colors">
                                Cancelar
                            </button>
                        </Link>
                        <button 
                            className="text-white font-bold py-3 px-12 rounded-md shadow-sm w-48 hover:opacity-90 transition-opacity"
                            style={{ backgroundColor: "#2E5E60" }}
                        >
                            Buscar cliente
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
