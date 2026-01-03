# ✨ LecturApp

> **"Donde tus deseos literarios cobran vida."**

LecturApp es una aplicación web diseñada para reencantar la experiencia de buscar y organizar libros. A diferencia de las bases de datos tradicionales, Bookwish ofrece una interfaz inmersiva inspirada en una biblioteca mágica nocturna, donde los usuarios pueden gestionar su propio "grimorio" de lecturas.

Construida con **React** y alimentada por la API de **Open Library**.

## 📖 Descripción del Proyecto

El objetivo de esta aplicación es ofrecer un flujo de usuario fluido y visualmente atractivo para los amantes de la lectura. La aplicación maneja tres estados principales del usuario: **Inspiración** (Landing), **Búsqueda** (Invocación) y **Gestión** (Biblioteca Personal).

### Funcionalidades Principales (El "Hechizo")

* **🌌 Portada Inmersiva:** Una landing page diseñada para inspirar, con una estética de "polvo de hadas" y biblioteca antigua.
* **🔍 Buscador Mágico (API Integration):** Conexión en tiempo real con Open Library para buscar libros por título, autor o ISBN.
* **📚 Gestión de Estados:**
    * **Lista de Deseos (Pendientes):** Guarda los libros que sueñas leer.
    * **Grimorio de Leídos:** Marca tus libros completados y muévelos automáticamente de estantería.
    * **Persistencia:** (Opcional: Si usas LocalStorage menciónalo aquí) Tus libros se guardan en tu navegador.
* **✨ UI/UX Temática:** Diseño responsive con modo oscuro por defecto ("Azul Medianoche" y "Plata Brillante").

---

## 🛠️ Tecnologías Utilizadas

Este proyecto fue construido priorizando la modularidad y el uso de hooks modernos.

* **Frontend:** React (v18)
* **Enrutamiento:** React Router v6 (SPA)
* **Peticiones HTTP:** Fetch API (Nativo)
* **Estilos:** CSS3 Moderno (Grid, Flexbox, Variables CSS para la paleta de colores)
* **API Externa:** [Open Library API](https://openlibrary.org/developers/api)

---


## 🗺️ Estructura de Rutas

La navegación se gestiona a través de `react-router-dom`:

| Ruta | Componente | Función Mágica |
|------|------------|----------------|
| `/` | `Principal` | Portada de la app, bienvenida y enlaces principales. |
| `/mi-lista` | `MiLista` | Panel de gestión de tus libros: pendientes y leídos. |
| `/biblioteca` | `Biblioteca` | Muestra los libros disponibles (Best Sellers / colección general). |
| `/libro/:id` | `LibroDetalle` | Vista detallada del libro seleccionado, con portada, autores y descripción. |
| `/sobre-mi` | `SobreMi` | Información sobre el autor de la app o el proyecto. |
| `/resultados` | `ResultadosBusqueda` | Página que muestra los resultados de la búsqueda desde la API de Open Library. |
| `*` | `PaginaNoEncontrada` | Ruta comodín: muestra un mensaje cuando el usuario accede a una ruta inexistente. |

---

## 🔮 Roadmap y Mejoras Futuras

Este es un MVP (Producto Mínimo Viable). Las siguientes características están planeadas para futuras versiones:

* [ ] **Migración a Axios:** Para una gestión de intercelptores y errores más robusta.
* [ ] **Sistema de Calificación:** Añadir puntuación (1-5 estrellas) a los libros leídos.
* [ ] **Persistencia en la Nube:** Integración con Firebase/Supabase para guardar cuentas de usuario.
* [ ] **Notas de Lectura:** Permitir añadir reseñas personales en la ficha del libro.

---

**Desarrollado con 💙 y magia por Patri Lago**