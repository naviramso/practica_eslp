// Crear una sesión de Tau Prolog

let session = pl.create();

let resultArray = [];

// Cargar la base de conocimientos
session.consult("base_conocimiento.pl", {
  success: () => {
    console.log("Conectado con la base de conocimiento");
    // Realizar la consulta después de cargar la base de conocimientos
    evento();
  },
  error: (error) => {
    console.error("Error: " + error);
  },
});

// Función para realizar la consulta
function evento() {
  session.query("recomendar_peliculas([drama, ciencia_ficcion] , ['Will Smith'], P).", {
    success: function () {
      session.answer(x => {
        // Obtener los resultados como cadena de texto
        let resultString = session.format_answer(x);
        let subString = resultString.substring(6, resultString.length - 3);
        // Convertir la cadena de texto a un array
        resultArray = subString.split("),(");
      
        // Mostrar el array de resultados
        console.log(resultArray)  
        
      });
    },
    error: function (err) {
      console.error(err);
    },
  });}

  console.log(resultArray);

  const genres = [
    "Drama",
    "Acción",
    "Aventura",
    "Fantasía",
    "Musical",
    "Crimen",
    "Horror",
    "Comedia",
    "Comedia-drama",
    "Ciencia ficción",
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
  });
  


  