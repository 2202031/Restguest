import { http } from './http';

export const usersService = {
    getAll: () => http('/api/users', { method: 'GET' }),
    getById: (id: string) => http(\`/api/users/\${id}\`, { method: 'GET' }),
};
