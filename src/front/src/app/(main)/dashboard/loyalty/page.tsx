"use client";

import { Users, Gift, PieChart, ShoppingBag } from "lucide-react";
import LoyaltyCard from "@/components/loyalty/LoyaltyCard";

export default function FidelizacionPage() {
    const cards = [
        {
            title: "Seguimiento de Comensales",
            description: "Gestiona la información de la frecuencia con la que los\ncomensales asisiten al establecimiento",
            icon: <Users className="w-7 h-7" strokeWidth={2} />,
            href: "/dashboard/loyalty/tracking",
        },
        {
            title: "Asignar Promociones",
            description: "Gestiona la promociones para asignarlas de forma\npersonalizada",
            icon: <Gift className="w-7 h-7" strokeWidth={2} />,
            href: "/dashboard/loyalty/promotions",
        },
        {
            title: "Analisis de Promociones",
            description: "Registra y muestra la efectividad de las promociones",
            icon: <PieChart className="w-7 h-7" strokeWidth={2} />,
            href: "/dashboard/loyalty/analysis",
        },
        {
            title: "Marketing",
            description: "Formas de promocionar el local para sus comensales",
            icon: <ShoppingBag className="w-7 h-7" strokeWidth={2} />,
            href: "/dashboard/loyalty/marketing",
        },
    ];

    return (
        <div className="flex flex-col gap-10 w-full pb-8">
            <h1 className="text-[3rem] font-bold text-[#1e2022] leading-none">
                Programa de fidelización
            </h1>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full max-w-[1200px]">
                {cards.map((card, index) => (
                    <div key={index} id={card.title === "Seguimiento de Comensales" ? "loyalty-tracking-card" : undefined}>
                        <LoyaltyCard
                            title={card.title}
                            description={card.description}
                            icon={card.icon}
                            href={card.href}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
