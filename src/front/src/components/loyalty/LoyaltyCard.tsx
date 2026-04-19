import Link from "next/link";
import { ReactNode } from "react";

export interface LoyaltyCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    href: string;
}

export default function LoyaltyCard({
    title,
    description,
    icon,
    href,
}: LoyaltyCardProps) {
    return (
        <div className="bg-[#EBECE7] rounded-3xl p-8 flex flex-col justify-between shadow-sm min-h-[320px]">
            {/* Header: Icon + Title */}
            <div>
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-[3.5rem] h-[3.5rem] shrink-0 rounded-full bg-[#A1C1BE] text-[#3c5756] flex items-center justify-center">
                        {icon}
                    </div>
                    <h3 className="text-[1.65rem] leading-tight font-bold text-[#4A4A48]">
                        {title}
                    </h3>
                </div>

                {/* Description */}
                <p className="text-[15px] font-medium text-[#767676] leading-[1.6] w-[95%]">
                    {description}
                </p>
            </div>

            {/* Action Button */}
            <div className="w-full mt-8">
                <Link
                    href={href}
                    className="block w-full text-center bg-[#A1C1BE] hover:bg-[#8daead] text-white py-3 rounded-md font-semibold transition-colors"
                >
                    Ver Detalles
                </Link>
            </div>
        </div>
    );
}
