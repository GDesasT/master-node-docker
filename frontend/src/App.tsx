import { useEffect, useState } from 'react';
import { machineService } from './services/machine.service';
import type { Machine } from './types/machine.types';
import './App.css'; // ⬅️ ¡Aquí conectamos los estilos!

function App() {
  const [machines, setMachines] = useState<Machine[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    machineService.getAllMachines()
      .then(response => {
        setMachines(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ padding: '20px' }}>Cargando máquinas...</div>;
  if (error) return <div style={{ padding: '20px', color: 'red' }}>Error: {error}</div>;

  return (
    <div className="App">
      <h1>Estado de las Máquinas</h1>
      
      {/* Envolvemos la tabla en un contenedor para aplicar el diseño de tarjeta */}
      <div className="table-container">
        <table className="machine-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Área</th>
              <th>Estado</th>
              <th>Eficiencia (%)</th>
              <th>Inactividad (min)</th>
              <th>Producción (LM)</th>
            </tr>
          </thead>
          <tbody>
            {machines.map(machine => (
              <tr key={machine.id}>
                <td style={{ fontWeight: 'bold', color: '#64748b' }}>{machine.id}</td>
                <td style={{ fontWeight: '600' }}>{machine.name}</td>
                <td>
                  <span className="badge-area">{machine.area}</span>
                </td>
                <td>
                  {/* Aquí cambiamos la clase CSS dinámicamente según el estatus */}
                  <span className={`status-badge ${machine.status.toLowerCase()}`}>
                    {machine.status}
                  </span>
                </td>
                <td style={{ fontWeight: '600' }}>{machine.efficiency}%</td>
                <td>{machine.downtime} min</td>
                <td>{machine.output.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;