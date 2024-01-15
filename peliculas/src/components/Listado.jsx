import { useEffect, useState } from "react";
import React from "react";
import Editar from "./Editar";

export default function Listado({ listadoState, setListadoState }) {
  const [editar, setEditar] = useState(0);

  useEffect(() => {
    console.log("Componentes del listado de peliculas cargado!");
    conseguirPerliculas();
  }, []);

  const conseguirPerliculas = () => {
    let Peliculas = JSON.parse(localStorage.getItem("pelis"));
    setListadoState(Peliculas);
    return Peliculas;
  };

  const borrarPeli = (id) => {
    // Conseguir peliculas almacenadas

    let pelis_almacenadas = conseguirPerliculas();

    //Filtrar peliculas para que elimine las del array las que no quiero

    let nuevo_array_peliculas = pelis_almacenadas.filter(
      (peli) => peli.id !== parseInt(id)
    );

    //Actualizar estados del listado

    setListadoState(nuevo_array_peliculas);

    //Actualizar los datos en el localstorage

    localStorage.setItem("pelis", JSON.stringify(nuevo_array_peliculas));
  };

  return (
    <>
      {listadoState?.length > 0 ? (
        listadoState.map((peli) => (
          <article key={peli.id} className="peli-item">
            <h3 className="title">{peli.titulo}</h3>
            <p className="description">{peli.descripcion}</p>
            <button className="edit" onClick={() => setEditar(peli.id)}>
              Editar
            </button>
            <button className="delete" onClick={() => borrarPeli(peli.id)}>
              Borrar
            </button>
            {editar === peli.id && <Editar />}
          </article>
        ))
      ) : (
        <h2>No hay películas para mostrar</h2>
      )}
    </>
  );
}
