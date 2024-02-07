import React from "react";

export default function Editar({
  peli,
  conseguirPerliculas,
  setEditar,
  setListadoState,
}) {
  const titulo_componente = "Editar pelicula";

  const guardarEdicion = (e, id) => {
    e.preventDefault();

    let target = e.target;
    const pelis_almacenadas = conseguirPerliculas();
    const indice = pelis_almacenadas.findIndex((peli) => peli.id === id);

    let peli_actualiza = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value,
    };

    pelis_almacenadas[indice] = peli_actualiza;

    localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));
    setListadoState(pelis_almacenadas);
    setEditar(0);
  };
  return (
    <div className="edit_form">
      <h3 className="title"> {titulo_componente} </h3>
      <form onSubmit={(e) => guardarEdicion(e, peli.id)}>
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
