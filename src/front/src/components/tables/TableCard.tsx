import { Users, Clock, CircleDollarSign, Smile, Eye, UserPlus, Receipt } from "lucide-react";

export type TableStatus = "ocupado" | "libre" | "esperando";

export interface TableCardProps {
    id: string;
    name: string;
    status: TableStatus;
    peopleCount?: number;
    timeSince?: string;
    amount?: number;
    onAssignTable?: () => void;
    onViewDetails?: () => void;
    onCheckout?: () => void;
    onFreeTable?: () => void;
}

export default function TableCard({
    name,
    status,
    peopleCount,
    timeSince,
    amount,
    onAssignTable,
    onViewDetails,
    onCheckout,
    onFreeTable
}: TableCardProps) {
    const isFree = status === "libre";
    const isOccupied = status === "ocupado";
    const isWaiting = status === "esperando";

    return (
        <div className="group bg-white/80 backdrop-blur-lg rounded-3xl p-6 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[220px]">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 border-b border-gray-50 pb-4">
                <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-gray-800 tracking-tight">{name}</h3>
                    {!isFree && onFreeTable && (
                        <button 
                            onClick={onFreeTable}
                            title="Liberar Mesa (Forzar)"
                            className="p-1 opacity-0 group-hover:opacity-100 hover:bg-gray-100 rounded text-gray-400 hover:text-red-500 transition-all flex items-center justify-center cursor-pointer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        </button>
                    )}
                </div>
                {/* Status Badge */}
                <div
                    className={`px-4 py-1.5 rounded-full text-xs font-bold shadow-sm ${
                        isOccupied ? "bg-sky-100 text-sky-700 border border-sky-200"
                        : isFree ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                        : "bg-amber-100 text-amber-700 border border-amber-200"
                    }`}
                >
                    {isOccupied && "Ocupado"}
                    {isFree && "Libre"}
                    {isWaiting && "Esperando Pago"}
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col justify-center mb-6 h-[100px]">
                {isFree ? (
                    <div className="flex flex-col items-center justify-center text-emerald-600/60 h-full gap-2">
                        <Smile className="w-12 h-12 mb-1" strokeWidth={1} />
                        <span className="font-medium text-sm tracking-wide uppercase">Mesa Disponible</span>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-4 text-gray-600 text-[15px]">
                        {peopleCount && (
                            <div className="flex items-center gap-3 bg-[#F8F9FA] p-3 rounded-2xl">
                                <Users className="w-5 h-5 text-[#2E5E60]" />
                                <span className="font-semibold text-gray-700">{peopleCount} <span className="text-gray-400 font-medium text-xs">pax</span></span>
                            </div>
                        )}
                        {timeSince && (
                            <div className="flex items-center gap-3 bg-[#F8F9FA] p-3 rounded-2xl">
                                <Clock className="w-5 h-5 text-[#2E5E60]" />
                                <span className="font-semibold text-gray-700">{timeSince}</span>
                            </div>
                        )}
                        {amount !== undefined && (
                            <div className="col-span-2 flex items-center justify-between bg-emerald-50/50 p-3 rounded-2xl border border-emerald-100 mt-1">
                                <div className="flex items-center gap-3">
                                    <CircleDollarSign className="w-5 h-5 text-emerald-600" />
                                    <span className="font-bold text-gray-500 text-sm">Consumo Actual</span>
                                </div>
                                <span className="font-black text-emerald-700 tracking-tight text-lg">
                                    ${amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                                </span>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Action Button */}
            <button
                onClick={isFree ? onAssignTable : isOccupied ? onViewDetails : isWaiting ? onCheckout : undefined}
                className={`w-full flex justify-center items-center gap-2 py-3.5 rounded-2xl font-bold transition-all ${
                    isFree 
                        ? "bg-[#2E5E60] text-white hover:bg-[#1A3839] shadow-md shadow-[#2E5E60]/20 cursor-pointer" 
                        : "bg-[#F8F9FA] text-gray-600 hover:text-[#2E5E60] hover:bg-[#E4EFEE] border border-gray-100"
                }`}
            >
                {isOccupied && <><Eye className="w-4 h-4" /> Ver Detalles</>}
                {isFree && <><UserPlus className="w-4 h-4" /> Asignar Mesa</>}
                {isWaiting && <><Receipt className="w-4 h-4" /> Cobrar Cuenta</>}
            </button>
        </div>
    );
}
