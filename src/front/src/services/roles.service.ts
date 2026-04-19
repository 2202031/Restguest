import { http } from './http';

export const rolesService = {
    getAll: () => http('/api/roles', { method: 'GET' }),
};
