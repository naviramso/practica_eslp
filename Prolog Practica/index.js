// Crear una sesión de Tau Prolog

let session = pl.create();

let result = [];

let generos = [];
let actores = [];

const genres = [
  "drama",
  "accion",
  "aventura",
  "fantasia",
  "musical",
  "crimen",
  "horror",
  "comedia",
  "ciencia_ficcion",
];

const checkboxes = document.querySelector(".generos-container");

genres.forEach((genre) => {
  const section = document.createElement("section");
  const input = document.createElement("input");
  input.type = "checkbox";
  input.name = genre;
  input.id = genre;
  section.appendChild(input);

  const label = document.createElement("label");
  label.for = genre;
  label.textContent = genre;
  section.appendChild(label);

  checkboxes.appendChild(section);
  input.addEventListener("change", agregarGenero);
});

// Cargar la base de conocimientos
session.consult("base_conocimiento.pl", {
  success: () => {
    console.log("Conectado con la base de conocimiento");
    // Realizar la consulta después de cargar la base de conocimientos
  },
  error: (error) => {
    console.error("Error: " + error);
  },
});

// Función para realizar la consulta
function evento() {
  result = [];
  const s = document.getElementById("sugerenciasGeneradas");
  s.innerHTML = "";
  let query = `recomendar_peliculas(${convertirLista(
    generos
  )}, ${convertirLista2(actores)}, P).`;

  session.query(query, {
    success: function () {
      session.answer((x) => {
        // Obtener los resultados como cadena de texto
        let resultString = session.format_answer(x);
        let subString = resultString.substring(6, resultString.length - 2);
        // Convertir la cadena de texto a un array
        let resultArray = subString.split("),(");

        resultArray.map((item) => {
          let array = item.split(",");

          result.push(array);
        });
        // Mostrar el array de resultados

        pel();
        result = [];
      });
    },
    error: function (err) {
      console.error(err);
    },
  });
  result = [];
}
const pel = () => {
  const sugerencias = document.getElementById("sugerenciasGeneradas");
  result.forEach((genres) => {
    let query = `genero_actor('${genres[0]}', Y).`;
    console.log(query);
    session.query(query, {
      success: function () {
        session.answer((x) => {
          // Obtener los resultados como cadena de texto
          let resi = session.format_answer(x);
          let su = resi.substring(5, resi.length - 1);
          // Convertir la cadena de texto a un array
          let re = su.split(",");

          let acts = re.slice(1).join(", ");
          console.log(acts)

          const contenedor = document.createElement("seccion");
          contenedor.className = "sugerencias";
          const titulo = document.createElement("h3");
          titulo.textContent = genres[0];
          contenedor.appendChild(titulo);
          const cont = document.createElement("div");
          cont.className = "container-pe";
          contenedor.appendChild(cont);
          const imagen = document.createElement("img");
          imagen.className = "pelicula-img";
          imagen.src = `images/Pelis/${genres[genres.length - 1]}`;
          imagen.alt = genres[0];
          cont.appendChild(imagen);
          const container_text = document.createElement("div");
          container_text.className = "container-text";
          cont.appendChild(container_text);
          const descripcion = document.createElement("span");
          descripcion.className = "pelicula-descripcion";
          descripcion.textContent = genres[1];
          container_text.appendChild(descripcion);

          const gene = document.createElement("p");
          gene.className = "genero";
          gene.textContent = re[0];
          container_text.appendChild(gene);

          const actores = document.createElement("p");
          actores.className = "actores";
          actores.textContent = acts;
          container_text.appendChild(actores);

          sugerencias.appendChild(contenedor);
        });
      },
    });
  });
  result = [];
};

console.log(resultArray);

const eliminarDiv = () => {
  const sugerencias = document.getElementById("sugerenciasGeneradas");
  if (sugerencias) {
    sugerencias.innerHTML = "";
  }
};

function agregarGenero(event) {
  console.log(event.target.id);
  if (event.target.checked) {
    generos.push(event.target.id);
  } else {
    generos = generos.filter(function (item) {
      return item !== event.target.id;
    });
    // Realizar acciones adicionales cuando el checkbox está desmarcado
  }
  console.log(generos);
}

function agregarActor(event) {
  console.log(event);
  if (event.target.checked) {
    actores.push(event.target.id);
  } else {
    actores = actores.filter(function (item) {
      return item !== event.target.id;
    });
    // Realizar acciones adicionales cuando el checkbox está desmarcado
  }
  console.log(actores);
}

function convertirLista(lista) {
  return "[" + lista.join(", ") + "]";
}

function convertirLista2(lista) {
  return "['" + lista.join("', '") + "']";
}
