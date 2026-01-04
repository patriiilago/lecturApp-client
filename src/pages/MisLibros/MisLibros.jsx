import './MisLibros.css'
import { useContext, useState } from "react"
import { LibrosContext } from '../../context/LibrosContext'

const MisLibros = () => {

    const { listaLibros, removeLibro, cambiarEstado, valorarLibro } = useContext(LibrosContext)
    const [mensaje, setMensaje] = useState("")


    const handleRemove = (libro) => {
        removeLibro(libro.id)
        setMensaje(`${libro.title} ha sido eliminado de tu lista.`)

        // Borrar mensaje después de 2 segundos
        setTimeout(() => setMensaje(""), 2000)
    }

    const handleEstado = (libro, estado) => {
        cambiarEstado(libro.id, estado)
        setMensaje(`"${libro.title}" ahora está marcado como ${estado}.`)
        setTimeout(() => setMensaje(""), 2000)
    }

    const handleValoracion = (libro, estrellas) => {
        valorarLibro(libro.id, estrellas)
        setMensaje(`Has valorado "${libro.title}" con ${estrellas} estrella(s).`)
        setTimeout(() => setMensaje(""), 2000)
    }

    return (
        <>
            {mensaje && <p className="toast">{mensaje}</p>}
            <div className="mi-lista">
                <h1>Mis libros</h1>
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

                                {/* Botones para estado */}
                                <div className="estado-botones">
                                    <button
                                        className={libro.estado === 'pendiente' ? 'activo' : ''}
                                        onClick={() => handleEstado(libro, 'pendiente')}
                                    >
                                        Pendiente
                                    </button>
                                    <button
                                        className={libro.estado === 'leido' ? 'activo' : ''}
                                        onClick={() => handleEstado(libro, 'leido')}
                                    >
                                        Leído
                                    </button>
                                </div>

                                {/* Valoración */}
                                <div className="valoracion">
                                    {[1, 2, 3, 4, 5].map(n => (
                                        <span
                                            key={n}
                                            onClick={() => handleValoracion(libro, n)}
                                            style={{ cursor: 'pointer', color: n <= libro.valoracion ? 'gold' : 'gray' }}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </>
    )
}
export default MisLibros