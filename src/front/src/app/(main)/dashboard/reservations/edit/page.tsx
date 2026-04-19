"use client";

import { ArrowLeft, MapPin, Clock, Users, CalendarDays } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function EditReservationPage() {
    return (
        <div className="w-full flex justify-center py-10 px-4">
            <div className="w-full max-w-5xl">
                {/* Header Section */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <Link href="/dashboard/reservations/history">
                            <button className="flex items-center justify-center bg-white shadow-sm hover:shadow-md text-gray-700 hover:text-black w-12 h-12 rounded-full transition-all duration-300">
                                <ArrowLeft className="w-6 h-6" />
                            </button>
                        </Link>
                        <div>
                            <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#2E5E60] to-[#8CB1AD]">
                                Modificar Reserva
                            </h1>
                            <p className="text-gray-500 font-medium mt-1">
                                Selecciona los detalles actualizados para esta reservación
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* Form Section */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col h-full justify-between gap-8">
                            <div className="space-y-8">
                                {/* Sucursal */}
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2 uppercase tracking-wide">
                                        <MapPin className="w-4 h-4 text-[#2E5E60]" />
                                        Sucursal disponible
                                    </label>
                                    <div className="relative">
                                        <select 
                                            className="w-full appearance-none bg-[#F8F9FA] border border-gray-200 text-gray-800 rounded-xl h-14 px-5 outline-none transition-all focus:border-[#2E5E60] focus:ring-4 focus:ring-[#2E5E60]/10 font-medium cursor-pointer"
                                            defaultValue=""
                                        >
                                            <option value="" disabled>Selecciona una sucursal</option>
                                            <option value="centro">Sucursal Centro</option>
                                            <option value="norte">Sucursal Norte</option>
                                            <option value="sur">Sucursal Sur (Terraza)</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-500">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Horario */}
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2 uppercase tracking-wide">
                                        <Clock className="w-4 h-4 text-[#2E5E60]" />
                                        Horario disponible
                                    </label>
                                    <div className="relative">
                                        <select 
                                            className="w-full appearance-none bg-[#F8F9FA] border border-gray-200 text-gray-800 rounded-xl h-14 px-5 outline-none transition-all focus:border-[#2E5E60] focus:ring-4 focus:ring-[#2E5E60]/10 font-medium cursor-pointer"
                                            defaultValue=""
                                        >
                                            <option value="" disabled>Selecciona la hora</option>
                                            <option value="1200">12:00 PM</option>
                                            <option value="1300">1:00 PM</option>
                                            <option value="1430">2:30 PM (Alta demanda)</option>
                                            <option value="1900">7:00 PM</option>
                                            <option value="2030">8:30 PM</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-500">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Número de personas */}
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2 uppercase tracking-wide">
                                        <Users className="w-4 h-4 text-[#2E5E60]" />
                                        Cupo en mesa
                                    </label>
                                    <div className="relative">
                                        <select 
                                            className="w-full appearance-none bg-[#F8F9FA] border border-gray-200 text-gray-800 rounded-xl h-14 px-5 outline-none transition-all focus:border-[#2E5E60] focus:ring-4 focus:ring-[#2E5E60]/10 font-medium cursor-pointer"
                                            defaultValue=""
                                        >
                                            <option value="" disabled>Aforo de la mesa reservada</option>
                                            <option value="2">2 personas (Pareja)</option>
                                            <option value="4">Hasta 4 personas</option>
                                            <option value="6">Hasta 6 personas</option>
                                            <option value="8">8+ personas (Área VIP)</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-500">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Calendar & Actions Section */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        {/* Premium Calendar UI */}
                        <div className="bg-gradient-to-br from-[#2E5E60] to-[#1A3839] rounded-3xl p-1 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-bl-full pointer-events-none"></div>
                            <div className="bg-white rounded-[22px] p-6 m-[2px]">
                                <div className="flex items-center gap-2 mb-6">
                                    <CalendarDays className="w-5 h-5 text-[#2E5E60]" />
                                    <h3 className="font-bold tracking-tight text-gray-800">Fecha de reprogramación</h3>
                                </div>

                                {/* Calendar Header */}
                                <div className="flex justify-between items-center mb-6 px-2">
                                    <button className="text-gray-400 hover:text-[#2E5E60] hover:bg-[#F3F4E5] p-2 rounded-full transition-all">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                    </button>
                                    <span className="font-extrabold text-gray-800 text-lg uppercase tracking-wider">Mayo 2026</span>
                                    <button className="text-gray-400 hover:text-[#2E5E60] hover:bg-[#F3F4E5] p-2 rounded-full transition-all">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </button>
                                </div>

                                {/* Calendar Days Header */}
                                <div className="grid grid-cols-7 gap-y-4 gap-x-1 text-center text-[10px] text-gray-400 font-extrabold uppercase mb-4">
                                    <span>Dom</span><span>Lun</span><span>Mar</span><span>Mié</span><span>Jue</span><span>Vie</span><span>Sáb</span>
                                </div>

                                {/* Calendar Grid */}
                                <div className="grid grid-cols-7 gap-y-2 gap-x-1 text-center text-sm font-semibold text-gray-700">
                                    {/* Empty cells */}
                                    <div className="col-start-6">1</div><div className="text-gray-900 font-bold">2</div>
                                    <div className="text-gray-300">3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div className="text-gray-900 font-bold">9</div>
                                    <div className="text-gray-300">10</div><div>11</div><div>12</div><div>13</div><div>14</div><div>15</div><div className="text-gray-900 font-bold">16</div>
                                    <div className="text-gray-300">17</div>
                                    
                                    {/* Selected day */}
                                    <div className="bg-gradient-to-r from-[#FCA016] to-[#FCA016]/90 text-white rounded-xl w-full aspect-square flex items-center justify-center mx-auto shadow-lg shadow-[#FCA016]/30 cursor-pointer transform hover:scale-105 transition-transform font-bold text-base">
                                        18
                                    </div>
                                    
                                    <div className="cursor-pointer hover:bg-gray-100 rounded-xl aspect-square flex items-center justify-center">19</div>
                                    <div className="cursor-pointer hover:bg-gray-100 rounded-xl aspect-square flex items-center justify-center">20</div>
                                    <div className="cursor-pointer hover:bg-gray-100 rounded-xl aspect-square flex items-center justify-center">21</div>
                                    <div className="cursor-pointer hover:bg-gray-100 rounded-xl aspect-square flex items-center justify-center">22</div>
                                    <div className="text-gray-900 font-bold cursor-pointer hover:bg-gray-100 rounded-xl aspect-square flex items-center justify-center">23</div>
                                    <div className="text-gray-300">24</div><div>25</div><div>26</div><div>27</div><div>28</div><div>29</div><div className="text-gray-900 font-bold">30</div>
                                    <div className="text-gray-300">31</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto pt-6 flex flex-col gap-4">
                            <Link href="/dashboard/reservations/history" className="w-full">
                                <button 
                                    className="w-full font-bold py-4 px-8 rounded-2xl shadow-lg shadow-[#2E5E60]/20 text-white flex justify-center items-center gap-2 hover:opacity-90 transition-opacity"
                                    style={{ backgroundColor: "#2E5E60" }}
                                >
                                    <span className="text-lg uppercase tracking-wider">Confirmar Cambios</span>
                                </button>
                            </Link>
                            
                            <Link href="/dashboard/reservations/history" className="w-full">
                                <button className="w-full font-bold py-4 px-8 rounded-2xl transition-all text-gray-500 hover:text-gray-800 hover:bg-white border-2 border-transparent hover:border-gray-200">
                                    Cancelar Operación
                                </button>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
