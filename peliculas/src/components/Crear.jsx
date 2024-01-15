import React, { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorga";

export default function Crear({ setListadoState }) {
  const tituloComponente = "Añadir Película";
  const [peliState, setPeliState] = useState({
    titulo: "",
    descripcion: "",
  });

  const conseguirDatosForm = (e) => {
    e.preventDefault();
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion,
    };

    setPeliState(peli);

    // Actualizar el estado del listado general

    setListadoState((elementos) => {
      return [peli, ...elementos];
    });

    GuardarEnStorage("pelis", peli);
  };

  const { titulo, descripcion } = peliState;

  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>
      <strong>
        {titulo && descripcion && "Has creado la película: " + titulo}
      </strong>
      <form onSubmit={conseguirDatosForm}>
        <input type="text" id="titulo" placeholder="Titulo" name="titulo" />
        <textarea
          id="Descripción"
          placeholder="Descripción"
          name="descripcion"
        ></textarea>
        <input type="submit" id="save" value="Guardar" />
      </form>
    </div>
  );
}
