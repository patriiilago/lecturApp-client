# ✨ LecturApp

> **"Donde tus deseos literarios cobran vida."**

LecturApp es una aplicación web pensada para mejorar la experiencia de búsqueda y gestión de libros. A diferencia de las bases de datos tradicionales, ofrece una interfaz inmersiva inspirada en una biblioteca mágica nocturna, donde los usuarios pueden organizar su propio “grimorio” de lecturas.

Construida con **React** y alimentada por la **Open Library API**.

---

## 📖 Descripción del Proyecto

El objetivo de LecturApp es ofrecer un flujo fluido y atractivo para amantes de la lectura. La aplicación maneja tres estados principales del usuario:  

1. **Inspiración** – Página de bienvenida (Landing).  
2. **Búsqueda** – Encontrar libros por título, autor o ISBN.  
3. **Gestión** – Organizar la biblioteca personal con libros pendientes y leídos, además de valorar tus lecturas.

### Funcionalidades Clave

* **🌌 Portada Inmersiva:** Landing page inspiradora con estética de biblioteca antigua y elementos mágicos.  
* **🔍 Buscador en Tiempo Real:** Integración con Open Library para buscar libros por distintos criterios.  
* **📚 Gestión de Libros:**
  * **Lista de Deseos (Pendientes):** Guarda libros que deseas leer.  
  * **Grimorio de Leídos:** Marca libros como leídos y cambia su estado visualmente.  
  * **Valoración:** Puedes valorar cada libro con hasta 5 estrellas.  
  * **Persistencia Automática:** Todos los cambios se guardan en LocalStorage.  
* **✨ UI/UX Moderna y Temática:** Diseño responsive con modo oscuro por defecto, animaciones suaves y toasts informativos.

---

## 🛠️ Tecnologías Utilizadas

* **Frontend:** React (v18) con hooks modernos.  
* **Routing:** React Router v6 (SPA).  
* **Peticiones HTTP:** Fetch API.  
* **Estilos:** CSS3 moderno (Grid, Flexbox, Variables CSS para paleta de colores).  
* **API:** [Open Library API](https://openlibrary.org/developers/api).  

---

## 🗺️ Estructura de Rutas

| Ruta | Componente | Descripción |
|------|------------|------------|
| `/` | `Principal` | Landing page con bienvenida y enlaces principales. |
| `/mi-lista` | `MisLibros` | Gestión de libros: mostrar lista, cambiar estado (pendiente/leído), valorar y eliminar. |
| `/biblioteca` | `Biblioteca` | Lista de libros disponibles (Best Sellers) con enlace a detalle. |
| `/libro/:id` | `LibroDetalle` | Página de detalle del libro. Reutilizable desde Biblioteca y Resultados de Búsqueda, carga toda la info según `id`. |
| `/resultados` | `ResultadosBusqueda` | Página que muestra resultados de la búsqueda desde Open Library. |
| `/sobre-mi` | `SobreMi` | Información sobre la autora y el proyecto. |
| `*` | `PaginaNoEncontrada` | Ruta comodín para URLs inexistentes. |

---

## 🔮 Roadmap y Mejoras Futuras

* [ ] **Migración a Axios:** Gestión de peticiones más robusta.  
* [ ] **Persistencia en la nube:** Integración con Firebase/Supabase para guardar datos de usuario.  
* [ ] **Notas de Lectura:** Permitir añadir reseñas personales por libro.  
* [ ] **Sistema de calificación avanzado:** Gráficos y métricas de tus lecturas.  

---

**Desarrollado con 💙 y magia por Patri Lago**
