"use client";

import { CheckCircle2, Crown, Store, CreditCard, ShieldCheck } from "lucide-react";

export default function ProfileAndBillingPage() {
  return (
    <div className="w-full max-w-7xl mx-auto py-10 px-4 md:px-8 font-sans">
      <div className="mb-10">
        <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">Mi Cuenta y Suscripción</h1>
        <p className="text-gray-500 font-medium">Gestiona los datos de tu restaurante y el nivel de acceso en RestGuest.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* COL 1 & 2: RESTAURANT PROFILE & CURRENT PLAN */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Section: Profile Info */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
              <Store className="text-[#2E5E60]" /> Datos del Restaurante
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-500 mb-1">Nombre</label>
                <div className="p-4 bg-gray-50 rounded-xl font-medium text-gray-900 border border-transparent">
                  La Trattoria
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-500 mb-1">Email Registrado</label>
                <div className="p-4 bg-gray-50 rounded-xl font-medium text-gray-900 border border-transparent">
                  admin@trattoria.com
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-500 mb-1">Tipo de Cocina</label>
                <div className="p-4 bg-gray-50 rounded-xl font-medium text-gray-900 border border-transparent">
                  Italiana
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-500 mb-1">Contraseña</label>
                <button className="h-full p-4 text-sm font-bold text-[#2E5E60] hover:bg-gray-100 rounded-xl transition-colors">
                  Cambiar contraseña
                </button>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
              <button className="px-6 py-3 font-bold text-white bg-gray-900 hover:bg-gray-800 rounded-xl shadow-md transition-colors">
                Guardar Cambios
              </button>
            </div>
          </div>

          {/* Section: Current Payment Method */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
             <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
              <CreditCard className="text-[#2E5E60]" /> Método de Pago
            </h2>
            <div className="flex items-center justify-between p-6 border border-gray-200 rounded-2xl">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-8 bg-gray-900 rounded-md flex items-center justify-center">
                   <span className="text-white text-xs font-black italic">VISA</span>
                 </div>
                 <div>
                   <p className="font-bold text-gray-900">Visa terminada en 4242</p>
                   <p className="text-sm font-medium text-gray-500">Expira 12/28</p>
                 </div>
               </div>
               <button className="text-sm font-bold text-gray-500 hover:text-gray-900">Editar</button>
            </div>
          </div>
        </div>

        {/* COL 3: SAAS BILLING PLANS (UP-SELL) */}
        <div className="space-y-6">
          
          {/* Current Plan Card */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-300"></div>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Tu Plan Actual</p>
            <h3 className="text-3xl font-black text-gray-900 mb-1">Básico</h3>
            <p className="text-gray-500 font-medium mb-6">Gratis para siempre</p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3 text-gray-600 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Punto de Venta Base
              </li>
              <li className="flex gap-3 text-gray-600 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Catálogo de 50 Platillos
              </li>
              <li className="flex gap-3 text-gray-600 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Reportes Básicos
              </li>
            </ul>
          </div>

          {/* Up-Sell Premium Plan Card */}
          <div className="bg-gradient-to-b from-gray-900 to-[#122223] rounded-3xl p-8 border border-gray-800 shadow-xl relative overflow-hidden text-white group">
            <div className="absolute -right-6 -top-6 w-32 h-32 bg-[#2E5E60]/30 rounded-full blur-3xl group-hover:bg-[#2E5E60]/50 transition-colors"></div>
            
            <div className="flex items-center gap-2 mb-2">
              <Crown className="w-5 h-5 text-amber-400" />
              <p className="text-sm font-bold text-amber-400 uppercase tracking-widest">Nivel 2</p>
            </div>
            <h3 className="text-3xl font-black mb-1">Pro Empresarial</h3>
            <div className="flex items-end gap-1 mb-6">
              <span className="text-4xl font-black">$49</span>
              <span className="text-white/60 font-medium pb-1">/ mes</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3 text-white/90 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" /> <span className="font-bold text-white">Facturación Ilimitada</span>
              </li>
              <li className="flex gap-3 text-white/90 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" /> Programa de Fidelización (Mail)
              </li>
              <li className="flex gap-3 text-white/90 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" /> Análisis Financiero Avanzado
              </li>
              <li className="flex gap-3 text-white/90 text-sm font-medium">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" /> Soporte Prioritario 24/7
              </li>
            </ul>

            <button className="w-full py-4 bg-amber-400 hover:bg-amber-300 text-gray-900 font-black rounded-xl shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] hover:-translate-y-0.5 transition-all">
              Hacer Upgrade Ahora
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
