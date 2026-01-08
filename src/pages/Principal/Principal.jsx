import './Principal.css'

import bgImage from '../../../src/assets/images/myreads-bg-home.webp'

const Principal = () => {

    return (
        <header className="principal">

            <img src={bgImage} alt="Fondo My Reads" className="principal__imagen" />

            <div className="principal__contenedor-titulo">
                <h1 className="principal__titulo">LecturApp</h1>
            </div>

        </header>
    )
}
export default Principal