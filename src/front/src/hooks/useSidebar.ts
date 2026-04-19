import { useState } from 'react';

export function useSidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    return { isOpen, toggle };
}
