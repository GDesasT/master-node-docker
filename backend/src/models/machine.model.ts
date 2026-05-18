export interface Machine {
    id: number;
    name: string;
    area: 'FF' | 'OPW';
    status: 'RUNNING' | 'STOPPED' | 'MAINTENANCE';
    efficiency: number; 
    downtime: number; 
    output: number; 
}