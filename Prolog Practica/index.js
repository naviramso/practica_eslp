let session = pl.create();
session.consult("base_conocimiento.pl", {
  success: () => {
    console.log("conectado con la base de conocimiento");
  },
  error: (error) => {
    console.error("error" + error);
  },
});

// Realizar una consulta

function evento() {
    let query = "actor_pelicula('Robert De Niro', Y).";
    const sesion = session.query(query, {
      success: (goal) => {
        console.log(goal);
      },
      error: (err) => {
        console.error(err);
      },
    });
    
     session.answer({
      success: function (answer) {
        console.log(session.format_answer(answer)); 
        session.answer({
          success: function (answer) {
            console.log(session.format_answer(answer));
          },
          // ...
        });
      },
      fail: function () {
        /* No more answers */
      },
      error: function (err) {
        /* Uncaught exception */
      },
      limit: function () {
        /* Limit exceeded */
      },
    });
}

