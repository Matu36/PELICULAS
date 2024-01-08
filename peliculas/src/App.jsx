import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div class="layout">
      <header class="header">
        <div class="logo">
          <div class="play"></div>
        </div>

        <h1>MisPelis</h1>
      </header>

      <nav class="nav">
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Peliculas</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>

      <section id="content" class="content">
        <article class="peli-item">
          <h3 class="title">Desarrollo web</h3>
          <p class="description">victorroblesweb.es</p>

          <button class="edit">Editar</button>
          <button class="delete">Borrar</button>
        </article>

        <article class="peli-item">
          <h3 class="title">Desarrollo web</h3>
          <p class="description">victorroblesweb.es</p>

          <button class="edit">Editar</button>
          <button class="delete">Borrar</button>
        </article>

        <article class="peli-item">
          <h3 class="title">Desarrollo web</h3>
          <p class="description">victorroblesweb.es</p>

          <button class="edit">Editar</button>
          <button class="delete">Borrar</button>
        </article>

        <article class="peli-item">
          <h3 class="title">Desarrollo web</h3>
          <p class="description">victorroblesweb.es</p>

          <button class="edit">Editar</button>
          <button class="delete">Borrar</button>
        </article>
      </section>

      <aside class="lateral">
        <div class="search">
          <h3 class="title">Buscador</h3>
          <form>
            <input type="text" id="search_field" />
            <button id="search">Buscar</button>
          </form>
        </div>

        <div class="add">
          <h3 class="title">Añadir pelicula</h3>
          <form>
            <input type="text" id="title" placeholder="Titulo" />
            <textarea id="description" placeholder="Descripción"></textarea>
            <input type="submit" id="save" value="Guardar" />
          </form>
        </div>
      </aside>

      <footer class="footer">
        &copy; Máster en React -{" "}
        <a href="https://victorroblesweb.es">victorroblesweb.es</a>
      </footer>
    </div>
  );
}

export default App;
