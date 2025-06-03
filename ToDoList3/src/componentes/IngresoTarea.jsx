const Formulario = ({ inputValue, setInputValue, onAgregar }) => {
  return (
    <div className="d-flex mb-4">
      <input
        type="text"
        className="form-control me-2"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button 
        onClick={onAgregar} 
        className="btn btn-primary"
      >
        Agregar
      </button>
    </div>
  );
};


export default Formulario;