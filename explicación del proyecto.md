# Explicacion del proyecto

## Arquitectura del projecte
- Frontend en Vue 3 con Vite.
- Enrutado con Vue Router y guard global para rutas privadas.
- Estado global con Pinia (usuario y token).
- Composables para peticiones HTTP: `useFetch` (peticiones HTTP de los items) y `useFetchPostUser` (Peticiones POST de registro y login).
- Vistas en `src/views` y componentes en `src/components`.

## Endpoints
- `POST /login` -> login de usuario.
- `POST /signup` -> registro de usuario.
- `GET /songs` -> listado de canciones.
- `GET /songs/show/:id` -> detalle de cancion.
- `POST /songs/songs` -> crear cancion.
- `PUT /songs/songs/:id` -> actualizar cancion.
- `DELETE /songs/songs/:id` -> eliminar cancion.
- `GET /movies` -> listado de peliculas.
- `GET /movies/show/:id` -> detalle de pelicula.
- `POST /movies/movies` -> crear pelicula.
- `PUT /movies/movies/:id` -> actualizar pelicula.
- `DELETE /movies/movies/:id` -> eliminar pelicula.

## Flux d’autenticacio
- El usuario se registra o inicia sesion en `/signup` o `/login`.
- El backend devuelve `token` y `user`.
- El store guarda `token` y `user` en `localStorage`.
- El router valida el token antes de entrar a rutas privadas.
- Si no hay token, redirige a `/sinAcceso`.
