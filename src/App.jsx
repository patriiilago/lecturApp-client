import './App.css'
import { BrowserRouter } from 'react-router-dom'

import BarraNavegacion from './components/BarraNavegacion/BarraNavegacion'
import AppRutas from './routes/AppRutas'

function App() {


  return (
    <BrowserRouter>

      <BarraNavegacion />
      <AppRutas />

    </BrowserRouter>
  )
}

export default App
