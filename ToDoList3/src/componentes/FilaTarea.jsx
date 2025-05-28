import React, { useState } from "react";


function eliminarTarea(indice) {
  //en el array tareas elimina 1 elemento a partir de x posición (indice en este caso)
  tareas.splice(indice, 1);
  muestraTareas();
}
function FilaTarea({ numero, nombre, completada }) {
    return (
      <tr>
        <td>{numero}</td>
        <td style={{ textDecoration: completada ? "line-through" : "none" }}>{nombre}</td>
        <td>
          <input type="checkbox" checked={completada} readOnly />
        </td>
        <td>
          <button className="btn btn-danger btn-sm" onClick={()=>eliminarTAREA(numero)}>X</button>{/*Hacer la funcion eliminarTAREA */}
        </td>
      </tr>
    );
  }

  export default FilaTarea;