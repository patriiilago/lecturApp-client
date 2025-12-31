/*
obtenerBestSellers : search.json?q=bestseller&page=1

buscarPorTitulo() : search.json?q=titulo

filtrarPorAutor() : search.json?author=...

filtrarPorGenero()
*/


const API_BASE = `https://openlibrary.org/search.json?`

export const obtenerBestSellers = async () => {
    const res = await fetch(`${API_BASE}q=bestseller&page=1`)
    const data = await res.json()
    return data
}


export const buscarPorTitulo = async (tituloBusqueda) => {
    const res = await fetch(`${API_BASE}q=${encodeURIComponent(tituloBusqueda)}`)
    const data = await res.json()
    return data
}

