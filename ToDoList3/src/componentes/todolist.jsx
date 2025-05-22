import React from "react";
import Encabezado from "./Encabezado";
import Formulario from "./Formulario";
import FiltroTareas from "./FiltroTareas";
import ListaTareas from "./ListaTareas";
import TareaMasRapida from "./TareaMasRapida";
import BotonEliminarCompletadas from "./BotonEliminarCompletadas";
import './todo.css'


function todolist() {
    return (
      <div className="container">
        <Encabezado />
        <Formulario />
        <FiltroTareas />
        <ListaTareas />
        <TareaMasRapida />
        <BotonEliminarCompletadas />
      </div>
    );
  }

  export default todolist;