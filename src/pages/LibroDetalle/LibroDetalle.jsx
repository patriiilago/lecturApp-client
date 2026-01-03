import './LibroDetalle.css'
import { useParams } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import { detalleLibro } from "../../service/librosApi"
import { LibrosContext } from '../../context/LibrosContext'

const LibroDetalle = () => {

    const { id } = useParams()
    const { addLibro } = useContext(LibrosContext)

    const [libro, setLibro] = useState(null)
    const [autores, setAutores] = useState([])

    const [mensaje, setMensaje] = useState("")

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

    const handleAddToList = () => {
        addLibro({
            id,
            title: libro.title,
            cover: libro.covers ? libro.covers[0] : null,
            description: libro.description,
            authors: autores
        })

        setMensaje(`${libro.title} ha sido añadido a tu lista ✅`)

        // Borrar mensaje después de 2 segundos
        setTimeout(() => setMensaje(""), 2000)

    }

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

            {mensaje && <p className="mensaje">{mensaje}</p>}
            
            <button className='btn-anhadir' onClick={handleAddToList}>
                Añadir a mi lista
            </button>

        </div>
    )
}

export default LibroDetalle