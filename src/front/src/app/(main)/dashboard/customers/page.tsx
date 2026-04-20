import Link from "next/link";
import { FiUserPlus, FiClock, FiSettings, FiStar, FiTrash2 } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";

type CustomerCardProps = {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    href: string;
};

const CustomerCard = ({
    icon,
    title,
    subtitle,
    description,
    buttonText,
    href,
}: CustomerCardProps) => {
    return (
        <div className="bg-[#E2E4DC] p-6 rounded-2xl flex flex-col justify-between shadow-sm min-h-[260px]">
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl text-[#92B5B3]">{icon}</div>
                    <h2 className="text-2xl font-bold text-[#3B3A36]">{title}</h2>
                </div>
                <p className="text-sm font-semibold text-[#66655F] mb-3">
                    {subtitle}
                </p>
                <p className="text-sm text-[#5C5A55] mb-6 pr-4">
                    {description}
                </p>
            </div>
            
            <Link
                href={href}
                className="bg-[#F2F4EC] hover:bg-white transition flex items-center justify-between px-4 py-3 rounded-lg text-[#4E4D48] font-semibold text-sm shadow-sm"
            >
                <span>{buttonText}</span>
                <FaChevronRight className="opacity-70" />
            </Link>
        </div>
    );
};

export default function CustomersPage() {
    return (
        <div className="p-8 min-h-screen" style={{ backgroundColor: "#F2F4EC" }}>
            <h1 className="text-4xl font-extrabold text-[#1F1E1A] mb-10">Clientes</h1>
            
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                    <div className="lg:col-span-2" id="customers-register-card">
                        <CustomerCard
                            icon={<FiUserPlus />}
                            title="Registro de Clientes"
                            subtitle="Gestiona la información básica de tus clientes"
                            description="Registra nuevos clientes o actualiza la información de los existentes."
                            buttonText="Ir a Registro"
                            href="/dashboard/customers/register"
                        />
                    </div>
                    <div className="lg:col-span-2">
                        <CustomerCard
                            icon={<FiClock />}
                            title="Historial de Consumo"
                            subtitle="Visualiza el historial de pedidos"
                            description="Consulta todos los pedidos realizados por cada cliente con filtros 'avanzados'."
                            buttonText="Ver Historial"
                            href="/dashboard/customers/history"
                        />
                    </div>
                    <div className="lg:col-span-2 md:col-span-2 lg:col-start-auto">
                        <CustomerCard
                            icon={<FiSettings />}
                            title="Preferencias y Alergias"
                            subtitle="Gestiona restricciones alimentarias"
                            description="Actualiza las preferencias y alergias de tus clientes para un mejor servicio."
                            buttonText="Actualizar Preferencias"
                            href="/dashboard/customers/preferences"
                        />
                    </div>

                    <div className="lg:col-start-2 lg:col-span-2">
                        <CustomerCard
                            icon={<FiStar />}
                            title="Clientes Recurrentes"
                            subtitle="Identifica a tus mejores clientes"
                            description="Visualiza y gestiona a los clientes frecuentes con notas personalizadas."
                            buttonText="Ver Recurrentes"
                            href="/dashboard/customers/recurring"
                        />
                    </div>
                    <div className="lg:col-span-2" id="customers-delete-card">
                        <CustomerCard
                            icon={<FiTrash2 />}
                            title="Eliminación de Datos"
                            subtitle="Gestiona solicitudes de eliminación"
                            description="Procesa las solicitudes de eliminación de datos conforme a las políticas de privacidad."
                            buttonText="Gestionar Eliminación"
                            href="/dashboard/customers/delete"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
