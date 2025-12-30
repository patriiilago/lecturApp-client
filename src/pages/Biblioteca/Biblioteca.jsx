import { useState, useEffect } from "react"

import './Biblioteca.css'
import TarjetaLibro from "../../components/TarjetaLibro/TarjetaLibro"

const Biblioteca = () => {

    const [libros, setLibros] = useState([])
    const [loading, setLoading] = useState(true)

    const API = "https://openlibrary.org/search.json?q=bestseller&page=1";

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                    setLibros(data.docs);
                    setLoading(false);
            })
    }, [])


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