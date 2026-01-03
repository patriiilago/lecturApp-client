import './TarjetaLibro.css'
import { useNavigate } from 'react-router-dom'

const TarjetaLibro = ({ id, portada, titulo, autores }) => {

    const navigate = useNavigate()

    return (
        <
            div className="tarjeta-libro"
            onClick={() => navigate(`/libro/${id}`)}
        >
            {portada ? (
                <
                img src={portada} alt={`Portada de ${titulo}`} className="tarjeta-libro__imagen" 
                />
            ) : (
                <div className="tarjeta-libro__placeholder">Sin imagen</div>
            )}

            <div className="tarjeta-libro__contenido">
                <h3 className="tarjeta-libro__titulo">{titulo}</h3>
                <p className="tarjeta-libro__autores">{autores?.join(', ')}</p>
            </div>
        </div>
    )

}

export default TarjetaLibro