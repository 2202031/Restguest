"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, X, ChevronRight } from "lucide-react";

export interface TutorialStep {
    id: number;
    targetId: string;
    title: string;
    message: string;
    navigateTo?: string;   // If set, clicking "Next" navigates here FIRST, then advances
    ctaLabel?: string;     // Custom label for the Next button
}

export const TUTORIAL_STEPS: TutorialStep[] = [
    // BLOQUE 1: MESAS
    {
        id: 0,
        targetId: "sidebar-tables",
        title: "🪑 Gestión de Mesas",
        message: "¡Bienvenido a RestGuest! Empezamos con lo más importante de un turno: las Mesas. Este es tu piso de ventas digital.",
        navigateTo: "/dashboard/tables",
        ctaLabel: "Ver mis mesas →",
    },
    {
        id: 1,
        targetId: "tables-stats",
        title: "📊 Panel de Estado en Vivo",
        message: "Aquí ves de un vistazo cuántas mesas están ocupadas, libres o pidiendo cuenta. Este panel se actualiza en tiempo real.",
    },
    {
        id: 2,
        targetId: "tables-grid",
        title: "🟢 Asignación de Mesas",
        message: "Cada tarjeta es una mesa. Las verdes están libres y las rojas, ocupadas. Con el botón 'Asignar' puedes registrar a qué cliente se le asigna esa mesa.",
        navigateTo: "/dashboard/menu",
        ctaLabel: "Ver Catálogo de Menú →",
    },
    // BLOQUE 2: MENÚ
    {
        id: 3,
        targetId: "menu-header",
        title: "🍽️ Catálogo de Menú",
        message: "Desde aquí agregas nuevos platillos, editas precios y eliminas productos. El botón verde '+ Nuevo Producto' abre un panel de captura rápida.",
    },
    {
        id: 4,
        targetId: "menu-grid",
        title: "✏️ Edición de Productos",
        message: "Cada tarjeta tiene botones para editar el precio o eliminar el platillo. Los cambios se reflejan al instante en el Punto de Venta. ¡Sin papel ni pizarrones!",
        navigateTo: "/dashboard/customers",
        ctaLabel: "Ver CRM de Clientes →",
    },
    // BLOQUE 3: CLIENTES
    {
        id: 5,
        targetId: "customers-register-card",
        title: "👥 CRM de Clientes",
        message: "Esta es tu base de datos de relaciones. Puedes ver historial de consumo, preferencias y alergias de cada comensal. Haz clic en 'Ir a Registro' para crear uno.",
        navigateTo: "/dashboard/customers/register",
        ctaLabel: "Registrar cliente →",
    },
    {
        id: 6,
        targetId: "customers-register-form",
        title: "📝 Registro de Comensal",
        message: "Rellena nombre e inventa un correo de prueba. Al presionar 'Registrar Cliente', quedará guardado y podrás asociarlo a cualquier mesa futura.",
        navigateTo: "/dashboard/loyalty",
        ctaLabel: "Ver Fidelización →",
    },
    // BLOQUE 4: FIDELIZACIÓN
    {
        id: 7,
        targetId: "loyalty-tracking-card",
        title: "🎁 Fidelización de Comensales",
        message: "El Seguimiento de Comensales muestra quiénes visitan más, cuánto gastan y cuándo fue su última visita. Identifica a tus clientes VIP al instante.",
        navigateTo: "/dashboard/reports/sales",
        ctaLabel: "Ver Reportes de Ventas →",
    },
    // BLOQUE 5: REPORTES
    {
        id: 8,
        targetId: "reports-kpis",
        title: "📊 Reportes en Tiempo Real",
        message: "Aquí tienes tus métricas clave al instante: ingresos del día, ticket promedio, mesas atendidas y el platillo estrella de la semana. Todo en un solo vistazo.",
    },
    {
        id: 9,
        targetId: "reports-transactions",
        title: "🧯 Historial de Transacciones",
        message: "Cada venta queda registrada: hora, mesa, método de pago y monto. Puedes exportar el reporte para tu contabilidad con un solo clic.",
        navigateTo: "/dashboard/reservations",
        ctaLabel: "Ver Reservaciones →",
    },
    // BLOQUE 6: RESERVACIONES
    {
        id: 10,
        targetId: "reservations-cards",
        title: "📅 Módulo de Reservaciones",
        message: "Desde aquí puedes agendar nuevas reservaciones, ver el mapa de mesas disponibles y modificar o cancelar citas existentes. Un restaurante moderno nunca pierde una reserva.",
        navigateTo: "/dashboard/customers",
        ctaLabel: "Ver Privacidad de Datos →",
    },
    // BLOQUE 7: PRIVACIDAD
    {
        id: 11,
        targetId: "customers-delete-card",
        title: "🔒 Privacidad y Cumplimiento Legal",
        message: "RestGuest cumple con normativas de eliminación de datos (GDPR/LFPDPPP). Esta sección elimina de forma segura todos los datos de un cliente si lo solicita.",
        navigateTo: "/dashboard/customers/delete",
        ctaLabel: "Ver Eliminación de Datos →",
    },
    {
        id: 12,
        targetId: "customers-delete-list",
        title: "🚀 ¡Tutorial Completado!",
        message: "Selecciona el usuario de prueba y elímínalo para finalizar. ¡Has completado el recorrido completo de RestGuest! Tu restaurante está listo para operar al 100%.",
        ctaLabel: "¡Finalizar entrenamiento! 🎉",
    },
];

interface TutorialContextType {
    isActive: boolean;
    currentStep: number;
    startTutorial: () => void;
    endTutorial: () => void;
    nextStep: () => void;
}

const TutorialContext = createContext<TutorialContextType | undefined>(undefined);

export function TutorialProvider({ children }: { children: React.ReactNode }) {
    const [isActive, setIsActive] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Auto-start only on first visit to /dashboard
    useEffect(() => {
        if (!isClient) return;
        const hasSeenTutorial = localStorage.getItem("restguest_tutorial_done");
        const isOnDashboard = window.location.pathname === "/dashboard";
        if (!hasSeenTutorial && isOnDashboard) {
            // Small delay to let the page render
            setTimeout(() => {
                setIsActive(true);
                setCurrentStep(0);
            }, 800);
        }
    }, [isClient]);

    const startTutorial = () => {
        setIsActive(true);
        setCurrentStep(0);
        router.push("/dashboard/tables");
    };

    const endTutorial = () => {
        setIsActive(false);
        localStorage.setItem("restguest_tutorial_done", "true");
    };

    const nextStep = () => {
        const step = TUTORIAL_STEPS[currentStep];
        const isLast = currentStep >= TUTORIAL_STEPS.length - 1;

        if (isLast) {
            endTutorial();
            return;
        }

        // If step needs to navigate before advancing, do it
        if (step.navigateTo) {
            router.push(step.navigateTo);
        }

        // Advance with a small delay to let navigation settle
        setTimeout(() => {
            setCurrentStep(prev => prev + 1);
        }, step.navigateTo ? 350 : 0);
    };

    if (!isClient) return <>{children}</>;

    return (
        <TutorialContext.Provider value={{ isActive, currentStep, startTutorial, endTutorial, nextStep }}>
            {children}
            {isActive && (
                <TutorialOverlay
                    step={TUTORIAL_STEPS[currentStep]}
                    stepIndex={currentStep}
                    totalSteps={TUTORIAL_STEPS.length}
                    onNext={nextStep}
                    onEnd={endTutorial}
                />
            )}
        </TutorialContext.Provider>
    );
}

export function useTutorial() {
    const context = useContext(TutorialContext);
    if (context === undefined) throw new Error("useTutorial must be used within TutorialProvider");
    return context;
}

function TutorialOverlay({
    step,
    stepIndex,
    totalSteps,
    onNext,
    onEnd,
}: {
    step: TutorialStep;
    stepIndex: number;
    totalSteps: number;
    onNext: () => void;
    onEnd: () => void;
}) {
    const [rect, setRect] = useState<DOMRect | null>(null);
    const isLast = stepIndex >= totalSteps - 1;
    const progress = Math.round(((stepIndex + 1) / totalSteps) * 100);

    useEffect(() => {
        if (!step) return;
        const updateRect = () => {
            const el = document.getElementById(step.targetId);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "center" });
                setTimeout(() => {
                    const newRect = document.getElementById(step.targetId)?.getBoundingClientRect();
                    if (newRect) setRect(newRect);
                }, 400);
            } else {
                setRect(null);
            }
        };

        updateRect();
        const interval = setInterval(() => {
            const el = document.getElementById(step.targetId);
            if (el) {
                const r = el.getBoundingClientRect();
                if (!rect || r.top !== rect.top) setRect(r);
            }
        }, 600);

        window.addEventListener("resize", updateRect);
        return () => {
            window.removeEventListener("resize", updateRect);
            clearInterval(interval);
        };
    }, [step, rect]);

    if (!step) return null;

    return (
        <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
            {/* Spotlight masks */}
            {rect ? (
                <>
                    <div className="absolute bg-black/75 pointer-events-auto transition-all duration-500" style={{ top: 0, left: 0, right: 0, height: Math.max(0, rect.top - 10) }} />
                    <div className="absolute bg-black/75 pointer-events-auto transition-all duration-500" style={{ top: rect.bottom + 10, left: 0, right: 0, bottom: 0 }} />
                    <div className="absolute bg-black/75 pointer-events-auto transition-all duration-500" style={{ top: Math.max(0, rect.top - 10), bottom: `calc(100vh - ${rect.bottom + 10}px)`, left: 0, width: Math.max(0, rect.left - 10) }} />
                    <div className="absolute bg-black/75 pointer-events-auto transition-all duration-500" style={{ top: Math.max(0, rect.top - 10), bottom: `calc(100vh - ${rect.bottom + 10}px)`, left: rect.right + 10, right: 0 }} />
                    {/* Glowing highlight border */}
                    <div
                        className="absolute border-2 border-[#2E5E60] rounded-xl shadow-[0_0_0_4px_rgba(46,94,96,0.3)] transition-all duration-500"
                        style={{ top: rect.top - 10, left: rect.left - 10, width: rect.width + 20, height: rect.height + 20 }}
                    />
                </>
            ) : (
                <div className="absolute inset-0 bg-black/75 pointer-events-auto flex items-center justify-center">
                    <p className="text-white text-sm animate-pulse">Buscando elemento...</p>
                </div>
            )}

            {/* Tutorial Card */}
            <div className="absolute right-6 bottom-6 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 pointer-events-auto animate-in slide-in-from-bottom-4">
                {/* Progress bar */}
                <div className="h-1 bg-gray-100">
                    <div
                        className="h-full bg-[#2E5E60] transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <div className="p-5">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-3">
                        <div>
                            <h3 className="font-black text-gray-900 text-[15px] leading-tight">{step.title}</h3>
                            <p className="text-xs text-gray-400 font-medium mt-0.5">Paso {stepIndex + 1} de {totalSteps}</p>
                        </div>
                        <button
                            onClick={onEnd}
                            className="p-1 text-gray-300 hover:text-gray-500 transition-colors rounded-full hover:bg-gray-100"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Message */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-5">{step.message}</p>

                    {/* Step dots */}
                    <div className="flex gap-1.5 mb-4">
                        {TUTORIAL_STEPS.map((_, i) => (
                            <div
                                key={i}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === stepIndex ? "bg-[#2E5E60] w-4" : i < stepIndex ? "bg-[#2E5E60]/40 w-1.5" : "bg-gray-200 w-1.5"}`}
                            />
                        ))}
                    </div>

                    {/* Action button */}
                    <button
                        onClick={onNext}
                        className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${isLast
                            ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                            : "bg-[#2E5E60] hover:bg-[#1A3839] text-white"
                            }`}
                    >
                        <span>{step.ctaLabel || "Siguiente"}</span>
                        {isLast ? <span>🎉</span> : <ChevronRight className="w-4 h-4" />}
                    </button>
                </div>
            </div>
        </div>
    );
}
