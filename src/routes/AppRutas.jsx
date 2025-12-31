import { Routes, Route } from 'react-router-dom'
import Principal from '../pages/Principal/Principal'
import MiLista from '../pages/MiLista/MiLista'
import Biblioteca from '../pages/Biblioteca/Biblioteca'
import SobreMi from '../pages/SobreMi/SobreMi'
import ResultadosBusqueda from '../components/ResultadosBusqueda/ResultadosBusqueda'


function AppRutas (){

    return(
        <Routes>
            <Route path="/" element={<Principal/>} />
            <Route path="/mi-lista" element={<MiLista/>} />
            <Route path="/biblioteca" element={<Biblioteca/>} />
            <Route path="/sobre-mi" element={<SobreMi/>} />
            <Route path="/resultados" element={<ResultadosBusqueda />} />
            {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
    )
}

export default AppRutas