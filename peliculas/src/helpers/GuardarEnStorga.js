export const GuardarEnStorage = (clave, elemento) => {
  // Conseguir los elementos que ya tenemos en el LS

  let elementos = JSON.parse(localStorage.getItem(clave));

  // Comprobar si es un array
  if (Array.isArray(elementos)) {
    elementos.push(elemento);
  } else {
    elementos = [elemento];
  }

  //Guardar en el LS

  localStorage.setItem(clave, JSON.stringify(elementos));

  //Devolver objeto guardado

  return elemento;
};
