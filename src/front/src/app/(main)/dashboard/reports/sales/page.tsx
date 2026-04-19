"use client";

import { TrendingUp, DollarSign, Receipt, Award, ArrowUpRight, ArrowDownRight, Download } from "lucide-react";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell
} from 'recharts';

// --- MOCK DATA ---
const revenueData = [
  { name: 'Lun', total: 2400 },
  { name: 'Mar', total: 1398 },
  { name: 'Mié', total: 9800 },
  { name: 'Jue', total: 3908 },
  { name: 'Vie', total: 4800 },
  { name: 'Sáb', total: 8800 },
  { name: 'Dom', total: 11300 },
];

const topProductsData = [
  { name: 'Lasaña Boloñesa', sales: 120 },
  { name: 'Ribeye 300g', sales: 98 },
  { name: 'Hamburguesa Clásica', sales: 86 },
  { name: 'Vino Tinto (Copa)', sales: 65 },
  { name: 'Pastel Chocolate', sales: 45 },
];

const recentTransactions = [
  { id: '#084', time: 'hace 5 min', table: 'Mesa 2', amount: 392.20, status: 'Completado', method: 'Tarjeta' },
  { id: '#083', time: 'hace 18 min', table: 'Mesa 5', amount: 1250.00, status: 'Completado', method: 'Efectivo' },
  { id: '#082', time: 'hace 32 min', table: 'Barra', amount: 150.00, status: 'Completado', method: 'Tarjeta' },
  { id: '#081', time: 'hace 1 hora', table: 'Mesa 1', amount: 890.50, status: 'Completado', method: 'Tarjeta' },
];

export default function SalesAnalyticsDashboard() {
  return (
    <div className="w-full max-w-7xl mx-auto py-10 px-4 md:px-8 font-sans">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">Análisis de Ventas</h1>
          <p className="text-gray-500 font-medium">Revisa el rendimiento y métricas de tu restaurante en tiempo real.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
          <Download className="w-4 h-4" /> Exportar Reporte
        </button>
      </div>

      {/* KPI CARDS */}
      <div id="reports-kpis" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* KPI 1 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
            <DollarSign className="w-16 h-16 text-[#2E5E60]" />
          </div>
          <p className="text-gray-500 font-bold text-sm mb-1 uppercase tracking-wide">Ingresos de Hoy</p>
          <h3 className="text-3xl font-black text-gray-900 mb-4">$18,450</h3>
          <div className="flex items-center gap-2 text-sm font-bold text-emerald-600 bg-emerald-50 w-fit px-3 py-1 rounded-full">
            <ArrowUpRight className="w-4 h-4" /> +12.5% vs ayer
          </div>
        </div>

        {/* KPI 2 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
            <Receipt className="w-16 h-16 text-sky-600" />
          </div>
          <p className="text-gray-500 font-bold text-sm mb-1 uppercase tracking-wide">Ticket Promedio</p>
          <h3 className="text-3xl font-black text-gray-900 mb-4">$450.00</h3>
          <div className="flex items-center gap-2 text-sm font-bold text-emerald-600 bg-emerald-50 w-fit px-3 py-1 rounded-full">
            <ArrowUpRight className="w-4 h-4" /> +5.2% vs ayer
          </div>
        </div>

        {/* KPI 3 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
            <TrendingUp className="w-16 h-16 text-amber-600" />
          </div>
          <p className="text-gray-500 font-bold text-sm mb-1 uppercase tracking-wide">Mesas Atendidas</p>
          <h3 className="text-3xl font-black text-gray-900 mb-4">42</h3>
          <div className="flex items-center gap-2 text-sm font-bold text-red-600 bg-red-50 w-fit px-3 py-1 rounded-full">
            <ArrowDownRight className="w-4 h-4" /> -2.1% vs ayer
          </div>
        </div>

        {/* KPI 4 */}
        <div className="bg-[#2E5E60] rounded-2xl p-6 shadow-md relative overflow-hidden group hover:shadow-lg transition-shadow">
          <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:scale-110 transition-transform">
            <Award className="w-16 h-16 text-white" />
          </div>
          <p className="text-white/80 font-bold text-sm mb-1 uppercase tracking-wide">Platillo Estrella</p>
          <h3 className="text-2xl font-black text-white mb-2 leading-tight">Lasaña a la Boloñesa</h3>
          <p className="text-white/90 font-medium text-sm">120 vendidos esta semana</p>
        </div>
      </div>

      {/* CHARTS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        
        {/* Main Area Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Ingresos Semanales</h2>
              <p className="text-sm text-gray-500 font-medium mt-1">Comparativa de ventas de los últimos 7 días</p>
            </div>
            <select className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-[#2E5E60] focus:border-[#2E5E60] block p-2.5 outline-none font-bold">
              <option>Esta Semana</option>
              <option>Mes Pasado</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2E5E60" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#2E5E60" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12, fontWeight: 600}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12, fontWeight: 600}} dx={-10} tickFormatter={(value) => `$${value}`} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  labelStyle={{ fontWeight: 'bold', color: '#111827', marginBottom: '4px' }}
                  itemStyle={{ fontWeight: 'bold', color: '#2E5E60' }}
                  formatter={(value) => [`$${value}`, 'Ingresos']}
                />
                <Area type="monotone" dataKey="total" stroke="#2E5E60" strokeWidth={4} fillOpacity={1} fill="url(#colorTotal)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Products Bar Chart */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Top Productos</h2>
          <p className="text-sm text-gray-500 font-medium mb-6">Platillos más vendidos</p>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={topProductsData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E5E7EB" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={110} axisLine={false} tickLine={false} tick={{fill: '#374151', fontSize: 12, fontWeight: 600}} />
                <Tooltip 
                  cursor={{fill: '#f3f4f6'}}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  formatter={(value) => [`${value} uds`, 'Vendidos']}
                />
                <Bar dataKey="sales" radius={[0, 4, 4, 0]} barSize={24}>
                  {topProductsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#2E5E60' : index === 1 ? '#9FB9B5' : '#D1D5DB'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* RECENT TRANSACTIONS TABLE */}
      <div id="reports-transactions" className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">Transacciones Recientes</h2>
          <button className="text-sm font-bold text-[#2E5E60] hover:text-[#1A3839]">Ver Todas</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-bold border-b border-gray-100">Ticket ID</th>
                <th className="p-4 font-bold border-b border-gray-100">Tiempo</th>
                <th className="p-4 font-bold border-b border-gray-100">Ubicación</th>
                <th className="p-4 font-bold border-b border-gray-100">Método</th>
                <th className="p-4 font-bold border-b border-gray-100 text-right">Monto</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentTransactions.map((tx, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors group">
                  <td className="p-4 font-black text-gray-900">{tx.id}</td>
                  <td className="p-4 text-gray-500 font-medium text-sm">{tx.time}</td>
                  <td className="p-4 text-gray-700 font-bold">{tx.table}</td>
                  <td className="p-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-600">
                      {tx.method}
                    </span>
                  </td>
                  <td className="p-4 text-right font-black text-[#2E5E60]">${tx.amount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
