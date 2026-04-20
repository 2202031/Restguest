"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Store, CheckCircle, ChefHat, Palette, Users, ChevronRight, ChevronLeft } from "lucide-react";

export default function SetupPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    
    // Form State
    const [restaurantName, setRestaurantName] = useState("");
    const [cuisineType, setCuisineType] = useState("");
    const [tableCount, setTableCount] = useState("10");
    const [brandColor, setBrandColor] = useState("#2E5E60"); // Default Emerald
    const [menuItems, setMenuItems] = useState([{ name: "", price: "" }]);

    const colors = [
        { name: "Esmeralda", value: "#2E5E60" },
        { name: "Zafiro", value: "#1E3A8A" },
        { name: "Ocaso", value: "#EA580C" },
        { name: "Carbón", value: "#1e293b" },
    ];

    const handleNext = () => {
        if (step < 4) setStep(step + 1);
        else {
            // Finalize setup
            router.push("/dashboard");
        }
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    return (
        <div className="min-h-screen flex text-gray-800 bg-white selection:bg-[#2E5E60] selection:text-white">
            {/* Left Panel - Visuals */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-[#F8F9FA] justify-center items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2E5E60]/5 to-[#8CB1AD]/10" />
                <div className="z-10 text-center max-w-md px-8">
                    <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center mx-auto mb-8 transform -rotate-6">
                        <Store className="w-10 h-10 text-[#2E5E60]" />
                    </div>
                    <h2 className="text-4xl font-bold mb-4 tracking-tight text-gray-900">
                        {step === 1 && "Personalicemos tu espacio"}
                        {step === 2 && "Prepara tu operación"}
                        {step === 3 && "Tu Primer Menú"}
                        {step === 4 && "Dale tu identidad"}
                    </h2>
                    <p className="text-lg text-gray-500 font-medium leading-relaxed">
                        {step === 1 && "Configura los datos clave de tu negocio. Esto nos ayudará a adaptar la experiencia a tu mercado."}
                        {step === 2 && "El tamaño importa. Estos datos inicializan el plano de mesas interactivo de tu dashboard."}
                        {step === 3 && "Agrega algunos platillos estrella para inicializar tu Punto de Venta. Más adelante podrás agregar todo tu catálogo."}
                        {step === 4 && "Selecciona los colores que verán tus comensales en correos y promociones."}
                    </p>
                </div>
            </div>

            {/* Right Panel - Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24">
                <div className="w-full max-w-md mx-auto">
                    {/* Stepper */}
                    <div className="flex gap-2 mb-12">
                        {[1, 2, 3, 4].map((i) => (
                            <div 
                                key={i}
                                className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                                    step >= i ? "bg-[#2E5E60]" : "bg-gray-100"
                                }`}
                            />
                        ))}
                    </div>

                    <div className="mb-10">
                        <h1 className="text-3xl font-black text-gray-900 mb-2">Paso {step} de 4</h1>
                        <p className="text-gray-500">Casi listo para entrar a tu panel de control.</p>
                    </div>

                    {/* Step 1: Basic Info */}
                    {step === 1 && (
                        <div className="space-y-6 animate-in slide-in-from-right-8 duration-500 fade-in">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Nombre del Restaurante</label>
                                <div className="relative">
                                    <Store className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input 
                                        type="text" 
                                        placeholder="Ej. La Trattoria"
                                        value={restaurantName}
                                        onChange={(e) => setRestaurantName(e.target.value)}
                                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#2E5E60]/10 focus:border-[#2E5E60] transition-all font-medium"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Tipo de Cocina</label>
                                <div className="relative">
                                    <ChefHat className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <select 
                                        value={cuisineType}
                                        onChange={(e) => setCuisineType(e.target.value)}
                                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#2E5E60]/10 focus:border-[#2E5E60] transition-all font-medium appearance-none"
                                    >
                                        <option value="" disabled>Selecciona una categoría</option>
                                        <option value="mexicana">Mexicana</option>
                                        <option value="italiana">Italiana</option>
                                        <option value="japonesa">Japonesa</option>
                                        <option value="hamburguesas">Comida Rápida / Hamburguesas</option>
                                        <option value="cafeteria">Cafetería</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Capacity */}
                    {step === 2 && (
                        <div className="space-y-6 animate-in slide-in-from-right-8 duration-500 fade-in">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Número inicial de mesas</label>
                                <div className="relative">
                                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input 
                                        type="number" 
                                        min="1"
                                        max="100"
                                        value={tableCount}
                                        onChange={(e) => setTableCount(e.target.value)}
                                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#2E5E60]/10 focus:border-[#2E5E60] transition-all font-medium"
                                    />
                                </div>
                                <p className="text-sm text-gray-400 mt-3 flex items-center gap-2">
                                    No te preocupes, podrás agregar más después en el Plano de Mesas.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Initial Menu */}
                    {step === 3 && (
                        <div className="space-y-6 animate-in slide-in-from-right-8 duration-500 fade-in">
                             <div className="space-y-4">
                                {menuItems.map((item, index) => (
                                    <div key={index} className="flex gap-3 items-center">
                                        <input 
                                            type="text" 
                                            placeholder="Ej. Hamburguesa Clásica"
                                            value={item.name}
                                            onChange={(e) => {
                                                const newMenu = [...menuItems];
                                                newMenu[index].name = e.target.value;
                                                setMenuItems(newMenu);
                                            }}
                                            className="flex-1 p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#2E5E60]/10 focus:border-[#2E5E60] transition-all font-medium"
                                        />
                                        <div className="relative w-1/3">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">$</span>
                                            <input 
                                                type="number" 
                                                placeholder="0.00"
                                                value={item.price}
                                                onChange={(e) => {
                                                    const newMenu = [...menuItems];
                                                    newMenu[index].price = e.target.value;
                                                    setMenuItems(newMenu);
                                                }}
                                                className="w-full pl-8 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#2E5E60]/10 focus:border-[#2E5E60] transition-all font-medium"
                                            />
                                        </div>
                                    </div>
                                ))}
                                <button 
                                    onClick={() => setMenuItems([...menuItems, { name: "", price: "" }])}
                                    className="text-sm font-bold text-[#2E5E60] hover:text-[#1A3839] flex items-center gap-2 mt-2 px-2"
                                >
                                    + Añadir otro platillo
                                </button>
                             </div>
                        </div>
                    )}

                    {/* Step 4: Branding */}
                    {step === 4 && (
                        <div className="space-y-6 animate-in slide-in-from-right-8 duration-500 fade-in">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-4 flex items-center gap-2">
                                    <Palette className="w-5 h-5" />
                                    Color principal de tu marca
                                </label>
                                <div className="grid grid-cols-2 gap-4">
                                    {colors.map((c) => (
                                        <button
                                            key={c.value}
                                            onClick={() => setBrandColor(c.value)}
                                            className={`p-4 rounded-2xl border-2 flex items-center gap-3 transition-all ${
                                                brandColor === c.value 
                                                    ? "border-[#2E5E60] bg-[#2E5E60]/5 shadow-md" 
                                                    : "border-gray-100 bg-white hover:border-gray-200"
                                            }`}
                                        >
                                            <div 
                                                className="w-6 h-6 rounded-full shadow-inner"
                                                style={{ backgroundColor: c.value }}
                                            />
                                            <span className="font-semibold text-sm">{c.name}</span>
                                            {brandColor === c.value && (
                                                <CheckCircle className="w-5 h-5 text-[#2E5E60] ml-auto" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Preview Card */}
                            <div className="mt-8 p-6 bg-gray-50 rounded-3xl border border-gray-100 flex items-center gap-4">
                                <div 
                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold shadow-lg"
                                    style={{ backgroundColor: brandColor }}
                                >
                                    {restaurantName ? restaurantName.charAt(0).toUpperCase() : "R"}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">{restaurantName || "Tu Restaurante"}</h4>
                                    <span 
                                        className="text-xs font-semibold px-2 py-1 rounded-md opacity-80"
                                        style={{ backgroundColor: `${brandColor}20`, color: brandColor }}
                                    >
                                        Vista Previa
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Controls */}
                    <div className="flex gap-4 mt-12 pt-6 border-t border-gray-100">
                        {step > 1 && (
                            <button
                                onClick={handleBack}
                                className="px-6 py-4 rounded-2xl font-bold bg-gray-50 text-gray-600 hover:bg-gray-100 transition-all flex items-center gap-2"
                            >
                                <ChevronLeft className="w-5 h-5" /> Atrás
                            </button>
                        )}
                        <button
                            onClick={handleNext}
                            disabled={step === 1 && !restaurantName}
                            className={`flex-1 py-4 rounded-2xl font-bold text-white transition-all flex items-center justify-center gap-2 shadow-xl ${
                                step === 1 && !restaurantName
                                    ? "bg-gray-300 cursor-not-allowed shadow-none"
                                    : "bg-[#2E5E60] hover:bg-[#1A3839] hover:-translate-y-1 hover:shadow-[#2E5E60]/20"
                            }`}
                        >
                            {step < 4 ? (
                                <>Siguiente <ChevronRight className="w-5 h-5" /></>
                            ) : (
                                "Comenzar a operar"
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
