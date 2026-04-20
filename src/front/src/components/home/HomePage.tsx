import Hero from "@/components/home/hero";
import { OptimizeSection } from "@/components/home/OptimizeSection";
import { PlatformSection } from "@/components/home/PlatformSection";
import { WhyRestGuest } from "@/components/home/WhyRestGuest";
import { PreciosSection } from "@/components/home/PreciosSection";
import { SoporteSection } from "@/components/home/SoporteSection";
import { FeaturesDetails } from "@/components/home/FeaturesDetails";

export default function HomePage() {
    return (
        <main className="min-h-screen bg-white">
            <div id="inicio">
                <Hero />
            </div>

            <OptimizeSection />
            <PlatformSection />
            <WhyRestGuest />

            <div id="caracteristicas">
                <FeaturesDetails />
            </div>

            <div id="precios">
                <PreciosSection />
            </div>

            <div id="soporte">
                <SoporteSection />
            </div>
        </main>
    );
}
