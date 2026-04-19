"use client";

import { useRouter } from "next/navigation";
import { Check, Zap, Star, Building2, ArrowRight } from "lucide-react";

const PLANS = [
  {
    id: "basico",
    name: "Básico",
    price: "$0",
    period: "/ mes",
    description: "Para empezar a digitalizar tu restaurante. Sin tarjeta de crédito.",
    icon: <Zap className="w-6 h-6" />,
    color: "from-gray-100 to-gray-50",
    borderColor: "border-gray-200",
    ctaText: "Empezar Gratis",
    ctaStyle: "bg-gray-800 hover:bg-gray-900 text-white",
    highlighted: false,
    badge: null,
    features: [
      "Hasta 10 mesas",
      "Punto de Venta (POS)",
      "Catálogo de menú (hasta 30 productos)",
      "Gestión de mesas en tiempo real",
      "1 usuario (Dueño)",
      "Reportes básicos de ventas",
    ],
    missing: [
      "CRM de Clientes",
      "Programa de Fidelización",
      "Usuarios múltiples (Meseros)",
      "Pantalla KDS de Cocina",
      "Control de Stock",
    ],
  },
  {
    id: "normal",
    name: "Standard",
    price: "$29",
    period: "/ mes",
    description: "Para restaurantes en crecimiento que necesitan más control y fidelización.",
    icon: <Star className="w-6 h-6" />,
    color: "from-[#2E5E60] to-[#3a7476]",
    borderColor: "border-[#2E5E60]",
    ctaText: "Iniciar Prueba 14 días",
    ctaStyle: "bg-white text-[#2E5E60] hover:bg-[#E4EFEE] font-extrabold",
    highlighted: true,
    badge: "Más Popular",
    features: [
      "Hasta 30 mesas",
      "Punto de Venta (POS)",
      "Catálogo de menú (ilimitado)",
      "CRM de Clientes completo",
      "Programa de Fidelización básico",
      "Hasta 5 usuarios (Meseros + Admin)",
      "Reservaciones online",
      "Reportes de ventas detallados",
    ],
    missing: [
      "Pantalla KDS de Cocina",
      "Control de Stock avanzado",
      "API & Integraciones",
    ],
  },
  {
    id: "empresarial",
    name: "Empresarial",
    price: "$49",
    period: "/ mes",
    description: "Para cadenas y restaurantes serios que quieren control total del negocio.",
    icon: <Building2 className="w-6 h-6" />,
    color: "from-[#1A1A1A] to-[#2D2D2D]",
    borderColor: "border-gray-800",
    ctaText: "Hablar con Ventas",
    ctaStyle: "bg-[#2E5E60] hover:bg-[#1A3839] text-white",
    highlighted: false,
    badge: "Completo",
    features: [
      "Mesas ilimitadas",
      "Todo lo del Plan Standard",
      "Pantalla KDS de Cocina",
      "Control de Stock y abastecimiento",
      "Usuarios ilimitados con roles",
      "Análisis de rentabilidad avanzado",
      "Fidelización avanzada + Marketing",
      "API & integraciones de terceros",
      "Soporte prioritario 24/7",
    ],
    missing: [],
  },
];

export default function SubscriptionPage() {
  const router = useRouter();

  const handleSelectPlan = (planId: string) => {
    // Store selected plan and continue to setup
    localStorage.setItem("rg_plan", planId);
    router.push("/setup");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F3F4E5] via-white to-[#E4EFEE] flex flex-col">
      {/* Header */}
      <div className="text-center py-16 px-6">
        <div className="inline-flex items-center gap-2 bg-[#2E5E60]/10 text-[#2E5E60] text-sm font-bold px-4 py-2 rounded-full mb-6">
          <Zap className="w-4 h-4" />
          ¡Tu cuenta ha sido creada exitosamente!
        </div>
        <h1 className="text-5xl font-black text-gray-900 leading-tight mb-4">
          Elige tu plan de
          <span className="text-[#2E5E60]"> RestGuest</span>
        </h1>
        <p className="text-xl text-gray-500 font-medium max-w-xl mx-auto">
          Todos los planes incluyen 14 días de prueba gratuita. Sin compromisos, cancela cuando quieras.
        </p>
      </div>

      {/* Plans Grid */}
      <div className="flex-1 flex items-start justify-center px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl border-2 flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${plan.borderColor} ${plan.highlighted ? "shadow-2xl shadow-[#2E5E60]/20 scale-105 z-10" : "shadow-lg"}`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={`absolute top-4 right-4 text-xs font-black px-3 py-1.5 rounded-full ${plan.highlighted ? "bg-white text-[#2E5E60]" : "bg-[#2E5E60] text-white"}`}>
                  {plan.badge}
                </div>
              )}

              {/* Header */}
              <div className={`bg-gradient-to-br ${plan.color} p-8 text-${plan.highlighted ? "white" : "gray-800"}`}>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${plan.highlighted ? "bg-white/20" : plan.id === "empresarial" ? "bg-white/10" : "bg-gray-200"}`}>
                  <span className={plan.highlighted || plan.id === "empresarial" ? "text-white" : "text-gray-700"}>{plan.icon}</span>
                </div>
                <h2 className={`text-2xl font-extrabold mb-1 ${plan.highlighted || plan.id === "empresarial" ? "text-white" : "text-gray-800"}`}>{plan.name}</h2>
                <p className={`text-sm font-medium mb-6 ${plan.highlighted ? "text-white/80" : plan.id === "empresarial" ? "text-gray-300" : "text-gray-500"}`}>{plan.description}</p>
                <div className={`flex items-end gap-1 ${plan.highlighted || plan.id === "empresarial" ? "text-white" : "text-gray-900"}`}>
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className={`text-base font-medium pb-1 ${plan.highlighted ? "text-white/70" : plan.id === "empresarial" ? "text-gray-400" : "text-gray-400"}`}>{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white flex-1 p-8 flex flex-col">
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-emerald-600 font-bold" />
                      </div>
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                  {plan.missing.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 opacity-35">
                      <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-gray-400 font-bold text-xs">–</span>
                      </div>
                      <span className="text-sm text-gray-400 line-through">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSelectPlan(plan.id)}
                  className={`mt-8 w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 shadow-lg ${plan.ctaStyle}`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer note */}
      <p className="text-center text-sm text-gray-400 font-medium pb-8">
        ¿Tienes preguntas? <a href="mailto:hola@restguest.com" className="text-[#2E5E60] font-bold hover:underline">Escríbenos</a> — Respondemos en menos de 24 hrs.
      </p>
    </div>
  );
}
