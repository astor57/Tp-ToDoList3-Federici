import React from "react";

function FilaTarea({ tarea, indice, setTareas }) {
  const eliminarTarea = () => {
    setTareas(prevTareas => prevTareas.filter((_, i) => i !== indice));
  };

  return (
    <tr>
      <td>{indice + 1}</td>
      <td style={{ textDecoration: tarea.completada ? "line-through" : "none" }}>
        {tarea.nombre}
      </td>
      <td>
        <input type="checkbox" checked={tarea.completada} readOnly />
      </td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={eliminarTarea}> X </button>
      </td>
    </tr>
  );
}

export default FilaTarea;
