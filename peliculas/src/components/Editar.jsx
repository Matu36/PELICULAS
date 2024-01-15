import React from "react";

export default function Editar({ peli }) {
  const titulo_componente = "Editar pelicula";

  return (
    <div className="edit_form">
      <h3 className="title"> {titulo_componente} </h3>
      <form action="">
        <input
          type="text"
          name="titulo"
          className="titulo_editado"
          defaultValue={peli.titulo}
        />

        <textarea
          name="descripcion"
          defaultValue={peli.descripcion}
          className="descripcion_editada"
        />

        <input type="submit" className="editar" value="Actualizar" />
      </form>
    </div>
  );
}
