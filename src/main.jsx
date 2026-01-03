import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {LibrosProvider} from './context/LibrosContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <LibrosProvider>
    <App />
    </LibrosProvider>
    
  </StrictMode>,
)
