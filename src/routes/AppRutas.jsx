import { Routes, Route } from 'react-router-dom'
import Principal from '../pages/Principal/Principal'
import MisLibros from '../pages/MisLibros/MisLibros'
import Biblioteca from '../pages/Biblioteca/Biblioteca'
import SobreMi from '../pages/SobreMi/SobreMi'
import ResultadosBusqueda from '../components/ResultadosBusqueda/ResultadosBusqueda'
import LibroDetalle from "../pages/LibroDetalle/LibroDetalle.jsx"
import PaginaNoEncontrada from '../pages/PaginaNoEncontrada/PaginaNoEncontrada.jsx'

function AppRutas() {

    return (
        <Routes>
            
            <Route path="/" element={<Principal />} />
            <Route path="/mis-libros" element={<MisLibros />} />
            <Route path="/biblioteca" element={<Biblioteca />} />
            <Route path="/libro/:id" element={<LibroDetalle />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/resultados" element={<ResultadosBusqueda />} />

            {/* Ruta comodín para páginas no encontradas */}
            <Route path="*" element={<PaginaNoEncontrada />} />

        </Routes>
    )
}

export default AppRutas