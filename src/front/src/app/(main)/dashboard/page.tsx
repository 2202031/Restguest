import DashboardHeader from "@/components/DashboardMain/DashboardHeader";
import StatsCards from "@/components/DashboardMain/StatsCards";
import TableAvailability from "@/components/DashboardMain/TableAvailability";
import CustomersTable from "@/components/DashboardMain/CustomersTable";
import SalesChart from "@/components/DashboardMain/SalesChart";

export default function DashboardPage() {
    // Simulando que es un usuario nuevo para ver los estados vacíos según el requerimiento.
    const isNewUser = true;

    return (
        <div>
            <DashboardHeader />

            <StatsCards isEmpty={isNewUser} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <TableAvailability isEmpty={isNewUser} />
                <SalesChart isEmpty={isNewUser} />
            </div>

            <CustomersTable isEmpty={isNewUser} />
        </div>
    );
}
