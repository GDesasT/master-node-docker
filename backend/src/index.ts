import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/v1/health', (req, res) => {
    res.json({
        status: 'up',
        timestamp: new Date().toISOString(),
        architecture: process.arch
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor de Ingeniería corriendo en http://localhost:${PORT}`);
});
