import Sidebar from '@/components/sidebar/Sidebar';
import TopHeader from '@/components/layout/TopHeader';
import { TutorialProvider } from '@/context/TutorialContext';
import { RestaurantProvider } from '@/context/RestaurantContext';

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <TutorialProvider>
            <RestaurantProvider>
                <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F3F4E5' }}>
                <Sidebar />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <TopHeader />
                    <main style={{ flex: 1, padding: '2rem' }}>{children}</main>
                </div>
            </div>
            </RestaurantProvider>
        </TutorialProvider>
    );
}
