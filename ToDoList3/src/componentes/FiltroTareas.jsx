const FiltroTareas = ({ filtro, setFiltro }) => {
  return (
    <select 
      value={filtro}
      onChange={(e) => setFiltro(e.target.value)}
      className="form-select mb-3"
    >
      <option value="todas">Todas</option>
      <option value="completadas">Completadas</option>
      <option value="incompletas">Incompletas</option>
    </select>
  );
};

export default FiltroTareas;