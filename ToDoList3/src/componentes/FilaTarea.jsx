import React, { useState } from "react";

// Cambiar {numero}, nombre y .completada porque sale de ningun lado

function FilaTarea( {tareas, setTareas} ) {
  const eliminarTarea=(indice)=> {
    const tareasRestantes= tareas.splice(indice, 1);
    setTareas(tareasRestantes)
  }
    return (
      <tr>
        <td>{numero}</td>
        <td style={{ textDecoration: tareas.completada ? "line-through" : "none" }}>{tareas.nombre}</td>
        <td>
          <input type="checkbox" checked={completada} readOnly />
        </td>
        <td>
          <button className="btn btn-danger btn-sm" onClick={()=>eliminarTarea(numero)}>X</button>
        </td>
      </tr>
    );
  }

  export default FilaTarea;