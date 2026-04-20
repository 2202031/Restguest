// components/sidebar/SidebarItem.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    icon: React.ReactNode;
    label: string;
    href: string;
};

export default function SidebarItem({ icon, label, href }: Props) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer transition
        ${isActive ? "bg-[#A1C1BE] text-white" : "text-white text-opacity-80 hover:bg-white hover:bg-opacity-10"}`}
        >
            <div className="text-xl">{icon}</div>
            <span>{label}</span>
        </Link>
    );
}
