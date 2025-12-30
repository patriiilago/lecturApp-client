import './TarjetaLibro.css'

const TarjetaLibro = ({ portada, titulo, autores }) => {

    return (
        <div className="tarjeta-libro">
            {portada ? (
                <img src={portada} alt={`Portada de ${titulo}`} className="tarjeta-libro__imagen" />
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