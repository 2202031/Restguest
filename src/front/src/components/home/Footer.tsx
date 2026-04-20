export default function Footer() {
  return (
    <footer className="bg-[#59554E] text-[#F3F4E5] pt-24 pb-12 px-6 border-t-[16px] border-[#A1C1BE]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b-[6px] border-[#A1C1BE] pb-16">
          <div className="md:col-span-1">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#A1C1BE] flex items-center justify-center border-4 border-[#F3F4E5]">
                    <div className="w-2 h-2 bg-[#59554E]" />
                </div>
                <span className="text-3xl font-black uppercase tracking-tighter">RestGuest</span>
             </div>
             <p className="font-mono text-sm uppercase opacity-90 border-l-2 border-[#F3F4E5] pl-4">
               Cambiando las reglas del juego gastronómico desde los cimientos.
             </p>
          </div>
          
          <div>
              <h4 className="font-black text-xl mb-6 uppercase tracking-tighter text-[#A1C1BE]">Producto</h4>
              <ul className="space-y-4 font-mono text-sm uppercase">
                  <li><a href="#caracteristicas" className="hover:text-[#A1C1BE] hover:underline underline-offset-4">Módulos</a></li>
                  <li><a href="#precios" className="hover:text-[#A1C1BE] hover:underline underline-offset-4">Suscripciones</a></li>
                  <li><a href="#" className="hover:text-[#A1C1BE] hover:underline underline-offset-4">Telemetría</a></li>
              </ul>
          </div>
          
          <div>
              <h4 className="font-black text-xl mb-6 uppercase tracking-tighter text-[#A1C1BE]">Red</h4>
              <ul className="space-y-4 font-mono text-sm uppercase">
                  <li><a href="#" className="hover:text-[#A1C1BE] hover:underline underline-offset-4">Logotipo</a></li>
                  <li><a href="#" className="hover:text-[#A1C1BE] hover:underline underline-offset-4">Partners</a></li>
                  <li><a href="#soporte" className="hover:text-[#A1C1BE] hover:underline underline-offset-4">Intercom</a></li>
              </ul>
          </div>
          
          <div>
              <h4 className="font-black text-xl mb-6 uppercase tracking-tighter text-[#A1C1BE]">Legal</h4>
              <ul className="space-y-4 font-mono text-sm uppercase">
                  <li><a href="#" className="hover:text-[#A1C1BE] hover:underline underline-offset-4">Términos</a></li>
                  <li><a href="#" className="hover:text-[#A1C1BE] hover:underline underline-offset-4">Privacidad</a></li>
                  <li><a href="#" className="hover:text-[#A1C1BE] hover:underline underline-offset-4">Data</a></li>
              </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center font-mono text-xs uppercase opacity-70">
            <p>RESTGUEST OS. {new Date().getFullYear()}.</p>
            <p className="flex items-center gap-2 mt-4 md:mt-0">
               <span className="w-2 h-2 bg-[#A1C1BE] inline-block animate-pulse"></span> SISTEMA ONLINE
            </p>
        </div>
      </div>
    </footer>
  );
}
