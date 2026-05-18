import { Request, Response } from 'express';
import type { Machine } from '../models/machine.model.js';

const machines: Machine[] = [
    { id: 1, name: 'Machine A', area: 'FF', status: 'RUNNING', efficiency: 85, downtime: 2, output: 100 },
    { id: 2, name: 'Machine B', area: 'OPW', status: 'STOPPED', efficiency: 0, downtime: 5, output: 0 },
    { id: 3, name: 'Machine C', area: 'FF', status: 'MAINTENANCE', efficiency: 0, downtime: 10, output: 0 },
];

export const getMachines = (req: Request, res: Response) => {
    res.json({
        success: true,
        count: machines.length,
        data: machines,
    });
};
