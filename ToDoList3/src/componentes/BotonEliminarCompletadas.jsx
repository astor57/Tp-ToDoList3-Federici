import React, { useState } from 'react';

function BotonEliminarCompletadas({tareas, setTareas}) {
  const eliminarTareasCompletadas=()=> {
    const tareasPendientes = tareas.filter(tareas => !tareas.completada);
    setTareas(tareasPendientes)
  }
    return (
      <button className="btn btn-secondary mt-2" onClick={eliminarTareasCompletadas}>
        Eliminar tareas completadas
      </button>
    );
  }

export default BotonEliminarCompletadas;