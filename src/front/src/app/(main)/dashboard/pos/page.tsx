"use client";

import { useState } from "react";
import { Plus, Minus, Trash2, ArrowRight, Search, ChefHat, Coffee, Wine, CakeSlice } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRestaurant, CartItem } from "@/context/RestaurantContext";

// Mock Data
const CATEGORIES = [
  { id: "entradas", name: "Entradas", icon: <ChefHat className="w-5 h-5" /> },
  { id: "fuertes", name: "Platos Fuertes", icon: <Coffee className="w-5 h-5" /> },
  { id: "bebidas", name: "Bebidas", icon: <Wine className="w-5 h-5" /> },
  { id: "postres", name: "Postres", icon: <CakeSlice className="w-5 h-5" /> },
];

const MENU_ITEMS = [
  { id: "m1", name: "Nachos con Queso", price: 120, category: "entradas", image: "🧀" },
  { id: "m2", name: "Alitas BBQ (10pz)", price: 180, category: "entradas", image: "🍗" },
  { id: "m3", name: "Hamburguesa Clásica", price: 210, category: "fuertes", image: "🍔" },
  { id: "m4", name: "Lasaña a la Boloñesa", price: 280, category: "fuertes", image: "🍝" },
  { id: "m5", name: "Ribeye 300g", price: 450, category: "fuertes", image: "🥩" },
  { id: "m6", name: "Agua Mineral", price: 50, category: "bebidas", image: "🫧" },
  { id: "m7", name: "Cerveza Artesanal", price: 90, category: "bebidas", image: "🍺" },
  { id: "m8", name: "Vino Tinto (Copa)", price: 110, category: "bebidas", image: "🍷" },
  { id: "m9", name: "Pastel de Chocolate", price: 120, category: "postres", image: "🍰" },
  { id: "m10", name: "Helado Vainilla", price: 80, category: "postres", image: "🍨" },
];



export default function PointOfSalePage() {
  const router = useRouter();
  const { activeTableId, getOrder, updateOrder, tables } = useRestaurant();
  const currentTableId = activeTableId || "quick";
  const [activeCategory, setActiveCategory] = useState("fuertes");
  const cart = getOrder(currentTableId);
  
  const currentTableData = tables.find(t => t.id === currentTableId);
  const tableName = currentTableData ? currentTableData.name : "Orden Rápida";

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeCategory);

  const addToCart = (product: typeof MENU_ITEMS[0]) => {
    const existing = cart.find((item) => item.id === product.id);
    let newCart;
    if (existing) {
      newCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      newCart = [...cart, { id: product.id, name: product.name, price: product.price, quantity: 1 }];
    }
    updateOrder(currentTableId, newCart);
  };

  const updateQuantity = (id: string, delta: number) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter((item) => item.quantity > 0);
    updateOrder(currentTableId, newCart);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleContinue = () => {
    if (cart.length === 0) return;
    router.push("/dashboard/pos/checkout");
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 -m-8">
      {/* LEFT SIDE: Menu & Categories */}
      <div className="flex-1 flex flex-col h-full bg-[#f8f9fa] border-r border-gray-200 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">Punto de Venta</h1>
          
          <div className="relative w-72">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
             <input 
               type="text" 
               placeholder="Buscar platillo..." 
               className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#2E5E60] transition-all bg-white shadow-sm font-medium"
             />
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-6 py-4 rounded-xl font-bold transition-all shadow-sm whitespace-nowrap ${
                activeCategory === cat.id
                  ? "bg-[#2E5E60] text-white shadow-md shadow-[#2E5E60]/30 transform -translate-y-0.5"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="flex-1 overflow-y-auto pr-2 pb-24">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => addToCart(item)}
                className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#2E5E60]/30 hover:-translate-y-1 transition-all flex flex-col items-center justify-center gap-4 group"
              >
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
                  {item.image}
                </div>
                <div className="text-center w-full">
                  <h3 className="font-bold text-gray-800 text-sm leading-tight mb-2">{item.name}</h3>
                  <p className="text-[#2E5E60] font-black text-lg">${item.price.toFixed(2)}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Current Order Ticket */}
      <div className="w-[420px] bg-white h-full flex flex-col shadow-[-10px_0_30px_rgba(0,0,0,0.05)] z-10">
        <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-[#fefdfa]">
          <h2 className="text-2xl font-black text-gray-800">{tableName}</h2>
          <span className="text-sm font-bold bg-[#E4EFEE] text-[#2E5E60] px-4 py-1.5 rounded-full">Orden #084</span>
        </div>

        {/* Order Items */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 bg-gray-50/30">
          {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-400 opacity-60">
              <ChefHat className="w-20 h-20 mb-4 text-gray-300" />
              <p className="font-bold text-gray-500">Agrega productos al ticket</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex flex-col gap-3 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm animate-in fade-in slide-in-from-right-4">
                <div className="flex justify-between items-start">
                  <span className="font-bold text-gray-800 text-[15px] pr-4 leading-tight">{item.name}</span>
                  <span className="font-black text-[#2E5E60] text-lg">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-sm font-medium text-gray-400">${item.price.toFixed(2)} c/u</span>
                  
                  <div className="flex items-center gap-3 bg-gray-50 rounded-full px-1 border border-gray-200/60 p-1">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    >
                      {item.quantity === 1 ? <Trash2 className="w-4 h-4" /> : <Minus className="w-4 h-4" />}
                    </button>
                    <span className="font-black text-gray-800 w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-2 text-[#2E5E60] hover:bg-[#E4EFEE] rounded-full transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Totals & Action */}
        <div className="p-8 bg-white border-t border-gray-100 mt-auto shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
          <div className="space-y-4 mb-8">
            <div className="flex justify-between text-gray-500 font-medium">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-500 font-medium">
              <span>Descuentos</span>
              <span>-$0.00</span>
            </div>
            <div className="flex justify-between text-gray-900 text-2xl font-black pt-4 border-t border-gray-100">
              <span>Total</span>
              <span className="text-[#2E5E60]">${subtotal.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={() => {
                  if (cart.length === 0) return;
                  alert("¡Orden enviada a cocina! La mesa sigue abierta.");
                  router.push("/dashboard/tables");
              }}
              title="Guardar la orden y seguir atendiendo la mesa"
              disabled={cart.length === 0}
              className={`flex-1 py-4 rounded-2xl font-bold flex items-center justify-center transition-all duration-300 ${
                cart.length > 0 
                  ? "bg-[#E4EFEE] text-[#2E5E60] hover:bg-[#c2dedb] shadow-sm" 
                  : "bg-gray-100 text-gray-400 cursor-not-allowed shadow-none"
              }`}
            >
              <span className="text-[15px]">Envíar a cocina</span>
            </button>
            
            <button 
              onClick={handleContinue}
              title="Cerrar la cuenta y cobrar al cliente"
              disabled={cart.length === 0}
              className={`flex-[1.2] py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                cart.length > 0 
                  ? "bg-[#2E5E60] text-white hover:bg-[#1A3839] hover:-translate-y-1 shadow-xl shadow-[#2E5E60]/20" 
                  : "bg-gray-100 text-gray-400 cursor-not-allowed shadow-none"
              }`}
            >
              <span>Cobrar</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
