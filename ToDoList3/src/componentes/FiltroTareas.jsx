import React from 'react';
import './FiltroTareas.css';

function FiltroTareas({ filtroActual, setFiltro }) {
  const filtrar = (e) => {
    setFiltro(e.target.value);
  };

  return (
    <div className="filtro-tareas">
      <label htmlFor="filtro">Filtrar tareas:</label>
      <select id="filtro" value={filtroActual} onChange={filtrar}>
        <option value="todas">Todas</option>
        <option value="completadas">Completadas</option>
        <option value="pendientes">Pendientes</option>
      </select>
    </div>
  );
}

export default FiltroTareas;
