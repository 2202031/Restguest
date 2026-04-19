"use client";

export function PlatformSection() {
  const features = [
    {
      title: "CEREBRO CLOUD",
      description: "Red global síncrona. Datos en todos los nodos en T-0.",
    },
    {
      title: "ARQUITECTURA V2",
      description: "Escala masiva. Un local o cien redes de franquicias.",
    },
    {
      title: "UI FRICTIONLESS",
      description: "Interfaces crudas. Cero distracciones. Maximum Output.",
    },
    {
      title: "SOPORTE ALPHA",
      description: "Telemetría activada. Resolvemos problemas en el acto.",
    },
    {
      title: "AUTO-PATCHING",
      description: "Microservicios que se actualizan sin interrumpir operaciones.",
    },
    {
      title: "SEGURIDAD RSA",
      description: "Información financiera encintada en bóvedas cuánticas.",
    },
  ];

  return (
    <section className="py-0 flex flex-col lg:flex-row bg-[#F3F4E5] min-h-[60vh] border-b-8 border-[#59554E]">
      {/* Left Monolithic Text */}
      <div className="w-full lg:w-1/2 bg-[#59554E] p-12 lg:p-24 flex flex-col justify-center">
        <div className="font-mono text-[#A1C1BE] text-sm tracking-widest uppercase mb-8 border border-[#A1C1BE] inline-block self-start px-2 py-1">INFRAESTRUCTURA</div>
        <h2 className="text-6xl md:text-8xl font-black text-[#F3F4E5] uppercase tracking-tighter leading-[0.8] mb-8">
          Base<br/>Sólida.
        </h2>
        <p className="text-[#A1C1BE] text-xl font-mono leading-relaxed border-l-2 border-[#A1C1BE] pl-6">
          Olvida el software frágil. Nuestras terminales operan bajo estrés máximo en horarios pico.
        </p>
      </div>

      {/* Right Monolithic List */}
      <div className="w-full lg:w-1/2 p-12 lg:p-24 bg-[#F3F4E5] flex flex-col justify-center">
        <ul className="space-y-0 text-[#59554E]">
          {features.map((feature, index) => (
            <li key={index} className="group border-b-2 border-[#59554E] py-6 relative overflow-hidden">
               <div className="absolute inset-0 bg-[#A1C1BE] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
               <div className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-12 w-full justify-between items-start sm:items-center">
                 <h3 className="text-2xl font-black uppercase tracking-tighter shrink-0 w-48">{feature.title}</h3>
                 <p className="font-mono text-sm leading-tight max-w-[300px]">{feature.description}</p>
                 <div className="font-mono text-xs opacity-50 hidden sm:block">[{String(index + 1).padStart(2, '0')}]</div>
               </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
