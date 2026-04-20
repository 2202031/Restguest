type Customer = {
    id: number;
    name: string;
    email: string;
    phone: string;
    lastVisit: string;
    totalVisits: number;
};

const customers: Customer[] = [
    {
        id: 1,
        name: "María García",
        email: "maria@email.com",
        phone: "+52 555 1234",
        lastVisit: "Hoy, 14:30",
        totalVisits: 12
    },
    {
        id: 2,
        name: "Juan Pérez",
        email: "juan@email.com",
        phone: "+52 555 5678",
        lastVisit: "Ayer, 19:00",
        totalVisits: 8
    },
    {
        id: 3,
        name: "Ana Martínez",
        email: "ana@email.com",
        phone: "+52 555 9012",
        lastVisit: "Hoy, 12:00",
        totalVisits: 15
    },
    {
        id: 4,
        name: "Carlos López",
        email: "carlos@email.com",
        phone: "+52 555 3456",
        lastVisit: "Hace 2 días",
        totalVisits: 5
    },
    {
        id: 5,
        name: "Laura Sánchez",
        email: "laura@email.com",
        phone: "+52 555 7890",
        lastVisit: "Hoy, 18:45",
        totalVisits: 20
    },
];

export default function CustomersTable({ isEmpty = false }: { isEmpty?: boolean }) {
    return (
        <div
            className="p-6 rounded-xl shadow-md"
            style={{ backgroundColor: "white" }}
        >
            <h2
                className="text-xl font-bold mb-6"
                style={{ color: "#59554E" }}
            >
                Clientes Recientes
            </h2>

            {isEmpty ? (
                <div className="flex flex-col items-center justify-center py-10 px-4 text-center border-2 border-dashed border-gray-100 rounded-xl bg-gray-50/50">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 text-[#2E5E60] shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Aún no hay clientes registrados</h3>
                    <p className="text-gray-500 text-sm max-w-sm">
                        Agrega a tus comensales desde el Plano de Mesas para empezar a conocer sus preferencias y crear promociones exclusivas.
                    </p>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b-2" style={{ borderColor: "#F3F4E5" }}>
                                <th
                                    className="text-left py-3 px-4 font-semibold text-sm"
                                    style={{ color: "#59554E" }}
                                >
                                    Nombre
                                </th>
                                <th
                                    className="text-left py-3 px-4 font-semibold text-sm hidden md:table-cell"
                                    style={{ color: "#59554E" }}
                                >
                                    Email
                                </th>
                                <th
                                    className="text-left py-3 px-4 font-semibold text-sm hidden sm:table-cell"
                                    style={{ color: "#59554E" }}
                                >
                                    Teléfono
                                </th>
                                <th
                                    className="text-left py-3 px-4 font-semibold text-sm"
                                    style={{ color: "#59554E" }}
                                >
                                    Última Visita
                                </th>
                                <th
                                    className="text-center py-3 px-4 font-semibold text-sm hidden lg:table-cell"
                                    style={{ color: "#59554E" }}
                                >
                                    Visitas
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((customer) => (
                                <tr
                                    key={customer.id}
                                    className="border-b hover:bg-opacity-50 transition-colors cursor-pointer"
                                    style={{ borderColor: "#F3F4E520" }}
                                >
                                    <td
                                        className="py-4 px-4 font-medium"
                                        style={{ color: "#59554E" }}
                                    >
                                        {customer.name}
                                    </td>
                                    <td
                                        className="py-4 px-4 text-sm opacity-70 hidden md:table-cell"
                                        style={{ color: "#59554E" }}
                                    >
                                        {customer.email}
                                    </td>
                                    <td
                                        className="py-4 px-4 text-sm opacity-70 hidden sm:table-cell"
                                        style={{ color: "#59554E" }}
                                    >
                                        {customer.phone}
                                    </td>
                                    <td
                                        className="py-4 px-4 text-sm"
                                        style={{ color: "#59554E" }}
                                    >
                                        {customer.lastVisit}
                                    </td>
                                    <td
                                        className="py-4 px-4 text-center hidden lg:table-cell"
                                    >
                                        <span
                                            className="px-3 py-1 rounded-full text-sm font-semibold"
                                            style={{
                                                backgroundColor: "#F3F4E5",
                                                color: "#59554E"
                                            }}
                                        >
                                            {customer.totalVisits}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
