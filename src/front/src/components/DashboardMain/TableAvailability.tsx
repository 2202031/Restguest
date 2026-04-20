type Table = {
    id: number;
    number: string;
    capacity: number;
    status: "available" | "occupied" | "reserved";
};

const tables: Table[] = [
    { id: 1, number: "1", capacity: 2, status: "available" },
    { id: 2, number: "2", capacity: 4, status: "occupied" },
    { id: 3, number: "3", capacity: 4, status: "reserved" },
    { id: 4, number: "4", capacity: 6, status: "available" },
    { id: 5, number: "5", capacity: 2, status: "occupied" },
    { id: 6, number: "6", capacity: 8, status: "available" },
    { id: 7, number: "7", capacity: 4, status: "reserved" },
    { id: 8, number: "8", capacity: 2, status: "available" },
];

const statusConfig = {
    available: { label: "Disponible", color: "#10b981", bg: "#d1fae5" },
    occupied: { label: "Ocupada", color: "#ef4444", bg: "#fee2e2" },
    reserved: { label: "Reservada", color: "#f59e0b", bg: "#fef3c7" },
};

export default function TableAvailability({ isEmpty = false }: { isEmpty?: boolean }) {
    const displayTables = isEmpty 
        ? tables.map(t => ({ ...t, status: "available" as const }))
        : tables;

    return (
        <div
            className="p-6 rounded-xl shadow-md"
            style={{ backgroundColor: "white" }}
        >
            <h2
                className="text-xl font-bold mb-6"
                style={{ color: "#59554E" }}
            >
                Disponibilidad de Mesas
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {displayTables.map((table) => {
                    const config = statusConfig[table.status];
                    return (
                        <div
                            key={table.id}
                            className="p-4 rounded-lg border-2 transition-all hover:shadow-md cursor-pointer"
                            style={{
                                borderColor: config.color + "40",
                                backgroundColor: config.bg
                            }}
                        >
                            <div className="text-center">
                                <p
                                    className="text-2xl font-bold mb-1"
                                    style={{ color: "#59554E" }}
                                >
                                    Mesa {table.number}
                                </p>
                                <p
                                    className="text-xs mb-2 opacity-70"
                                    style={{ color: "#59554E" }}
                                >
                                    {table.capacity} personas
                                </p>
                                <span
                                    className="text-xs font-semibold px-2 py-1 rounded"
                                    style={{
                                        color: config.color,
                                        backgroundColor: "white"
                                    }}
                                >
                                    {config.label}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Summary */}
            <div className="mt-6 pt-4 border-t flex justify-around text-center">
                <div>
                    <p className="text-2xl font-bold" style={{ color: "#10b981" }}>
                        {displayTables.filter(t => t.status === "available").length}
                    </p>
                    <p className="text-xs opacity-70" style={{ color: "#59554E" }}>
                        Disponibles
                    </p>
                </div>
                <div>
                    <p className="text-2xl font-bold" style={{ color: "#ef4444" }}>
                        {displayTables.filter(t => t.status === "occupied").length}
                    </p>
                    <p className="text-xs opacity-70" style={{ color: "#59554E" }}>
                        Ocupadas
                    </p>
                </div>
                <div>
                    <p className="text-2xl font-bold" style={{ color: "#f59e0b" }}>
                        {displayTables.filter(t => t.status === "reserved").length}
                    </p>
                    <p className="text-xs opacity-70" style={{ color: "#59554E" }}>
                        Reservadas
                    </p>
                </div>
            </div>
        </div>
    );
}
