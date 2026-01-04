import './PaginaNoEncontrada.css'
import libro from '../../assets/iconos/libro-perdido.png'

import { Link } from 'react-router-dom'

const PaginaNoEncontrada = () => {

    return (
        <div className="pagina-no-encontrada">
            <h1>404</h1>
            <p>¡Ups! No encontramos la página que buscabas.</p>
            <img src={libro} alt="Libro perdido" className="libro-volando" />
            <Link to="/biblioteca" className="btn-volver">
                Volver a la Biblioteca
            </Link>
        </div>
    )
}

export default PaginaNoEncontrada

