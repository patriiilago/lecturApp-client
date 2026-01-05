# LecturApp

LecturApp es una **Single Page Application (SPA)** desarrollada con **React**, diseñada para ayudar a los usuarios a buscar, organizar y gestionar su biblioteca personal de libros.

La aplicación se integra con la **Open Library API**, permitiendo buscar libros por título, autor o ISBN, y ofrece funcionalidades para gestionar el estado de lectura y la valoración de cada libro.

Este proyecto se centra en conceptos clave de desarrollo frontend como arquitectura de componentes, enrutado, gestión de estado y consumo de APIs externas.

---

## Descripción del Proyecto

LecturApp ofrece una experiencia fluida e intuitiva para amantes de la lectura, estructurada en tres flujos principales:

- **Descubrimiento:** Página de inicio y contenido destacado  
- **Búsqueda:** Consulta de libros mediante una API externa  
- **Gestión:** Organización de libros pendientes y leídos, con sistema de valoración  

Los datos del usuario se almacenan localmente mediante **LocalStorage**, lo que permite mantener el estado de la aplicación entre sesiones sin necesidad de un backend propio.

---

## Tecnologías Utilizadas (Frontend)

- React (v18)
- React Router v6
- JavaScript (ES6+)
- Fetch API
- HTML5
- CSS3 (Flexbox, Grid, Variables CSS)
- Open Library API

---

## Rutas del Frontend

| Ruta | Descripción |
|------|------------|
| `/` | Página de inicio |
| `/mi-lista` | Gestión de la biblioteca personal (pendientes, leídos y valoraciones) |
| `/biblioteca` | Listado de libros con acceso al detalle |
| `/libro/:id` | Página de detalle dinámica del libro |
| `/resultados` | Página de resultados de búsqueda |
| `/sobre-mi` | Información sobre la autora y el proyecto |
| `*` | 404 – Página no encontrada |

---

## Notas

- La aplicación consume datos de la **Open Library API**
- No se implementa autenticación de usuarios
- La persistencia de datos se gestiona mediante **LocalStorage**
- El proyecto está enfocado en el desarrollo frontend, el enrutado y el consumo de APIs

---

## Despliegue

**Cliente:**  
https://lecturapp.netlify.app/

---

## Autora

**Patricia Lago**  
GitHub: https://github.com/patriiilago  
LinkedIn: https://www.linkedin.com/in/patri-lago  
