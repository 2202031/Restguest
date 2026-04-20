"use client";

import { useState } from "react";
import { ArrowLeft, Send, CreditCard, Banknote, SplitSquareHorizontal, UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useRestaurant } from "@/context/RestaurantContext";

export default function CheckoutPage() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("tarjeta");
  const [splitMethod, setSplitMethod] = useState("completa");
  
  const [splitParts, setSplitParts] = useState<number | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCustomerModalOpen, setIsCustomerModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [assignedCustomer, setAssignedCustomer] = useState<string | null>(null);
  const [hasDiscount, setHasDiscount] = useState(false);

  const { activeTableId, getOrder, checkoutAndFreeTable, tables, userRole } = useRestaurant();
  const currentTableId = activeTableId || "quick";
  const order = getOrder(currentTableId);
  
  const currentTableData = tables.find(t => t.id === currentTableId);
  const tableName = currentTableData ? currentTableData.name : "Orden Rápida";

  // Use dynamic subtotal, fallback to mock 370 if order is magically empty
  const rawSubtotal = order.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const subtotal = rawSubtotal > 0 ? rawSubtotal : 370; 
  const iva = subtotal * 0.16;
  const discountAmount = hasDiscount ? subtotal * 0.10 : 0;
  const totalAmount = subtotal + iva - discountAmount;

  const handleSendToKitchen = () => {
    if (activeTableId) checkoutAndFreeTable(activeTableId);
    router.push("/dashboard/pos/success");
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-gray-900 p-8 font-sans">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/dashboard/pos" className="p-2 hover:bg-gray-200 rounded-full transition-colors flex items-center justify-center bg-white border border-gray-300 shadow-sm">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-3xl font-bold">Confirmación de pedido</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT COLUMN - ORDER SUMMARY */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 h-fit">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">Resumen del pedido</h2>
            <span className="bg-gray-900 text-white text-xs font-bold px-3 py-1 pb-1.5 rounded-full">{tableName}</span>
          </div>

          <div className="space-y-4 mb-8">
            {order.length > 0 ? (
                order.map(item => (
                  <div key={item.id} className="flex justify-between items-center text-sm font-medium">
                    <div className="flex gap-4">
                      <span>{item.name}</span>
                      <span className="text-gray-400">x{item.quantity}</span>
                    </div>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))
            ) : (
                <div className="flex justify-between items-center text-sm font-medium">
                  <div className="flex gap-4">
                    <span>Lasaña a la boloñesa</span>
                    <span className="text-gray-400">x1</span>
                  </div>
                  <span>$280.00</span>
                </div>
            )}
          </div>

          <div className="border-t border-gray-100 pt-6 space-y-4 text-sm">
            <div className="flex justify-between text-gray-500">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>IVA (16%)</span>
              <span>${iva.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-gray-500">
              <span>Descuento Empleado/Socio (10%)</span>
              {hasDiscount ? (
                  <span className="text-red-500 font-bold">- ${discountAmount.toFixed(2)}</span>
              ) : (
                  <button 
                    onClick={() => {
                        if (userRole === "admin") {
                            setHasDiscount(true);
                        } else {
                            alert("Acceso denegado: Se requiere autorización de Gerente para aplicar descuentos o cortesías.");
                        }
                    }}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1.5 rounded-full font-bold transition-colors"
                  >
                    + Aplicar
                  </button>
              )}
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6 mt-6 flex justify-between items-center font-bold text-lg">
            <span>Total</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
        </div>

        {/* RIGHT COLUMN - PAYMENT OPTIONS */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Opciones de pago</h2>

          {/* Split Options */}
          <div className="flex p-1 bg-[#E8E6DF] rounded-xl mb-8">
            <button
              onClick={() => setSplitMethod("completa")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-colors ${
                splitMethod === "completa" ? "bg-[#9FB9B5] text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <span>$</span> Cuenta completa
            </button>
            <button
              onClick={() => setSplitMethod("dividir")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-colors ${
                splitMethod === "dividir" ? "bg-[#9FB9B5] text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <SplitSquareHorizontal className="w-4 h-4" /> Dividir cuenta
            </button>
            <button
              onClick={() => setSplitMethod("asignar")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-colors ${
                splitMethod === "asignar" ? "bg-[#9FB9B5] text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <UserPlus className="w-4 h-4" /> Asignar
            </button>
          </div>

          {/* Tab Content */}
          {splitMethod === "completa" && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-4 space-y-4">
              {/* Credit Card */}
              <label className={`flex items-center p-6 border-2 rounded-xl cursor-pointer transition-all ${
                paymentMethod === "tarjeta" ? "border-gray-900 bg-gray-50" : "border-gray-100 hover:border-gray-300"
              }`}>
                <input type="radio" name="payment" value="tarjeta" className="hidden" 
                       checked={paymentMethod === "tarjeta"} onChange={() => setPaymentMethod("tarjeta")} />
                <div className="flex-1 flex flex-col items-center text-center gap-2">
                  <CreditCard className={`w-8 h-8 ${paymentMethod === "tarjeta" ? "text-gray-900" : "text-gray-400"}`} />
                  <div>
                    <div className="font-bold">Tarjeta de Crédito / Débito</div>
                    <div className="text-xs text-gray-500">Pago con terminal</div>
                  </div>
                </div>
              </label>

               {/* Cash */}
               <label className={`flex items-center p-6 border-2 rounded-xl cursor-pointer transition-all ${
                paymentMethod === "efectivo" ? "border-gray-900 bg-gray-50" : "border-gray-100 hover:border-gray-300"
              }`}>
                <input type="radio" name="payment" value="efectivo" className="hidden" 
                       checked={paymentMethod === "efectivo"} onChange={() => setPaymentMethod("efectivo")} />
                <div className="flex-1 flex flex-col items-center text-center gap-2">
                  <Banknote className={`w-8 h-8 ${paymentMethod === "efectivo" ? "text-gray-900" : "text-gray-400"}`} />
                  <div>
                    <div className="font-bold">Efectivo</div>
                    <div className="text-xs text-gray-500">El pago se realizará al finalizar el servicio</div>
                  </div>
                </div>
              </label>
            </div>
          )}

          {splitMethod === "dividir" && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-4 space-y-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Dividir cuenta en partes iguales</h3>
                <div className="flex gap-2">
                  {[2, 3, 4, 5, 6].map(num => (
                    <button 
                      key={num} 
                      onClick={() => setSplitParts(num)}
                      className={`flex-1 py-3 border rounded-xl font-bold transition-colors ${splitParts === num ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-200 text-gray-700 hover:border-gray-900 hover:bg-gray-50'}`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
              {splitParts && (
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 flex justify-between items-center animate-in fade-in zoom-in-95">
                  <span className="text-emerald-800 font-medium">Cada persona paga:</span>
                  <span className="text-emerald-900 font-black text-xl">${(totalAmount / splitParts).toFixed(2)}</span>
                </div>
              )}
              <div className="border-t border-gray-100 pt-6">
                <h3 className="font-bold text-lg mb-1">Seleccionar por productos</h3>
                <p className="text-gray-500 text-sm mb-4">Seleccione esta opción para asignar productos individuales a cada persona</p>
                <button 
                  onClick={() => setIsProductModalOpen(true)}
                  className="w-full py-4 border border-gray-200 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
                >
                  Seleccionar productos
                </button>
              </div>
            </div>
          )}

          {splitMethod === "asignar" && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-4 space-y-8">
              <div>
                <h3 className="font-bold text-lg mb-1">Asignar cuenta a cliente</h3>
                <p className="text-gray-500 text-sm mb-4">Seleccione un cliente registrado para asignar esta cuenta</p>
                <button 
                  onClick={() => setIsCustomerModalOpen(true)}
                  className="w-full py-4 border border-gray-200 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
                >
                  {assignedCustomer ? `Cambiar: ${assignedCustomer}` : "Buscar cliente"}
                </button>
                {assignedCustomer && (
                  <div className="mt-3 p-3 bg-[#f0f4f4] text-[#2E5E60] font-medium text-sm rounded-lg flex items-center justify-between animate-in fade-in">
                    <span>Cliente asignado exitosamente</span>
                    <button onClick={() => setAssignedCustomer(null)} className="text-gray-500 hover:text-red-500 font-bold text-xs p-1">Quitar</button>
                  </div>
                )}
              </div>
              <div className="border-t border-gray-100 pt-6">
                <h3 className="font-bold text-lg mb-4">Registrar nuevo cliente</h3>
                <button 
                  onClick={() => setIsRegisterModalOpen(true)}
                  className="w-full py-4 border border-gray-200 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
                >
                  Registrar nuevo cliente
                </button>
              </div>
            </div>
          )}
          
          <p className="text-center text-xs font-semibold text-gray-500 mb-8 py-2">
             El pago se realizará al finalizar el servicio
          </p>

          <button
            onClick={handleSendToKitchen}
            className="w-full bg-[#5C564C] hover:bg-[#4A453C] text-white py-5 rounded-xl font-bold flex flex-col items-center justify-center gap-1 transition-all shadow-md active:scale-[0.99]"
          >
            <div className="flex items-center gap-2 text-lg">
              <Banknote className="w-5 h-5" />
              Cobrar Total y Finalizar
            </div>
            <span className="text-[10px] font-normal text-white/70">La cuenta se cerrará y la mesa quedará libre</span>
          </button>
        </div>
      </div>

      {/* Product Selection Modal */}
      {isProductModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl animate-in zoom-in-95">
            <h3 className="text-xl font-bold mb-2">Seleccionar productos</h3>
            <p className="text-sm text-gray-500 mb-6">Selecciona los productos que pagará la Persona 1:</p>
            <div className="space-y-3 mb-6">
              <label className="flex items-center justify-between p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                <div className="flex gap-3 items-center">
                  <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#2E5E60] focus:ring-[#2E5E60]" />
                  <span className="font-medium text-gray-800">Lasaña a la boloñesa</span>
                </div>
                <span className="font-bold text-gray-900">$280.00</span>
              </label>
              <label className="flex items-center justify-between p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                <div className="flex gap-3 items-center">
                  <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#2E5E60] focus:ring-[#2E5E60]" />
                  <span className="font-medium text-gray-800">Agua mineral</span>
                </div>
                <span className="font-bold text-gray-900">$90.00</span>
              </label>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setIsProductModalOpen(false)}
                className="flex-1 py-4 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors"
              >
                Cancelar
              </button>
              <button 
                onClick={() => setIsProductModalOpen(false)}
                className="flex-1 py-4 bg-[#2E5E60] text-white rounded-xl font-bold hover:bg-[#1A3839] transition-colors"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Customer Search Modal */}
      {isCustomerModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl animate-in zoom-in-95">
            <h3 className="text-xl font-bold mb-4">Buscar Cliente</h3>
            <input 
              type="text" 
              placeholder="Nombre, teléfono o email..." 
              className="w-full p-4 border border-gray-200 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-[#2E5E60] transition-all" 
              autoFocus
            />
            <div className="space-y-2 mb-6">
              <button 
                onClick={() => { setAssignedCustomer("Juan Pérez (Socio Oro)"); setIsCustomerModalOpen(false); }}
                className="w-full text-left p-4 hover:bg-[#f0f4f4] rounded-xl border border-transparent hover:border-[#2E5E60]/20 flex justify-between items-center transition-colors"
              >
                <div>
                  <div className="font-bold text-gray-900">Juan Pérez</div>
                  <div className="text-xs text-gray-500">juan.p@email.com • 555-0123</div>
                </div>
                <span className="text-xs bg-amber-100 text-amber-700 font-bold px-2 py-1 rounded-md">Socio Oro</span>
              </button>
              <button 
                onClick={() => { setAssignedCustomer("María García"); setIsCustomerModalOpen(false); }}
                className="w-full text-left p-4 hover:bg-[#f0f4f4] rounded-xl border border-transparent hover:border-[#2E5E60]/20 flex flex-col transition-colors"
              >
                <div className="font-bold text-gray-900">María García</div>
                <div className="text-xs text-gray-500">maria.g@email.com • 555-0987</div>
              </button>
            </div>
            <button 
              onClick={() => setIsCustomerModalOpen(false)}
              className="w-full py-4 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Quick Register Modal */}
      {isRegisterModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl animate-in zoom-in-95">
            <h3 className="text-xl font-bold mb-4">Registro Rápido de Cliente</h3>
            <p className="text-sm text-gray-500 mb-6">Añade los datos básicos para asociarlo a esta orden al instante sin perder el ticket.</p>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">Nombre Completo *</label>
                <input type="text" className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2E5E60]" placeholder="Ej. Ana Martínez" autoFocus />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">Teléfono</label>
                <input type="text" className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2E5E60]" placeholder="Ej. 555-123-4567" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2E5E60]" placeholder="ana@email.com" />
              </div>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => setIsRegisterModalOpen(false)}
                className="flex-1 py-4 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors"
              >
                Cancelar
              </button>
              <button 
                onClick={() => { setAssignedCustomer("Nuevo Cliente Registrado"); setIsRegisterModalOpen(false); }}
                className="flex-1 py-4 bg-[#2E5E60] text-white rounded-xl font-bold hover:bg-[#1A3839] transition-colors shadow-md"
              >
                Guardar y Asignar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
