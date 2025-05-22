import FilaTarea from "./FilaTarea";

function ListaTareas() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Tarea</th>
          <th>Completada</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <FilaTarea numero={1} nombre="Estudiar" completada={false} />
        <FilaTarea numero={2} nombre="Comer" completada={true} />
      </tbody>
    </table>
  );
}

export default ListaTareas;