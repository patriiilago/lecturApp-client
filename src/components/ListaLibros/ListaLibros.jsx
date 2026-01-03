import './ListaLibros.css'
import TarjetaLibro from '../TarjetaLibro/TarjetaLibro'

const ListaLibros = ({ libros }) => {

    if (!libros || libros.length === 0) {
        return (
            <p className="mensaje-no-resultados">
                No se encontraron libros.
            </p>
        )
    }

    return (
        <div className="lista-libros">
            {libros.map((libro) => (
                <TarjetaLibro
                    key={libro.key}
                    id={libro.id}
                    titulo={libro.titulo}
                    autores={libro.autores}
                    portada={libro.portada}
                />
            ))}
        </div>
    )
}

export default ListaLibros
