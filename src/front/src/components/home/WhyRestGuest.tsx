import { ShieldCheck, Users, Sparkles, Clock } from "lucide-react";

export function WhyRestGuest() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Criptografía Base",
      description: "Datos 100% encriptados."
    },
    {
      icon: Users,
      title: "Red Neuron-Operativa",
      description: "Se adapta a tu staff real."
    },
    {
      icon: Sparkles,
      title: "UI Cero-Errores",
      description: "Anti-fatiga visual."
    },
    {
      icon: Clock,
      title: "Acelerador Crono",
      description: "Sincronía al milisegundo."
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#A1C1BE] overflow-hidden relative border-y-8 border-[#59554E]">
      <div className="container mx-auto max-w-7xl relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Typography */}
        <div>
          <h2 className="text-6xl md:text-8xl font-black text-[#59554E] tracking-tighter mb-8 leading-[0.85] uppercase">
            Sistema<br/>
            Cerrado.<br/>
            Resultados<br/>
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #F3F4E5' }}>EXPONENCIALES.</span>
          </h2>
          <p className="text-xl text-[#59554E] font-medium max-w-md p-6 bg-[#F3F4E5] border-l-8 border-[#59554E] font-mono shadow-[8px_8px_0px_#59554E]">
            No es un software, es una extensión arquitectónica de tu línea de cocina y tu servicio de piso. Todo fluye.
          </p>
        </div>

        {/* Right Side: Brutalist Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((item, index) => (
            <div key={index} className="flex flex-col p-8 bg-[#F3F4E5] border-4 border-[#59554E] shadow-[8px_8px_0px_#59554E] hover:-translate-y-2 hover:shadow-[12px_12px_0px_#59554E] transition-all duration-300">
              <div className={`w-16 h-16 bg-[#59554E] flex items-center justify-center mb-12 rounded-full`}>
                <item.icon className={`w-8 h-8 text-[#A1C1BE]`} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-black text-[#59554E] mb-2 tracking-tight uppercase">
                {item.title}
              </h3>
              <p className="text-[#59554E]/80 font-mono text-sm uppercase">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
