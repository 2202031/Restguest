"use client";

import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const data = {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    datasets: [
        {
            label: 'Ventas ($)',
            data: [1200, 1900, 1500, 2200, 2800, 3200, 2400],
            borderColor: '#59554E',
            backgroundColor: 'rgba(89, 85, 78, 0.1)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#59554E',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 7,
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            backgroundColor: '#59554E',
            padding: 12,
            titleColor: '#F3F4E5',
            bodyColor: '#F3F4E5',
            borderColor: '#F3F4E5',
            borderWidth: 1,
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: 'rgba(89, 85, 78, 0.1)',
            },
            ticks: {
                color: '#59554E',
                callback: function (value: any) {
                    return '$' + value;
                }
            },
        },
        x: {
            grid: {
                display: false,
            },
            ticks: {
                color: '#59554E',
            },
        },
    },
};

export default function SalesChart({ isEmpty = false }: { isEmpty?: boolean }) {
    if (isEmpty) {
        return (
            <div className="p-6 rounded-xl shadow-md bg-white border border-dashed border-gray-300 flex flex-col items-center justify-center text-center" style={{ height: '390px' }}>
                <div className="w-16 h-16 bg-[#F8F9FA] rounded-full flex items-center justify-center mb-4 text-[#2E5E60] border border-gray-100 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">Aún no hay ventas</h2>
                <p className="text-gray-500 max-w-xs mb-6 text-sm">Aquí verás tus ventas una vez que cobres tu primera mesa. ¡Agrega tu primera orden para comenzar!</p>
            </div>
        );
    }

    return (
        <div
            className="p-6 rounded-xl shadow-md"
            style={{ backgroundColor: "white" }}
        >
            <div className="flex justify-between items-center mb-6">
                <h2
                    className="text-xl font-bold"
                    style={{ color: "#59554E" }}
                >
                    Ventas de la Semana
                </h2>
                <span
                    className="text-sm font-semibold px-3 py-1 rounded-lg"
                    style={{
                        backgroundColor: "#F3F4E5",
                        color: "#59554E"
                    }}
                >
                    Total: $15,200
                </span>
            </div>

            <div style={{ height: '300px' }}>
                <Line data={data} options={options} />
            </div>
        </div>
    );
}
