/*
obtenerBestSellers : search.json?q=bestseller&page=1

buscarPorTitulo() : search.json?q=titulo

filtrarPorAutor() : search.json?author=...

filtrarPorGenero()
*/


// const API_BASE = `https://openlibrary.org/search.json?`

// export const obtenerBestSellers = async () => {
//     const res = await fetch(`${API_BASE}q=bestseller&page=1`)
//     const data = await res.json()
//     return data
// }


// export const buscarPorTitulo = async (tituloBusqueda) => {
//     const res = await fetch(`${API_BASE}q=${encodeURIComponent(tituloBusqueda)}`)
//     const data = await res.json()
//     return data
// }

// export const detallesLibro = async () => {
//     const res = await fetch(`https://openlibrary.org/works/${id}.json`)
//     const data = await res.json()
//     return data
// }

const SEARCH_API = "https://openlibrary.org/search.json"
const WORKS_API = "https://openlibrary.org/works"

export const obtenerBestSellers = async () => {
  const res = await fetch(`${SEARCH_API}?q=bestseller&page=1`)
  return res.json()
}

export const buscarPorTitulo = async (titulo) => {
  const res = await fetch(
    `${SEARCH_API}?q=${encodeURIComponent(titulo)}`)
  return res.json()
}

export const detalleLibro = async (id) => {
  const res = await fetch(`${WORKS_API}/${id}.json`)
  return res.json()
}

