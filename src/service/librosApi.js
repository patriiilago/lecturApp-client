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

