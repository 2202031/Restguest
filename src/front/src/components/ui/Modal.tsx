import React from 'react';

export default function Modal({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) {
    if (!isOpen) return null;
    return (
        <div className="modal-overlay" style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="modal-content" style={{ background: 'white', padding: '2rem', borderRadius: '8px' }}>
                <button onClick={onClose} style={{ float: 'right' }}>X</button>
                {children}
            </div>
        </div>
    );
}
