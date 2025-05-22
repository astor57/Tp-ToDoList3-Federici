 function FiltroTareas() {
    return (
      <select className="form-select mb-3">
        <option value="todas">Todas</option>
        <option value="completadas">Completadas</option>
        <option value="pendientes">Pendientes</option>
      </select>
    );
  }

  export default FiltroTareas;