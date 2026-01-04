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
                    id: libro.key.replace("/works/", ""), // id limpio
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
