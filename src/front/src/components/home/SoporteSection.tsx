import { MessageCircle, Mail, Phone } from "lucide-react";

export function SoporteSection() {
    return (
        <section id="soporte" className="w-full py-24 px-6 bg-[#A1C1BE] border-t-8 border-[#59554E] relative overflow-hidden">
            {/* Background typograpahy */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-[#F3F4E5] opacity-30 select-none pointer-events-none uppercase tracking-tighter">
                SOPORTE
             </div>

            <div className="container mx-auto max-w-7xl relative z-10 text-center">
                <div className="inline-block px-3 py-1 bg-[#59554E] text-[#F3F4E5] font-mono text-xs font-bold tracking-widest uppercase mb-8 border-2 border-[#59554E] shadow-[4px_4px_0px_white]">
                    COM_LINK
                </div>
                
                <h2 className="text-5xl md:text-7xl font-black text-[#59554E] mb-6 tracking-tighter uppercase leading-[0.9]">
                    Línea<br/>Directa.
                </h2>
                <p className="text-xl font-mono text-[#59554E] max-w-2xl mx-auto mb-16 bg-[#F3F4E5] p-4 border-4 border-[#59554E] shadow-[8px_8px_0px_#59554E]">
                    Cero bots estúpidos. Conecta directamente con ingenieros de soporte listos para resolver.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Chat */}
                    <div className="bg-[#F3F4E5] p-8 border-4 border-[#59554E] flex flex-col items-center hover:-translate-y-2 transition-transform shadow-[8px_8px_0px_#59554E] group">
                        <div className="w-16 h-16 bg-[#59554E] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <MessageCircle className="w-8 h-8 text-[#F3F4E5]" />
                        </div>
                        <h3 className="text-2xl font-black text-[#59554E] mb-2 uppercase tracking-tighter">Chat 24/7</h3>
                        <p className="font-mono text-[#59554E]/80 text-sm mb-6 uppercase">Respuesta sub-5 min.</p>
                        <button className="w-full py-4 font-black uppercase text-[#F3F4E5] bg-[#59554E] border-2 border-[#59554E] hover:bg-[#A1C1BE] hover:text-[#59554E] transition-colors">
                            Abrir Consola
                        </button>
                    </div>

                    {/* Correo */}
                    <div className="bg-[#59554E] p-8 border-4 border-[#59554E] flex flex-col items-center hover:-translate-y-2 transition-transform shadow-[8px_8px_0px_#F3F4E5] group">
                        <div className="w-16 h-16 bg-[#A1C1BE] rounded-none flex items-center justify-center mb-6 rotate-12 group-hover:rotate-0 transition-transform">
                            <Mail className="w-8 h-8 text-[#59554E]" />
                        </div>
                        <h3 className="text-2xl font-black text-[#F3F4E5] mb-2 uppercase tracking-tighter">Logs Generales</h3>
                        <p className="font-mono text-[#A1C1BE] text-sm mb-6 uppercase">Consultas pesadas.</p>
                        <button className="w-full py-4 font-black uppercase text-[#59554E] bg-[#A1C1BE] hover:bg-[#F3F4E5] transition-colors shadow-[4px_4px_0px_black]">
                            soporte@restguest.com
                        </button>
                    </div>

                    {/* Teléfono */}
                    <div className="bg-[#F3F4E5] p-8 border-4 border-[#59554E] flex flex-col items-center hover:-translate-y-2 transition-transform shadow-[8px_8px_0px_#59554E] group">
                        <div className="w-16 h-16 border-4 border-[#59554E] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#59554E] transition-colors">
                            <Phone className="w-8 h-8 text-[#59554E] group-hover:text-[#F3F4E5]" />
                        </div>
                        <h3 className="text-2xl font-black text-[#59554E] mb-2 uppercase tracking-tighter">Crisis Mayor</h3>
                        <p className="font-mono text-[#59554E]/80 text-sm mb-6 uppercase">Interrupciones de servicio.</p>
                        <button className="w-full py-4 font-black uppercase text-[#59554E] bg-transparent border-4 border-[#59554E] hover:bg-[#59554E] hover:text-[#F3F4E5] transition-colors">
                            1-800-RESTGUEST
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
