import './LibroDetalle.css'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { detalleLibro } from "../../service/servicioLibros"

const LibroDetalle = () => {

    const { id } = useParams()
    const [libro, setLibro] = useState(null)
    const [autores, setAutores] = useState([])

    useEffect(() => {

        const fetchLibro = async () => {
            const data = await detalleLibro(id)
            setLibro(data)

            // Obtener nombres de autores
            if (data.authors) {
                const autorPromises = data.authors.map(a =>
                    fetch(`https://openlibrary.org${a.author.key}.json`).then(res => res.json())
                )
                const autoresData = await Promise.all(autorPromises)
                setAutores(autoresData.map(a => a.name))
            }

        }
        fetchLibro()
    }, [id])



    if (!libro) return <p>Cargando...</p> // mientras carga


    return (

        <div className="libro-detalle">
            <h1>{libro.title}</h1>
            {libro.covers && libro.covers.length > 0 && (
                <img
                    src={`https://covers.openlibrary.org/b/id/${libro.covers[0]}-L.jpg`}
                    alt={libro.title}
                />
            )}
            {libro.description && (
                <p>
                    {typeof libro.description === 'string'
                        ? libro.description
                        : libro.description.value}
                </p>
            )}
            {autores.length > 0 && (
                <p>Autor(es): {autores.join(', ')}</p>
            )}
        </div>
    )
}

export default LibroDetalle