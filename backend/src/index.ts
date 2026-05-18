import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import machineRoutes from './routes/machine.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

app.use(cors({ origin: FRONTEND_URL }));
app.use(express.json());

app.use('/api/v1', machineRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor FF-Plant corriendo en http://localhost:${PORT}`);
});
