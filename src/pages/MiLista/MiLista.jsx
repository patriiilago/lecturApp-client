import './MiLista.css'
import { useContext, useState } from "react"
import { LibrosContext } from './../../context/LibrosContext'

const MiLista = () => {

    const { listaLibros, removeLibro } = useContext(LibrosContext)
    const [mensaje, setMensaje] = useState("")


    const handleRemove = (libro) => {
        removeLibro(libro.id)
        setMensaje(`${libro.title} ha sido eliminado de tu lista ❌`)

        // Borrar mensaje después de 2 segundos
        setTimeout(() => setMensaje(""), 2000)
    }

    return (
        <div className="mi-lista">
            <h1>Mis libros</h1>
            {mensaje && <p className="mensaje">{mensaje}</p>}
            {listaLibros.length === 0 ? (
                <p className="mensaje-no-resultados">No tienes libros en tu lista</p>
            ) : (
                    <div className="mi-lista-libros">
                        {listaLibros.map(libro => (
                            <div key={libro.id} className="card-libro">
                                <span className="cerrar" onClick={() => handleRemove(libro)}>×</span>

                                {libro.cover && (
                                    <img src={`https://covers.openlibrary.org/b/id/${libro.cover}-L.jpg`} alt={libro.title} />
                                )}

                                <h3>{libro.title}</h3>
                                {libro.authors && <p>{libro.authors.join(', ')}</p>}

                            </div>
                        ))}
                    </div>
            )}
        </div>
    )
}
export default MiLista