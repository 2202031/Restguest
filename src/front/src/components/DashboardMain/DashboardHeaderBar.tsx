"use client";

export default function DashboardHeaderBar() {
    return (
        <header
            className="w-full py-4 px-6 shadow-sm flex justify-between items-center"
            style={{ backgroundColor: "#FFFFFF" }}
        >
            <div>
                <h2
                    className="text-xl font-semibold"
                    style={{ color: "#59554E" }}
                >
                    Control
                </h2>
            </div>
        </header>
    );
}
