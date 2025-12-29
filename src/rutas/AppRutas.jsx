import { Routes, Route } from 'react-router-dom'
import Principal from './../pages/Principal/Principal'
import MiLista from './../pages/MiLista/MiLista'
import Biblioteca from './../pages/Biblioteca/Biblioteca'
import SobreMi from './../pages/SobreMi/SobreMi'


function AppRutas (){

    return(
        <Routes>
            <Route path="/" element={<Principal/>} />
            <Route path="/mi-lista" element={<MiLista/>} />
            <Route path="/biblioteca" element={<Biblioteca/>} />
            <Route path="/sobre-mi" element={<SobreMi/>} />
        </Routes>
    )
}

export default AppRutas