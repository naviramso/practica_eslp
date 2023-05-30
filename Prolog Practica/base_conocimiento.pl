genero(comedia).
genero(accion).
genero(terror).
genero(drama).
genero(animacion).
genero(suspenso).
genero(fantasia).

actor('Robert De Niro').
actor('Johnny Deep').
actor('Jim Carrey').
actor('Al Pachino').

actor_pelicula('Robert De Niro', 'Taxi Driver').
actor_pelicula('Al Pachino', 'El padrino 2').
actor_pelicula('Robert De Niro', 'El padrino 2').
actor_pelicula('Johnny Deep', 'Joven Manos de Tijeras').
actor_pelicula('Johnny Deep', 'El barbero demoniaco').
actor_pelicula('Johnny Deep', 'Rango').
actor_pelicula('Jim Carrey', 'Eterno resplandor de una mente sin recuerdo').
actor_pelicula('Al Pachino', 'Jack y Jill').
actor_pelicula('Johnny Deep', 'El jinete sin cabeza').
actor_pelicula('Robert De Niro', 'Toro Salvaje').

pelicula_genero('Taxi Driver' , drama).
pelicula_genero('El padrino 2', drama).
pelicula_genero('Joven Manos de Tijeras', fantasia).
pelicula_genero('El barbero demoniaco', suspenso).
pelicula_genero('Rango', animacion).
pelicula_genero('Eterno resplando de una mente sin recuerdo', fantasia).
pelicula_genero('Jack y Jill', comedia).
pelicula_genero('El jinete sin cabeza', terror).
pelicula_genero('Toro Salvaje', accion).

actor_genero(X,Y,Z):- actor_pelicula(X,Y) , pelicula_genero(Y,Z).
