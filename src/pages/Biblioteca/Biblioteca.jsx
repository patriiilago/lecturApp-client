import { useState, useEffect } from "react"

import './Biblioteca.css'
import TarjetaLibro from "../../components/TarjetaLibro/TarjetaLibro"
import { obtenerBestSellers } from './../../service/servicioLibros'

const Biblioteca = () => {

    // Estado para los libros y para el loading
    const [libros, setLibros] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        // Creamos una función async dentro del useEffect
        const fetchLibros = async () => {
            try {
                const data = await obtenerBestSellers() // Llamada al service
                setLibros(data.docs || []) // Guardamos los libros en el estado
            } catch (error) {
                console.error("Error al obtener libros:", error)
            } finally {
                setLoading(false) // Ya terminó el fetch
            }
        }

        fetchLibros() // Llamamos a la función async
    }, []) // [] asegura que solo se llame al montar el componente


    return (
        <div className="biblioteca">
            {loading ? (
                <p className="mensaje-cargando">Cargando libros</p>
            ) : libros.length === 0 ? (
                <p className="mensaje-no-resultados">No se encontraron libros.</p>
            ) : (
                libros.map((libro) => (
                    <TarjetaLibro
                        key={libro.key}
                        titulo={libro.title}
                        autores={libro.author_name}
                        portada={
                            libro.cover_i
                                ? `https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg`
                                : null
                        }
                    />
                ))
            )}
        </div>
    )
}

export default Biblioteca;