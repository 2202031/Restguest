"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, Search, X, ImageIcon, Save } from "lucide-react";

type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
};

// Initial Mock Data
const INITIAL_PRODUCTS: Product[] = [
  { id: "m1", name: "Nachos con Queso", price: 120, category: "Entradas", image: "🧀" },
  { id: "m2", name: "Alitas BBQ (10pz)", price: 180, category: "Entradas", image: "🍗" },
  { id: "m3", name: "Hamburguesa Clásica", price: 210, category: "Platos Fuertes", image: "🍔" },
  { id: "m4", name: "Lasaña a la Boloñesa", price: 280, category: "Platos Fuertes", image: "🍝" },
  { id: "m5", name: "Ribeye 300g", price: 450, category: "Platos Fuertes", image: "🥩" },
  { id: "m6", name: "Agua Mineral", price: 50, category: "Bebidas", image: "🫧" },
  { id: "m7", name: "Cerveza Artesanal", price: 90, category: "Bebidas", image: "🍺" },
  { id: "m8", name: "Pastel de Chocolate", price: 120, category: "Postres", image: "🍰" },
];

const CATEGORIES = ["Entradas", "Platos Fuertes", "Bebidas", "Postres"];

export default function MenuManagementPage() {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [activeCategory, setActiveCategory] = useState<string>("Platos Fuertes");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "Platos Fuertes",
    image: "🍽️"
  });

  const filteredProducts = products.filter(p => 
    p.category === activeCategory && 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openNewModal = () => {
    setEditingProduct(null);
    setFormData({ name: "", price: "", category: activeCategory, image: "🍽️" });
    setIsModalOpen(true);
  };

  const openEditModal = (product: Product) => {
    setEditingProduct(product);
    setFormData({ 
      name: product.name, 
      price: product.price.toString(), 
      category: product.category, 
      image: product.image 
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if(confirm("¿Estás seguro de eliminar este producto del menú?")) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.price || isNaN(Number(formData.price))) return;

    if (editingProduct) {
      // Update
      setProducts(products.map(p => p.id === editingProduct.id ? { 
        ...p, 
        name: formData.name, 
        price: Number(formData.price),
        category: formData.category,
        image: formData.image
      } : p));
    } else {
      // Create
      const newProduct: Product = {
        id: `m_${Date.now()}`,
        name: formData.name,
        price: Number(formData.price),
        category: formData.category,
        image: formData.image || "🍽️",
      };
      setProducts([...products, newProduct]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-10 px-4 md:px-8 font-sans">
      
      {/* HEADER */}
        <div id="menu-header" className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">Catálogo de Menú</h1>
          <p className="text-gray-500 font-medium">Gestiona los platillos, bebidas y precios de tu restaurante.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
             <input 
               type="text" 
               placeholder="Buscar en menú..." 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2E5E60] bg-white shadow-sm font-medium"
             />
          </div>
          <button 
            onClick={openNewModal}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#2E5E60] text-white font-bold rounded-xl shadow-lg shadow-[#2E5E60]/20 hover:bg-[#1A3839] hover:-translate-y-0.5 transition-all w-full sm:w-auto whitespace-nowrap"
          >
            <Plus className="w-5 h-5" /> Nuevo Producto
          </button>
        </div>
      </div>

      {/* CATEGORIES TABS */}
      <div className="flex gap-2 border-b border-gray-200 mb-8 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-4 font-bold text-sm whitespace-nowrap transition-all border-b-2 ${
              activeCategory === category 
                ? "border-[#2E5E60] text-[#2E5E60]" 
                : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* PRODUCTS GRID */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white border border-gray-200 border-dashed rounded-3xl p-16 flex flex-col items-center justify-center text-center">
           <ImageIcon className="w-16 h-16 text-gray-300 mb-4" />
           <h3 className="text-xl font-bold text-gray-900 mb-2">No hay productos aquí</h3>
           <p className="text-gray-500 mb-6 max-w-md">No se encontraron productos en la categoría "{activeCategory}". Empieza añadiendo el primer platillo de tu menú.</p>
           <button onClick={openNewModal} className="text-[#2E5E60] font-bold hover:underline">Añadir producto</button>
        </div>
      ) : (
      <div id="menu-grid" className="grid grid-cols-1 sm:grid-cols-2 ml:grid-cols-3 xl:grid-cols-4 gap-6 pb-24">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col">
              <div className="text-6xl text-center py-6 mb-4 bg-gray-50 rounded-xl group-hover:scale-105 transition-transform duration-300">
                {product.image}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1 leading-tight">{product.name}</h3>
                <p className="font-black text-[#2E5E60] text-lg">${product.price.toFixed(2)}</p>
              </div>
              
              <div className="pt-4 mt-4 border-t border-gray-50 flex gap-2">
                <button 
                  onClick={() => openEditModal(product)}
                  className="flex-1 flex justify-center items-center gap-2 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-lg text-sm font-bold transition-colors"
                >
                  <Edit2 className="w-4 h-4" /> Editar
                </button>
                <button 
                  onClick={() => handleDelete(product.id)}
                  className="flex justify-center items-center p-2.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors"
                  title="Eliminar"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MODAL: CREATE / EDIT PRODUCT */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50/50">
              <h2 className="text-2xl font-black text-gray-900">
                {editingProduct ? "Editar Producto" : "Nuevo Producto"}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nombre del Platillo *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Ej. Tacos al Pastor"
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2E5E60] focus:border-transparent outline-none transition-all font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Precio ($) *</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">$</span>
                      <input 
                        type="number" 
                        required
                        step="0.01"
                        min="0"
                        value={formData.price}
                        onChange={(e) => setFormData({...formData, price: e.target.value})}
                        placeholder="0.00"
                        className="w-full pl-8 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2E5E60] focus:border-transparent outline-none transition-all font-medium"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Icono / Emoji</label>
                    <input 
                      type="text" 
                      value={formData.image}
                      onChange={(e) => setFormData({...formData, image: e.target.value})}
                      placeholder="🌮"
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-center text-xl focus:ring-2 focus:ring-[#2E5E60] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Categoría *</label>
                  <select 
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2E5E60] focus:border-transparent outline-none transition-all font-medium appearance-none"
                  >
                    {CATEGORIES.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-4 font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  className="flex-1 py-4 font-bold text-white bg-[#2E5E60] hover:bg-[#1A3839] rounded-xl shadow-lg shadow-[#2E5E60]/20 hover:-translate-y-0.5 transition-all flex justify-center items-center gap-2"
                >
                  <Save className="w-5 h-5" /> {editingProduct ? "Guardar Cambios" : "Añadir a Menú"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
