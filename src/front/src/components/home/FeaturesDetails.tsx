import { Calendar, ShoppingCart, BarChart3, Users, Mail, FileText } from "lucide-react";

export function FeaturesDetails() {
  const features = [
    {
      icon: Calendar,
      title: "RESERVAS",
      description: "Motor predictivo de ocupación.",
      style: "col-span-1 border-r-4 border-b-4 lg:border-b-0 border-[#59554E] bg-[#F3F4E5]"
    },
    {
      icon: ShoppingCart,
      title: "COMANDAS",
      description: "Sincronía milimétrica al bar/cocina.",
      style: "col-span-1 lg:col-span-2 border-r-4 border-b-4 border-[#59554E] bg-[#A1C1BE] text-[#59554E]"
    },
    {
      icon: BarChart3,
      title: "MÉTRICAS",
      description: "Inteligencia de mesa en crudo.",
      style: "col-span-1 border-r-4 border-[#59554E] bg-[#F3F4E5]"
    },
    {
      icon: Users,
      title: "CRM V2",
      description: "Bases de datos relacionales para fidelidad.",
      style: "col-span-1 lg:col-span-2 border-r-4 border-t-4 border-[#59554E] bg-[#F3F4E5]"
    },
    {
      icon: Mail,
      title: "MAILING",
      description: "Difusión masiva hiper-segmentada.",
      style: "col-span-1 border-r-4 border-t-4 border-b-4 lg:border-b-0 border-[#59554E] bg-[#F3F4E5]"
    },
    {
      icon: FileText,
      title: "FINANZAS",
      description: "Cortes de caja irrevocables.",
      style: "col-span-1 lg:col-span-3 border-r-4 border-t-4 border-[#59554E] bg-[#F3F4E5]"
    }
  ];

  return (
    <div className="bg-[#F3F4E5] py-24 relative overflow-hidden font-sans border-y-8 border-[#59554E] text-[#59554E]">
      {/* Editorial Title Section */}
      <section className="px-6 mb-16 relative z-10 flex flex-col items-center">
         <span className="font-mono tracking-widest text-[#59554E]/70 text-sm uppercase mb-4 block">Módulo 01_</span>
         <h2 className="text-5xl md:text-8xl font-black text-[#59554E] uppercase tracking-tighter text-center leading-[0.85] max-w-5xl">
            SINFONÍA DE LO<br/> <span className="italic font-light">MUNDANO.</span>
         </h2>
      </section>

      {/* Brutalist Grid */}
      <section className="px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 border-l-4 border-t-4 border-[#59554E]">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className={`p-8 lg:p-12 relative group hover:bg-[#59554E] hover:text-[#F3F4E5] transition-all duration-300 ${feature.style}`}>
                  <div className="absolute top-4 right-4 font-mono text-xs opacity-50">[{index + 1}]</div>
                  <Icon className="w-10 h-10 mb-8 opacity-90" strokeWidth={1} />
                  <h3 className="text-3xl font-black mb-3 uppercase tracking-tighter">
                    {feature.title}
                  </h3>
                  <p className="font-mono text-sm leading-relaxed opacity-80 uppercase">
                    {feature.description}
                  </p>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
}
