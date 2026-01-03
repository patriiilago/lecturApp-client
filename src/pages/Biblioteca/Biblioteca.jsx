// import { useState, useEffect } from "react"

// import './Biblioteca.css'
// import TarjetaLibro from "../../components/TarjetaLibro/TarjetaLibro"
// import { obtenerBestSellers } from '../../service/librosApi'

// const Biblioteca = () => {

//     // Estado para los libros y para el loading
//     const [libros, setLibros] = useState([])
//     const [loading, setLoading] = useState(true)


//     useEffect(() => {
//         // Creamos una función async dentro del useEffect
//         const fetchLibros = async () => {
//             try {
//                 const data = await obtenerBestSellers() // Llamada al service
//                 setLibros(data.docs || []) // Guardamos los libros en el estado
//             } catch (error) {
//                 console.error("Error al obtener libros:", error)
//             } finally {
//                 setLoading(false) // Ya terminó el fetch
//             }
//         }

//         fetchLibros() // Llamamos a la función async
//     }, []) // [] asegura que solo se llame al montar el componente


//     return (
//         <div className="biblioteca">
//             {loading ? (
//                 <p className="mensaje-cargando">Cargando libros</p>
//             ) : libros.length === 0 ? (
//                 <p className="mensaje-no-resultados">No se encontraron libros.</p>
//             ) : (
//                 libros.map((libro) => (
//                     <TarjetaLibro
//                         key={libro.key}
//                         id={libro.key.replace("/works/", "")} // <--- este es el id
//                         titulo={libro.title}
//                         autores={libro.author_name}
//                         portada={
//                             libro.cover_i
//                                 ? `https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg`
//                                 : null
//                         }
//                     />
//                 ))
//             )}
//         </div>
//     )
// }

// export default Biblioteca

import { useState, useEffect } from "react"
import './Biblioteca.css'

import ListaLibros from "../../components/ListaLibros/ListaLibros"
import { obtenerBestSellers } from '../../service/librosApi'

const Biblioteca = () => {

    const [libros, setLibros] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchLibros = async () => {
            try {
                const data = await obtenerBestSellers()

                const librosFormateados = (data.docs || []).map(libro => ({
                    key: libro.key,
                    id: libro.key.replace("/works/", ""),
                    titulo: libro.title,
                    autores: libro.author_name,
                    portada: libro.cover_i
                        ? `https://covers.openlibrary.org/b/id/${libro.cover_i}-L.jpg`
                        : null
                }))

                setLibros(librosFormateados)

            } catch (error) {
                console.error("Error al obtener libros:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchLibros()
    }, [])

    return (
        <div className="biblioteca">
            <h1>Best Sellers</h1>
            {loading ? (
                <p className="mensaje-cargando">Cargando libros</p>
            ) : (
                 <div  className="libros-grid">
                <ListaLibros libros={libros} />
                </div>
            )}
        </div>
    )
}

export default Biblioteca
