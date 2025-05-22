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