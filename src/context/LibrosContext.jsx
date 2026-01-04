import { createContext, useState, useEffect } from "react"

// Creamos el Context (la “caja” donde guardaremos la info)

export const LibrosContext = createContext()

// Creamos el Provider (el que distribuye la información a los componentes)
export const LibrosProvider = ({ children }) => {

  const [listaLibros, setListaLibros] = useState(() => {
    return JSON.parse(localStorage.getItem("listaLibros")) || []
  })

  // Guardar automáticamente en localStorage cada vez que listaLibros cambie
  useEffect(() => {
    localStorage.setItem("listaLibros", JSON.stringify(listaLibros))
  }, [listaLibros])

  // Añadir libro (con estado y valoración por defecto)
  const addLibro = (libro, callback) => {
    const existe = listaLibros.some(item => item.id === libro.id)
    if (!existe) {
      const libroConExtras = {
        ...libro,
        estado: 'pendiente', // pendiente o leido
        valoracion: 0,       // 0 a 5
      }
      const nuevaLista = [...listaLibros, libroConExtras]
      setListaLibros(nuevaLista)
      if (callback) callback(`${libro.title} ha sido añadido a tus libros.`)
    } else {
      if (callback) callback(`${libro.title} ya está en tus libros.`)
    }
  }


  // Eliminar libro
  const removeLibro = (id) => {
    setListaLibros(prev => prev.filter(libro => libro.id !== id))
  }

  // Cambiar estado: pendiente o leído
  const cambiarEstado = (id, nuevoEstado) => {
    setListaLibros(prev =>
      prev.map(libro =>
        libro.id === id ? { ...libro, estado: nuevoEstado } : libro
      )
    )
  }

  // Valorar libro: estrellas de 1 a 5
  const valorarLibro = (id, estrellas) => {
    setListaLibros(prev =>
      prev.map(libro =>
        libro.id === id ? { ...libro, valoracion: estrellas } : libro
      )
    )
  }

  return (
    <LibrosContext.Provider value={{
      listaLibros,
      addLibro,
      removeLibro,
      cambiarEstado,
      valorarLibro
    }}>
      {children}
    </LibrosContext.Provider>
  )
}