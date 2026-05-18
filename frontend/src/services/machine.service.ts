import type { APIResponse } from '../types/machine.types.ts';

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000/api/v1';

export const machineService = {
    getAllMachines: async (): Promise<APIResponse> => {
        const response = await fetch(`${API_URL}/machines`);
        if (!response.ok) {
            throw new Error('Error al obtener las máquinas');
        }
        return response.json();
    }
};
