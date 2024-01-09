import React, { useState } from "react";

export default function Crear() {
  const titulo = "Añadir Película";
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
    console.log(peliState);
  };

  return (
    <div className="add">
      <h3 className="title">{titulo}</h3>
      {peliState.titulo}
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
