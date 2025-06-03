import { useState, useEffect } from 'react';
import Formulario from './IngresoTarea';
import ListaTareas from './ListaTareas';
import Filtro from './FiltroTareas';
import './todo.css'

const Todo = () => {
  const [tareas, setTareas] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filtro, setFiltro] = useState('todas');

  useEffect(() => {
    const storedTareas = JSON.parse(localStorage.getItem('tareas')) || [];
    setTareas(storedTareas);
  }, []);

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const tareasFiltradas = tareas.filter(tarea => {
    if (filtro === 'completadas') return tarea.completada;
    if (filtro === 'incompletas') return !tarea.completada;
    return true; 
  });

  const eliminarCompletadas = () => {
    const nuevasTareas = tareas.filter(tarea => !tarea.completada);
    setTareas(nuevasTareas);
  };

  return (
    <div className="container">
      <h1 className="mb-4">To-Do List</h1>
      <Formulario 
        inputValue={inputValue}
        setInputValue={setInputValue}
        onAgregar={() => {
          if (inputValue.trim()) {
            setTareas([...tareas, { texto: inputValue, completada: false }]);
            setInputValue('');
          }
        }}
      />
      <Filtro filtro={filtro} setFiltro={setFiltro} />
      <button 
        onClick={eliminarCompletadas}
        className="btn btn-danger mb-3"
      >
        Eliminar completadas
      </button>
      <ListaTareas tareas={tareasFiltradas} setTareas={setTareas} />
    </div>
  );
};

export default Todo;