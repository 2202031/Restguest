"use client";

import SidebarItem from "./SidebarItem";
import SidebarSection from "./SidebarSection";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUsers, FaGift, FaChartBar, FaCalendarAlt, FaBookOpen } from "react-icons/fa";
import { RiRestaurant2Fill } from "react-icons/ri";
import { useRestaurant } from "@/context/RestaurantContext";

export default function Sidebar() {
    const { userRole } = useRestaurant();
    return (
        <aside
            className="min-w-[230px] h-screen sticky top-0 flex flex-col overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
            style={{ backgroundColor: "#59554E" }}
        >
            {/* Header area with RestGuest logo - same height as header */}
            <div
                className="py-4 px-6 flex items-center"
                style={{ minHeight: "64px" }}
            >
                <h1 className="text-xl font-bold text-white">RestGuest</h1>
            </div>

            {/* Navigation items */}
            <div className="p-4 flex flex-col gap-4">
                {userRole === "admin" && (
                  <SidebarItem
                      icon={<MdSpaceDashboard />}
                      label="Dashboard"
                      href="/dashboard"
                  />
                )}
                <div id="sidebar-tables">
                  <SidebarItem
                      icon={<RiRestaurant2Fill />}
                      label="Mesas"
                      href="/dashboard/tables"
                  />
                </div>
                <div id="sidebar-menu">
                  <SidebarItem
                      icon={<FaBookOpen />}
                      label="Catálogo de Menú"
                      href="/dashboard/menu"
                  />
                </div>
                {userRole === "admin" && (
                    <>
                        <div id="sidebar-customers">
                            <SidebarSection 
                                icon={<FaUsers />} 
                                label="Clientes" 
                                href="/dashboard/customers"
                                subItems={[
                                    { label: "Registro de clientes", href: "/dashboard/customers/register" },
                                    { label: "Historial de consumo", href: "/dashboard/customers/history" },
                                    { label: "Preferencias/Alergias", href: "/dashboard/customers/preferences" },
                                    { label: "Clientes recurrentes", href: "/dashboard/customers/recurring" },
                                    { label: "Eliminación de datos", href: "/dashboard/customers/delete" },
                                ]}
                            />
                        </div>
                        <div id="sidebar-loyalty">
                            <SidebarSection 
                                icon={<FaGift />} 
                                label="Fidelización" 
                                href="/dashboard/loyalty"
                                subItems={[
                                    { label: "Seguimiento de clientes", href: "/dashboard/loyalty/tracking" },
                                    { label: "Asignar promociones", href: "/dashboard/loyalty/promotions" },
                                    { label: "Análisis de promociones", href: "/dashboard/loyalty/analysis" },
                                    { label: "Marketing", href: "/dashboard/loyalty/marketing" },
                                ]}
                            />
                        </div>
                        <div id="sidebar-reports">
                            <SidebarSection 
                                icon={<FaChartBar />} 
                                label="Reportes" 
                                href="/dashboard/reports"
                                subItems={[
                                    { label: "Registro de análisis y ventas", href: "/dashboard/reports/sales" },
                                    { label: "Registro de stock y abastecimiento", href: "/dashboard/reports/stock" },
                                    { label: "Cálculo de costos y rentabilidad", href: "/dashboard/reports/profitability" },
                                    { label: "Experiencia de cliente", href: "/dashboard/reports/experience" },
                                ]}
                            />
                        </div>
                        <div id="sidebar-reservations">
                            <SidebarItem icon={<FaCalendarAlt />} label="Reservaciones" href="/dashboard/reservations" />
                        </div>
                    </>
                )}
            </div>
        </aside>
    );
}
