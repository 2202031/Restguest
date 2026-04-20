import React from 'react';

export default function Card({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`card ${className || ''}`} style={{ border: '1px solid #eee', padding: '1rem', borderRadius: '8px' }}>
            {children}
        </div>
    );
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`card-content ${className || ''}`}>
            {children}
        </div>
    );
}
