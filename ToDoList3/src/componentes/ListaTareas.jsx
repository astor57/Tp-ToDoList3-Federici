const ListaTareas = ({ tareas, setTareas }) => {
  const toggleCompletada = (index) => {
    const nuevasTareas = tareas.map((tarea, i) => 
      i === index ? { ...tarea, completada: !tarea.completada } : tarea
    );
    setTareas(nuevasTareas);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  return (
    <div className="mt-4">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Estado</th>
            <th>Tarea</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map((tarea, index) => (
            <tr key={index} className={tarea.completada ? 'table-success' : ''}>
              <td>
                <input
                  type="checkbox"
                  checked={tarea.completada}
                  onChange={() => toggleCompletada(index)}
                  className="form-check-input"
                />
              </td>
              <td className={tarea.completada ? 'text-decoration-line-through' : ''}>
                {tarea.texto}
              </td>
              <td>
                <button 
                  onClick={() => eliminarTarea(index)} 
                  className="btn btn-danger btn-sm"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaTareas;