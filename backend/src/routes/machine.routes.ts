import { Router } from 'express';
import { getMachines } from '../controllers/machine.controller.js';

const router = Router();

// Ruta para obtener el estado de todas las máquinas
router.get('/machines', getMachines);

export default router;