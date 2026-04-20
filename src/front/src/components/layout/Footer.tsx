export default function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-white py-8 dark:border-gray-800 dark:bg-gray-950">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    © {new Date().getFullYear()} MyApp Inc. All rights reserved.
                </p>
                <div className="flex gap-6">
                    <a href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                        Privacy
                    </a>
                    <a href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                        Terms
                    </a>
                    <a href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
}
