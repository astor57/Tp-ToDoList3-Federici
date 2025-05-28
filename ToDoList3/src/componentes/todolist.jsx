import React, { useState } from "react";
import Encabezado from "./Encabezado";
import IngresoTarea from "./IngresoTarea";
import FiltroTareas from "./FiltroTareas";
import ListaTareas from "./ListaTareas";
import TareaMasRapida from "./TareaMasRapida";
import BotonEliminarCompletadas from "./BotonEliminarCompletadas";
import FilaTarea from "./FilaTarea";
import './todo.css';

function TodoList() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("todas");

  const agregarTarea = (nombre) => {
    const nuevaTarea = {
      id: Date.now(),
      nombre,
      fecha: new Date().toLocaleString(),
      completada: false
    };
    setTareas([...tareas, nuevaTarea]);
  };

  const alternarTarea = (id) => {
    const nuevasTareas = tareas.map((t) =>
      t.id === id ? { ...t, completada: !t.completada } : t
    );
    setTareas(nuevasTareas);
  };

  const eliminarCompletadas = () => {
    const incompletas = tareas.filter((t) => !t.completada);
    setTareas(incompletas);
  };

  const tareasFiltradas = tareas.filter((t) => {
    if (filtro === "todas") return true;
    if (filtro === "completadas") return t.completada;
    if (filtro === "pendientes") return !t.completada;
    return true;
  });

  const tareaMasRapida = tareas.length
    ? tareas.reduce((min, actual) =>
        new Date(actual.fecha) < new Date(min.fecha) ? actual : min
      )
    : null;

  return (
    <div className="container">
      <Encabezado />
      <IngresoTarea agregarTarea={agregarTarea} />
      {tareas.map((tarea, i) => (
        <FilaTarea
          key={i}
          tarea={tarea}
          indice={i}
          setTareas={setTareas}
        />
      ))}

      <FiltroTareas filtroActual={filtro} setFiltro={setFiltro} />
      <ListaTareas tareas={tareasFiltradas} alternarTarea={alternarTarea} />
      <TareaMasRapida tarea={tareaMasRapida} />
      <BotonEliminarCompletadas eliminarCompletadas={eliminarCompletadas} />
    </div>
  );
}

export default TodoList;
