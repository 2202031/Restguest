export interface ChartDataPoint {
    label: string | string[];
    value: number;
}

export interface CustomBarChartProps {
    data: ChartDataPoint[];
}

export default function CustomBarChart({ data }: CustomBarChartProps) {
    // Find highest value to scale bars relative to 100% of container
    const maxValue = Math.max(...data.map(d => d.value));
    
    // Fallback to prevent divide by zero
    const safeMaxValue = maxValue === 0 ? 1 : maxValue;

    return (
        <div className="bg-[#DEE1E0] rounded-[200px] w-full max-w-[850px] mx-auto py-16 px-12 overflow-x-auto my-10 shadow-sm">
            <div className="flex items-end justify-center w-full min-w-max h-[260px] gap-8 md:gap-14 mx-auto pb-4">
                {data.map((item, index) => {
                    const heightPercent = Math.round((item.value / safeMaxValue) * 100);
                    // Alternating colors starting with dark green (#3C6E68) then light (#A1C1BE / #9AB4B1)
                    const isDark = index % 2 === 0;

                    return (
                        <div key={index} className="flex flex-col items-center h-full justify-end">
                            {/* Bar stick */}
                            <div 
                                className={`w-[70px] rounded-[2px] mb-4 shadow-sm transition-all duration-500 ease-out ${
                                    isDark ? "bg-[#3C6E68]" : "bg-[#9AB4B1]"
                                }`}
                                style={{ height: `${heightPercent}%` }}
                                title={`${item.value}`}
                            ></div>
                            
                            {/* Label */}
                            <div className="text-[10px] md:text-[11px] font-medium text-[#4A4A48] text-center w-[75px] leading-tight tracking-wider">
                                {Array.isArray(item.label) ? (
                                    item.label.map((line, i) => (
                                        <span key={i} className="block">{line}</span>
                                    ))
                                ) : (
                                    <span>{item.label}</span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
