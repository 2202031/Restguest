import { useState } from 'react';

export function useAuth() {
    const [user, setUser] = useState(null);
    const login = () => { };
    const logout = () => { };
    return { user, login, logout };
}
