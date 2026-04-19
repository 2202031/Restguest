import { FaUsers, FaCalendarCheck, FaMoneyBillWave } from "react-icons/fa";

type StatCardProps = {
    icon: React.ReactNode;
    title: string;
    value: string | number;
    change?: string;
    changeType?: "positive" | "negative";
};

function StatCard({ icon, title, value, change, changeType }: StatCardProps) {
    return (
        <div
            className="p-6 rounded-xl shadow-md"
            style={{ backgroundColor: "white" }}
        >
            <div className="flex items-center justify-between mb-4">
                <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: "#F3F4E5" }}
                >
                    <div
                        className="text-2xl"
                        style={{ color: "#59554E" }}
                    >
                        {icon}
                    </div>
                </div>
                {change && (
                    <span
                        className="text-sm font-semibold"
                        style={{
                            color: changeType === "positive" ? "#10b981" : "#ef4444"
                        }}
                    >
                        {change}
                    </span>
                )}
            </div>
            <h3
                className="text-sm font-medium mb-1 opacity-70"
                style={{ color: "#59554E" }}
            >
                {title}
            </h3>
            <p
                className="text-3xl font-bold"
                style={{ color: "#59554E" }}
            >
                {value}
            </p>
        </div>
    );
}

export default function StatsCards({ isEmpty = false }: { isEmpty?: boolean }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard
                icon={<FaCalendarCheck />}
                title="Reservas Hoy"
                value={isEmpty ? 0 : 24}
                change={isEmpty ? undefined : "+12%"}
                changeType={isEmpty ? undefined : "positive"}
            />
            <StatCard
                icon={<FaUsers />}
                title="Clientes Activos"
                value={isEmpty ? 0 : 156}
                change={isEmpty ? undefined : "+8%"}
                changeType={isEmpty ? undefined : "positive"}
            />
            <StatCard
                icon={<FaMoneyBillWave />}
                title="Ventas del Día"
                value={isEmpty ? "$0" : "$2,450"}
                change={isEmpty ? undefined : "+15%"}
                changeType={isEmpty ? undefined : "positive"}
            />
        </div>
    );
}
