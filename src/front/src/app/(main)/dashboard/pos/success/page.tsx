"use client";

import { Check, Star, UserPlus, Clock, LayoutGrid, Receipt, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#F7F6F2] text-gray-900 p-8 font-sans flex flex-col items-center pt-16 pb-24">
      {/* Header / Success Message */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="w-24 h-24 bg-[#9FB9B5] rounded-full flex items-center justify-center mb-6 shadow-sm">
          <Check className="w-12 h-12 text-[#2E5E60]" strokeWidth={3} />
        </div>
        <h1 className="text-3xl font-black text-gray-900 mb-2">¡Pedido Enviado Correctamente!</h1>
        <p className="text-gray-500 font-medium">Orden #1234 enviada a cocina a las 20:45</p>
      </div>

      <div className="w-full max-w-2xl space-y-6">
        {/* Order Details Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Receipt className="w-5 h-5 text-gray-400" /> Detalles del Pedido
            </h2>
            <span className="bg-[#00b368] text-white text-xs font-bold px-3 py-1.5 rounded-full">
              En preparación
            </span>
          </div>

          <div className="space-y-4 text-sm font-medium">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3 text-gray-500">
                <Clock className="w-4 h-4" /> Tiempo estimado:
              </div>
              <span className="text-gray-900">25-30 minutos</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3 text-gray-500">
                <UserPlus className="w-4 h-4" /> Mesa:
              </div>
              <span className="text-gray-900">Mesa 2 (1 persona)</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3 text-gray-500">
                <LayoutGrid className="w-4 h-4" /> Area:
              </div>
              <span className="text-gray-900">Interior</span>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-6 pt-6 flex justify-between items-center text-sm">
            <span className="text-gray-500">Total:</span>
            <span className="font-bold text-gray-900">$392.20</span>
          </div>
        </div>

        {/* CRM Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-bold mb-6">Registro en CRM</h2>

          <div className="bg-[#F6F5EE] rounded-xl p-5 mb-8 flex items-center gap-4">
            <UserPlus className="w-8 h-8 text-gray-600" />
            <div>
              <div className="font-bold text-gray-900">Cliente no registrado</div>
              <div className="text-sm text-gray-500">Este pedido no está asociado a ningún cliente registrado</div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-gray-500 text-sm mb-4">Beneficios del registro en CRM</h3>
            <ul className="space-y-3 text-sm font-medium text-gray-600">
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-[#2E5E60]" /> Historial de pedidos y preferencias
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-[#2E5E60]" /> Programa de fidelidad y puntos
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-[#2E5E60]" /> Ofertas y promociones exclusivas
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-[#2E5E60]" /> Reservas prioritarias
              </li>
            </ul>
          </div>

          <div className="bg-[#EAE8E1] rounded-xl p-5">
            <div className="flex gap-3 text-sm">
              <Star className="w-5 h-5 text-amber-500 flex-shrink-0 fill-amber-500" />
              <div>
                <span className="font-bold text-gray-900">Consejo: </span>
                <span className="text-gray-600">Registrar a los clientes frecuentes mejora la experiencia y aumenta las ventas en un promedio del 25%</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <div className="mt-12 w-full max-w-sm">
         <Link 
            href="/dashboard/tables"
            className="w-full block text-center bg-[#5C564C] hover:bg-[#4A453C] text-white py-4 rounded-xl font-bold transition-all shadow-md active:scale-[0.99]"
         >
            Volver a la pantalla principal
         </Link>
      </div>
    </div>
  );
}
