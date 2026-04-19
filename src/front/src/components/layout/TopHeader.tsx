"use client";

import { useState, useRef, useEffect } from "react";
import { Bell, ChevronDown, User, LogOut, Settings, CreditCard, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRestaurant } from "@/context/RestaurantContext";

export default function TopHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { userRole, setUserRole } = useRestaurant();

  // Handle clicking outside to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-end sticky top-0 z-40 shadow-sm">
      <div className="flex items-center gap-6">
        
        {/* Notifications */}
        <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
        </button>

        {/* User Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-3 p-1 pr-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
          >
            <div className={`w-10 h-10 ${userRole === "admin" ? "bg-[#2E5E60]" : "bg-sky-700"} text-white rounded-full flex items-center justify-center font-bold shadow-inner transition-colors`}>
              {userRole === "admin" ? "A" : "M"}
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-bold text-gray-900 leading-tight">
                {userRole === "admin" ? "Admin" : "Mesero"}
              </p>
              <p className="text-xs text-gray-500 font-medium">Plan Básico</p>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400 hidden md:block" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2">
              <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                <p className="text-sm font-bold text-gray-900">Restaurante La Trattoria</p>
                <p className="text-xs text-gray-500 mt-1 truncate">admin@trattoria.com</p>
              </div>
              <div className="p-2 space-y-1">
                <button 
                  onClick={() => {
                    setIsDropdownOpen(false);
                    router.push("/dashboard/profile");
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm font-bold text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <User className="w-4 h-4 text-gray-400" /> Mi Perfil
                </button>
                <button 
                  onClick={() => {
                    setIsDropdownOpen(false);
                    router.push("/dashboard/profile");
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm font-bold text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <CreditCard className="w-4 h-4 text-gray-400" /> Facturación SaaS
                </button>
                <button 
                  onClick={() => {
                    setIsDropdownOpen(false);
                    router.push("/setup");
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm font-bold text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <Settings className="w-4 h-4 text-gray-400" /> Configuración
                </button>
              </div>
              <div className="p-2 border-t border-gray-100 bg-amber-50">
                <button 
                  onClick={() => {
                    setUserRole(userRole === "admin" ? "waiter" : "admin");
                    setIsDropdownOpen(false);
                    // Force navigation to a safe page when changing role
                    router.push("/dashboard/tables");
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 text-[13px] font-bold text-amber-700 hover:bg-amber-100 rounded-xl transition-colors"
                >
                  <ShieldAlert className="w-4 h-4 text-amber-600" />
                  Simular modo {userRole === "admin" ? "Mesero" : "Admin"}
                </button>
              </div>
              <div className="p-2 border-t border-gray-100">
                <button 
                  onClick={() => {
                    setIsDropdownOpen(false);
                    router.push("/");
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm font-bold text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                >
                  <LogOut className="w-4 h-4" /> Cerrar Sesión
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
