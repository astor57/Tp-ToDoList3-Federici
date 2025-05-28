import React, { useState } from 'react';
import './IngresoTarea.css';

function IngresoTarea({ agregarTarea }) {
  const [tarea, setTarea] = useState('');

  const subirTarea = (e) => {
    e.preventDefault();
    if (tarea.trim() === '') return;

    const fecha = new Date().toLocaleString(); 

    agregarTarea({ tarea });

    setTarea('');
  };

  return (
    <div className="ingreso-tarea">
      <h2>Agregar nueva tarea</h2>
      <form onSubmit={subirTarea}>
        <input
          type="text"
          placeholder="Nombre de la tarea"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default IngresoTarea;
