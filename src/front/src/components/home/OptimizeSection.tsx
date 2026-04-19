import { Check } from "lucide-react";

export function OptimizeSection() {
  return (
    <section className="py-0 px-0 bg-[#A1C1BE] w-full border-t-[12px] border-[#59554E] flex flex-col md:flex-row min-h-[80vh]">
      {/* Editorial Vertical Text Box */}
      <div className="hidden lg:flex w-24 bg-[#59554E] border-r-4 border-[#F3F4E5] items-center justify-center shrink-0 p-4">
         <h2 className="text-[#F3F4E5] font-mono tracking-[1rem] uppercase text-xl rotate-180" style={{ writingMode: 'vertical-rl' }}>
            PROTOCOLOS_DE_OPTIMIZACIÓN
         </h2>
      </div>

      {/* Main Text Content */}
      <div className="flex-1 bg-[#A1C1BE] p-8 md:p-16 lg:p-24 flex flex-col justify-center relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#59554E] hidden md:block"></div>
        <div className="absolute top-0 right-32 w-16 h-16 bg-[#F3F4E5] hidden md:block"></div>

        <h2 className="text-5xl md:text-7xl font-black text-[#F3F4E5] tracking-tighter leading-[0.9] mb-12 uppercase">
          Erradica la<br/>
          Fricción.<br/>
          <span className="text-transparent" style={{ WebkitTextStroke: '2px #59554E' }}>Acelera el Pase.</span>
        </h2>

        <p className="font-mono text-lg text-[#F3F4E5] max-w-xl mb-16 leading-relaxed bg-[#59554E] p-6 border-l-4 border-[#F3F4E5]">
          La velocidad a la que la cocina recibe y despacha una comanda define tu margen de ganancia. Nuestro sistema central elimina el intermediario mental.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 border-t-2 border-[#59554E] pt-12">
          {[
            "Flujos bidireccionales POS-Cocina.",
            "Latencia de impresión < 0.2s.",
            "Asignación de mesas por algoritmo espacial."
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-4 group">
              <div className="w-8 h-8 rounded-none border-2 border-[#59554E] flex items-center justify-center shrink-0 group-hover:bg-[#59554E] transition-colors">
                <Check className="w-5 h-5 text-[#F3F4E5] opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={3} />
              </div>
              <p className="text-[#59554E] font-bold text-xl uppercase tracking-tight">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Abstract Graphic Right Side */}
      <div className="w-full lg:w-[35%] bg-[#F3F4E5] border-l-[12px] border-[#59554E] p-12 flex flex-col justify-between shrink-0 relative overflow-hidden">
        {/* Background typographic noise */}
        <div className="absolute -right-20 top-20 text-[20rem] font-black text-[#59554E]/5 select-none pointer-events-none leading-none tracking-tighter mix-blend-multiply">
          SYS
        </div>
        
        <div className="border-t-4 border-[#59554E] pt-4 flex justify-between font-mono text-sm font-bold uppercase text-[#59554E]">
          <span>Módulo_Op</span>
          <span>78% Eff.</span>
        </div>

        <div className="flex-1 flex items-center justify-center py-20 relative z-10">
           {/* Abstract brutalist chart */}
           <div className="w-full aspect-square border-4 border-[#59554E] bg-[#F3F4E5] shadow-[16px_16px_0px_0px_#A1C1BE] p-4 flex gap-4 items-end">
              <div className="bg-[#59554E] w-full h-[40%] hover:h-[100%] transition-all duration-700 ease-in-out cursor-crosshair relative group">
                <div className="absolute -top-8 left-0 font-mono text-xs font-bold text-[#59554E] opacity-0 group-hover:opacity-100 transition-opacity">Q1</div>
              </div>
              <div className="bg-[#A1C1BE] w-full h-[60%] hover:h-[100%] transition-all duration-700 ease-in-out cursor-crosshair relative group">
                <div className="absolute -top-8 left-0 font-mono text-xs font-bold text-[#59554E] opacity-0 group-hover:opacity-100 transition-opacity">Q2</div>
              </div>
              <div className="bg-[#59554E]/70 w-full h-[85%] hover:h-[100%] transition-all duration-700 ease-in-out cursor-crosshair relative group">
                <div className="absolute -top-8 left-0 font-mono text-xs font-bold text-[#59554E] opacity-0 group-hover:opacity-100 transition-opacity">Q3</div>
              </div>
           </div>
        </div>

        <div className="border-b-4 border-[#59554E] pb-4 flex justify-between font-mono text-sm font-bold uppercase text-[#59554E]">
          <span>Status</span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 animate-pulse"></span> Activo
          </span>
        </div>
      </div>
    </section>
  );
}
