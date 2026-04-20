"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

type SubItem = {
    label: string;
    href: string;
};

type Props = {
    icon: React.ReactNode;
    label: string;
    subItems: SubItem[];
    href?: string;
};

export default function SidebarSection({ icon, label, subItems, href }: Props) {
    const pathname = usePathname();
    // Check if any sub-item is active or if the main section itself is active
    const isActive = href && pathname === href;
    const isAnyChildActive = subItems.some((item) => pathname === item.href) || isActive;
    
    // Auto-open if a child (or parent) is active initially
    const [isOpen, setIsOpen] = useState(isAnyChildActive);

    return (
        <div className="flex flex-col">
            <div
                className={`flex items-center justify-between w-full px-4 py-3 rounded-md transition
                ${isAnyChildActive ? "text-white font-semibold" : "text-white text-opacity-80 hover:bg-white hover:bg-opacity-10"}`}
            >
                {href ? (
                    <Link href={href} className="flex items-center gap-3 flex-1 cursor-pointer">
                        <div className="text-xl">{icon}</div>
                        <span>{label}</span>
                    </Link>
                ) : (
                    <div className="flex items-center gap-3 flex-1 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        <div className="text-xl">{icon}</div>
                        <span>{label}</span>
                    </div>
                )}
                
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-sm opacity-70 p-1 pl-3 cursor-pointer"
                >
                    {isOpen ? <FaChevronDown /> : <FaChevronRight />}
                </button>
            </div>
            
            {isOpen && (
                <div className="flex flex-col mt-1 mx-2 pl-6 border-l border-white border-opacity-20 gap-1">
                    {subItems.map((item, idx) => {
                        const isChildActive = pathname === item.href;
                        return (
                            <Link
                                key={idx}
                                href={item.href}
                                className={`px-4 py-2 rounded-md transition text-sm
                                ${isChildActive ? "bg-[#A1C1BE] text-white" : "text-white text-opacity-70 hover:text-opacity-100 hover:bg-white hover:bg-opacity-10"}`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}