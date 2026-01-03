import './ResultadosBusqueda.css'
import TarjetaLibro from '../TarjetaLibro/TarjetaLibro'

import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { buscarPorTitulo } from '../../service/librosApi'

const ResultadosBusqueda = () => {

    const [searchParams] = useSearchParams()
    const [libros, setLibros] = useState([])
    const [loading, setLoading] = useState(true)

    const titulo = searchParams.get('titulo'); // lee ?titulo=...


    useEffect(() => {

        if(!titulo) return;

            // Creamos una función async dentro del useEffect
            const fetchLibros = async () => {
                try {
                    const data = await buscarPorTitulo(titulo) // Llamada al service
                    setLibros(data.docs || []) // Guardamos los libros en el estado
                } catch (error) {
                    console.error("Error al obtener libros:", error)
                } finally {
                    setLoading(false) // Ya terminó el fetch
                }
            }
    
            fetchLibros() // Llamamos a la función async
        }, [titulo]) // [] asegura que cada vez que el valor de titulo cambie; volverá a ejecutar el fetch y actualizará libros


        return (
        <div className="resultados">
            {loading ? (
                <p className="mensaje-cargando">Cargando...</p>
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
export default ResultadosBusqueda