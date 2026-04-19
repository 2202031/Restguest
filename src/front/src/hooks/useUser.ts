import { useState, useEffect } from 'react';

export function useUser(id: string) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        // fetch user
    }, [id]);
    return { user };
}
