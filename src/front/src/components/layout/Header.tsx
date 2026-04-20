import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600" />
                    <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        MyApp
                    </span>
                </div>

                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/dashboard" className="text-sm font-medium text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
                        Dashboard
                    </Link>
                    <Link href="/projects" className="text-sm font-medium text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
                        Projects
                    </Link>
                    <Link href="/team" className="text-sm font-medium text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
                        Team
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <button className="rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 transition-colors">
                        Get Started
                    </button>
                </div>
            </div>
        </header>
    );
}
