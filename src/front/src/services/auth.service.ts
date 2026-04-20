import { http } from './http';

export const authService = {
    login: (data: any) => http('/api/auth/login', { method: 'POST', body: JSON.stringify(data) }),
    register: (data: any) => http('/api/auth/register', { method: 'POST', body: JSON.stringify(data) }),
};
