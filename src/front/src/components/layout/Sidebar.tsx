import Link from 'next/link';

const menuItems = [
    { label: 'Overview', href: '/overview', icon: '📊' },
    { label: 'Analytics', href: '/analytics', icon: '📈' },
    { label: 'Reports', href: '/reports', icon: '📑' },
    { label: 'Settings', href: '/settings', icon: '⚙️' },
];

export default function Sidebar() {
    return (
        <aside className="hidden w-64 flex-col border-r border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50 lg:flex">
            <div className="flex flex-1 flex-col gap-4 p-4">
                <div className="px-2 py-2">
                    <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Menu
                    </h2>
                    <nav className="flex flex-col gap-1">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
                            >
                                <span>{item.icon}</span>
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="mt-auto rounded-xl bg-indigo-600 p-4 text-white">
                    <h3 className="font-semibold">Pro Plan</h3>
                    <p className="mt-1 text-xs text-indigo-100">
                        Upgrade for more features
                    </p>
                    <button className="mt-3 w-full rounded-lg bg-white/20 px-3 py-2 text-xs font-medium hover:bg-white/30 transition-colors">
                        Upgrade Now
                    </button>
                </div>
            </div>
        </aside>
    );
}
