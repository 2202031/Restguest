// app/dashboard/page.jsx

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Menu, Bell, Plus, ChevronDown } from "lucide-react";

export default function DashboardLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(true);
  const router = useRouter(); // 👈 necesario para navegar

  const menuItems = [
    { name: "Menu Principal" },
    { name: "Análisis de ventas" },
    { name: "Cliente" },
    { name: "POS" },
    { name: "Fidelización" },
    { name: "Reportes" },
    { name: "Reservaciones" },
  ];

  return (
    <div className="flex h-screen bg-[#f1f1ea]">
      {/* Menú lateral */}
      <motion.aside
        animate={{ width: menuOpen ? 250 : 70 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-[#2f312d] text-white flex flex-col shadow-lg"
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-1 border-b border-gray-600">
          {menuOpen && (
            <img
              src="/RestGuest_LoGO.png"
              alt="RestGuest Logo"
              className="w-15 mb-0"
            />
          )}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-300 hover:text-white"
          >
            <Menu size={22} />
          </button>
        </div>

        {/* Ítems del menú */}
        <nav className="flex-1 p-2 space-y-1">
          {menuItems.map((item, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.03, x: 4 }}
              className={`flex items-center w-full p-3 rounded-md text-sm transition-all duration-200 ${
                idx === 0
                  ? "bg-[#89c1b6] text-[#1e1f1d]"
                  : "hover:bg-[#89c1b6]/30 text-gray-200"
              }`}
            >
              <span className={menuOpen ? "ml-1" : "hidden"}>{item.name}</span>
            </motion.button>
          ))}
        </nav>
      </motion.aside>

      {/* Contenedor principal */}
      <div className="flex flex-col flex-1">
        {/* Barra superior */}
        <header className="flex justify-between items-center bg-[#f7f6f2] px-6 py-3 border-b border-gray-300">
          <div></div>

          <div className="flex items-center space-x-6">
            <Plus className="text-gray-700 cursor-pointer hover:text-[#2f312d]" />
            <Bell className="text-gray-700 cursor-pointer hover:text-[#2f312d]" />

            {/* 👉 Avatar que manda al perfil */}
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => router.push("/perfil")}
            >
              <div className="w-8 h-8 rounded-full bg-gray-300" />
              <span className="font-medium text-gray-800">John Doe</span>
              <ChevronDown size={18} className="text-gray-600" />
            </div>
          </div>
        </header>

        {/* Contenido dinámico */}
        <main className="p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
