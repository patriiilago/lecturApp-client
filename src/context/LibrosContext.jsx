import { createContext, useState } from "react"

/*
  1. Creamos el Context (la “caja” donde guardaremos la info)
*/
export const LibrosContext = createContext()

/*
  2. Creamos el Provider (el que distribuye la información a los componentes)
*/
export const LibrosProvider = ({ children }) => {

  /*
    3. Estado global de libros.
       Lo inicializamos leyendo localStorage para que persista al recargar.
  */
  const [listaLibros, setListaLibros] = useState(() => {
    return JSON.parse(localStorage.getItem("listaLibros")) || [];
  })

  /*
    4. Función para añadir un libro a la lista
  */
  const addLibro = (libro) => {
    const nuevaLista = [...listaLibros, libro]
    setListaLibros(nuevaLista)
    localStorage.setItem("listaLibros", JSON.stringify(nuevaLista))
  }

  /*
    5. Función para eliminar un libro de la lista
  */
  const removeLibro = (id) => {
    const nuevaLista = listaLibros.filter(libro => libro.id !== id)
    setListaLibros(nuevaLista)
    localStorage.setItem("listaLibros", JSON.stringify(nuevaLista))
  }

  /*
    6. Provider expone datos y funciones para que los consuman otros componentes
  */
  return (
    <LibrosContext.Provider value={{
      listaLibros,
      addLibro,
      removeLibro
    }}>
      {children}
    </LibrosContext.Provider>
  )
}