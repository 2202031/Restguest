import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[95vh] flex flex-col lg:flex-row overflow-hidden bg-[#F3F4E5]">
            {/* Left Side: Editorial Typography (Lino Color) */}
            <div className="w-full lg:w-[55%] pt-32 pb-20 px-6 lg:px-16 flex flex-col justify-center relative z-10 border-b lg:border-b-0 lg:border-r border-[#59554E]/20">
                
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#59554E] text-[#F3F4E5] text-xs font-mono tracking-widest uppercase mb-12 self-start">
                    RESTGUEST_OS v2.0
                </div>

                <h1 className="text-6xl sm:text-7xl lg:text-[8rem] font-black text-[#59554E] leading-[0.85] tracking-tighter mix-blend-multiply mb-8">
                    VIGILA.<br />
                    ORGANIZA.<br />
                    <span className="text-transparent" style={{ WebkitTextStroke: '2px #A1C1BE' }}>SIRVE.</span>
                </h1>

                <p className="text-xl text-[#59554E]/80 font-medium max-w-md mb-12 leading-relaxed">
                    Arquitectura de software epica diseñada para orquestar cada movimiento de tu piso y cocina sin fricción.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/register">
                        <button className="px-8 py-5 bg-[#A1C1BE] text-[#59554E] text-lg font-bold w-full sm:w-auto hover:opacity-80 transition-colors flex items-center justify-between gap-6 group rounded-none">
                            INICIAR PROTOCOLO
                            <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
                        </button>
                    </Link>
                </div>
            </div>

            {/* Right Side: Avant-Garde UI Composition (Emerald Color) */}
            <div className="w-full lg:w-[45%] bg-[#A1C1BE] relative overflow-hidden flex items-center justify-center py-20 lg:py-0">
                {/* Abstract Noise Texture overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
                
                {/* Floating Elements Composition */}
                <div className="relative w-full max-w-sm h-[600px]">
                    
                    {/* Thermal Receipt Style Element */}
                    <div className="absolute top-[10%] left-[5%] w-64 bg-[#F3F4E5] shadow-[20px_20px_0px_#59554E] p-6 rotate-[-4deg] z-20 group hover:rotate-0 transition-transform duration-500 ease-out border-t-8 border-t-[#59554E] border-x border-[#59554E]/20">
                        <div className="flex justify-between items-end border-b-2 border-dashed border-[#59554E]/40 pb-4 mb-4">
                            <span className="font-mono text-xs text-[#59554E]/70 font-bold uppercase">ORD-9024</span>
                            <span className="font-mono text-[10px] text-[#59554E]/50">14:22:04</span>
                        </div>
                        <h3 className="font-black text-2xl tracking-tighter text-[#59554E] mb-6 uppercase leading-none">Mesa 04<br/>VIP</h3>
                        <div className="space-y-3 font-mono text-sm text-[#59554E]/80">
                            <div className="flex justify-between"><span>2x Negroni</span><span>$340</span></div>
                            <div className="flex justify-between"><span>1x Carpaccio</span><span>$280</span></div>
                            <div className="flex justify-between"><span>1x Ribeye</span><span>$950</span></div>
                        </div>
                        <div className="border-t-2 border-dashed border-[#59554E]/40 mt-6 pt-4 flex justify-between font-black text-lg text-[#59554E]">
                            <span>TOTAL</span><span>$1570</span>
                        </div>
                    </div>

                    {/* Architectural Metric Block */}
                    <div className="absolute bottom-[10%] right-[5%] w-56 h-72 bg-[#59554E] border border-[#A1C1BE]/30 shadow-2xl p-6 rotate-[6deg] z-10 flex flex-col justify-end group hover:rotate-0 transition-transform duration-500 ease-out">
                        <div className="font-mono text-[#A1C1BE] text-xs mb-auto tracking-widest">[ ANALYTICS ]</div>
                        <div className="flex gap-2 items-end h-24 mb-6">
                            <div className="w-1/4 bg-[#A1C1BE]/40 h-[20%]"></div>
                            <div className="w-1/4 bg-[#A1C1BE]/60 h-[50%]"></div>
                            <div className="w-1/4 bg-[#A1C1BE]/80 h-[80%]"></div>
                            <div className="w-1/4 bg-[#A1C1BE] h-[100%]"></div>
                        </div>
                        <div className="text-[#F3F4E5] font-black text-4xl tracking-tighter">+48%</div>
                        <div className="text-[#A1C1BE]/80 font-mono text-xs mt-1">VOLUMEN SEMANAL</div>
                    </div>

                    {/* Brutalist Circle Sticker */}
                    <div className="absolute top-[50%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-[#A1C1BE] border-2 border-[#59554E] rounded-full flex justify-center items-center font-black text-xl text-[#59554E] z-30 shadow-xl hover:scale-110 transition-all animate-[spin_10s_linear_infinite]">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100">
                            <path id="curve" fill="transparent" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                            <text width="500" fill="#59554E" fontSize="13.5" fontWeight="900" letterSpacing="2.5">
                                <textPath href="#curve" startOffset="0%">
                                • RESTGUEST • PLATAFORMA
                                </textPath>
                            </text>
                        </svg>
                    </div>

                </div>
            </div>
        </section>
    );
};
