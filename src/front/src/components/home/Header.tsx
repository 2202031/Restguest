"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b-[6px] border-[#59554E] ${
        isScrolled 
          ? "bg-[#F3F4E5] shadow-[0px_8px_0px_#59554E] py-4" 
          : "bg-[#F3F4E5] py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 relative border-2 border-[#59554E] shadow-[4px_4px_0px_#A1C1BE] overflow-hidden bg-white">
              <Image src="/images/logo.png" alt="RestGuest Logo" fill className="object-cover" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-[#59554E] uppercase hidden sm:block">
              RestGuest
            </span>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-10">
            {["Inicio", "Características", "Precios", "Soporte"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleSmoothScroll(e, item.toLowerCase())}
                className="text-[#59554E] font-bold text-sm tracking-widest uppercase hover:bg-[#59554E] hover:text-[#F3F4E5] transition-colors py-1 px-2 border-2 border-transparent hover:border-[#59554E]"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/login" 
              className="text-[#59554E] font-bold text-sm uppercase tracking-widest hover:underline"
            >
              INICIAR SESIÓN
            </Link>
            <Link href="/register">
              <button className="px-6 py-3 bg-[#A1C1BE] text-[#59554E] font-black tracking-widest uppercase border-2 border-[#59554E] hover:bg-[#59554E] hover:text-[#A1C1BE] transition-colors shadow-[4px_4px_0px_#59554E]">
                REGISTRARSE
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-[#59554E] border-2 border-[#59554E] shadow-[4px_4px_0px_#59554E]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#F3F4E5] border-b-[6px] border-[#59554E] p-6 flex flex-col gap-6 shadow-[0px_16px_0px_#59554E]">
            {["Inicio", "Características", "Precios", "Soporte"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleSmoothScroll(e, item.toLowerCase())}
                className="text-[#59554E] font-black text-2xl tracking-tighter uppercase border-b-2 border-[#59554E] pb-2"
              >
                {item}
              </a>
            ))}
           <Link href="/login" className="text-[#59554E] font-bold tracking-widest uppercase mt-4">INICIAR SESIÓN</Link>
           <Link href="/register" className="w-full">
            <button className="w-full px-6 py-4 bg-[#A1C1BE] text-[#59554E] font-black tracking-widest uppercase border-2 border-[#59554E] shadow-[6px_6px_0px_#59554E]">
                REGISTRARSE
            </button>
           </Link>
        </div>
      )}
    </header>
  );
}
