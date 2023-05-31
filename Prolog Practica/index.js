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
  session.query("recomendar_peliculas([drama] , ['Al Pacino'], P).", {
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