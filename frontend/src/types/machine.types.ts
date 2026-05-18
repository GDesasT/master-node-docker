export interface Machine {
    id: number;
    name: string;
    area: 'FF' | 'OPW';
    status: 'RUNNING' | 'STOPPED' | 'MAINTENANCE';
    efficiency: number; // Porcentaje de eficiencia (0-100)
    downtime: number; // Tiempo de inactividad en minutos
    output: number; // Producción actual en unidades por hora
}

export interface APIResponse{
    success: boolean;
    count: number;
    data: Machine[];
}