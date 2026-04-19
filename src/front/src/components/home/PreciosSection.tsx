"use client";
import React from 'react';
import { Check } from "lucide-react";

export function PreciosSection() {
  const planes = [
    {
      name: "Básico",
      description: "Ideal para pequeños restaurantes que inician.",
      price: "$29",
      features: [
        "Gestión de reservas",
        "Control de mesas básico",
        "Panel analítico simple",
        "Soporte estándar por correo",
      ],
      buttonText: "COMENZAR BÁSICO",
      highlighted: false,
    },
    {
      name: "Profesional",
      description: "Perfecto para negocios en crecimiento.",
      price: "$59",
      features: [
        "Todo lo del plan Básico",
        "CRM completo de clientes",
        "Automatización de marketing",
        "Reportes avanzados de ventas",
        "Cuentas ilimitadas de meseros",
        "Soporte prioritario chat",
      ],
      buttonText: "PRUEBA GRATIS DE 14 DÍAS",
      highlighted: true,
    },
    {
      name: "Enterprise",
      description: "Operaciones de la más alta exigencia y cadenas.",
      price: "A medida",
      features: [
        "Integración con tu POS",
        "Análisis predictivo IA",
        "Soporte premium 24/7 en sitio",
        "Implementación y onboarding guiado",
        "API abierta",
      ],
      buttonText: "CONTACTAR VENTAS",
      highlighted: false,
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#F3F4E5] relative overflow-hidden border-t-8 border-[#59554E]">
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Editorial Header */}
        <div className="mb-20 grid lg:grid-cols-2 gap-8 items-end border-b-4 border-[#59554E] pb-12">
          <div>
            <div className="font-mono text-[#59554E]/70 text-sm tracking-widest uppercase mb-4">TABULADOR DE PRECIOS</div>
            <h2 className="text-5xl md:text-7xl font-black text-[#59554E] uppercase tracking-tighter leading-[0.85]">
              Cero<br/>
              Sorpresas.
            </h2>
          </div>
          <p className="text-xl text-[#59554E] font-medium max-w-md font-mono border-l-4 border-[#A1C1BE] pl-6 h-fit bg-[#F3F4E5]">
            Invierte en fidelización.  Recuperarás la mensualidad con solo 2 clientes que logres retener.
          </p>
        </div>

        {/* Brutalist Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {planes.map((plan, index) => (
            <div
              key={index}
              className={`relative border-4 border-[#59554E] transition-all duration-300 p-8 flex flex-col group ${
                plan.highlighted
                  ? "bg-[#A1C1BE] shadow-[12px_12px_0px_#59554E] lg:-translate-y-4"
                  : "bg-[#F3F4E5] shadow-[8px_8px_0px_#59554E] hover:-translate-y-2 hover:shadow-[12px_12px_0px_#59554E]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 -right-4 bg-[#59554E] text-[#F3F4E5] font-black text-sm px-4 py-2 border-2 border-[#59554E] shadow-[4px_4px_0px_#F3F4E5] uppercase tracking-widest rotate-6 group-hover:rotate-0 transition-transform">
                  MÁS POPULAR
                </div>
              )}

              <h3 className={`text-4xl font-black mb-4 uppercase tracking-tighter ${plan.highlighted ? "text-[#59554E]" : "text-[#59554E]"}`}>
                {plan.name}
              </h3>
              
              <p className={`font-mono text-sm mb-6 uppercase h-10 ${plan.highlighted ? "text-[#59554E]/80" : "text-[#59554E]/70"}`}>
                {plan.description}
              </p>

              <div className={`flex items-end gap-2 mb-8 border-b-4 border-[#59554E] pb-6`}>
                <span className={`text-6xl font-black tracking-tighter leading-none ${plan.highlighted ? "text-[#59554E]" : "text-[#59554E]"}`}>
                  {plan.price}
                </span>
                {plan.price !== "A medida" && (
                  <span className={`font-mono font-bold uppercase pb-1 ${plan.highlighted ? "text-[#59554E]" : "text-[#59554E]"}`}>
                    / mes
                  </span>
                )}
              </div>

              <ul className="space-y-4 mb-12 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1">
                       <Check className={`w-5 h-5 ${plan.highlighted ? "text-[#59554E]" : "text-[#A1C1BE]"}`} strokeWidth={3} />
                    </div>
                    <span className={`font-mono text-sm uppercase font-bold ${plan.highlighted ? "text-[#59554E]" : "text-[#59554E]"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 text-center font-black uppercase tracking-widest border-2 transition-colors ${
                  plan.highlighted
                    ? "bg-[#59554E] text-[#F3F4E5] border-[#59554E] hover:bg-[#F3F4E5] hover:text-[#59554E]"
                    : "bg-[#F3F4E5] text-[#59554E] border-[#59554E] shadow-[4px_4px_0px_#59554E] hover:bg-[#59554E] hover:text-[#F3F4E5]"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
