import { useState } from "react";
import React from "react";

export default function Buscador({ listadoState, setListadoState }) {
  const [busqueda, setBusqueda] = useState("");
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPeli = (e) => {
    //Crear estado y actualizarlo

    setBusqueda(e.target.value);

    //Listado completo de peliculas

    //Filtrar para buscar coincidencias

    let pelis_encontradas = listadoState.filter((peli) => {
      return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
    });
    //Comprobar si hay un resultado

    if (busqueda.length <= 1 || pelis_encontradas <= 0) {
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
      setNoEncontrado(true);
    } else {
      setNoEncontrado(false);
    }

    //Dar valor de todo en LocalStorage
    setListadoState(pelis_encontradas);
    //Actualizar estado del listado principal con lo que he logrado filtrar
  };

  return (
    <div className="search">
      <h3 className="title">Buscador: {busqueda}</h3>
      {noEncontrado == true && busqueda.length > 1 && (
        <span className="noEncontrado">
          No se ha encontrado ninguna coincidencia
        </span>
      )}
      <form>
        <input
          type="text"
          id="search_field"
          name="busqueda"
          autoComplete="off"
          onChange={buscarPeli}
        />
        <button id="search">Buscar</button>
      </form>
    </div>
  );
}
