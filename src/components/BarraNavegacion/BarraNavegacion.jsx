import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './BarraNavegacion.css'
import libroIcono from './../../assets/iconos/libro-icono.png'
import BusquedaIcono from './../../assets/iconos/busqueda-icono.png'

const BarraNavegacion = () => {

  const [terminoBusqueda, setTerminoBusqueda] = useState('')

  const manejarBusqueda = () => {
    console.log('Buscando: ', terminoBusqueda);
  }

  return (
    <>
      {/* Navbar superior */}
      <nav className="barra">
        <div className="barra__contenedor">
          {/* Branding */}
          <div className="barra__marca">
            <img src={libroIcono} alt="Icono libro" />
          </div>

          {/* Enlaces escritorio */}
          <ul className="barra__lista barra__lista--escritorio">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `barra__enlace ${isActive ? 'barra__enlace--activo' : ''}`
                }
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mi-lista"
                className={({ isActive }) =>
                  `barra__enlace ${isActive ? 'barra__enlace--activo' : ''}`
                }
              >
                Mi lista
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/biblioteca"
                className={({ isActive }) =>
                  `barra__enlace ${isActive ? 'barra__enlace--activo' : ''}`
                }
              >
                Biblioteca
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sobre-mi"
                className={({ isActive }) =>
                  `barra__enlace ${isActive ? 'barra__enlace--activo' : ''}`
                }
              >
                Sobre mí
              </NavLink>
            </li>
          </ul>

          {/* Input de búsqueda */}
          <div className="entrada-con-icono">
            <input
              type="text"
              placeholder="Buscar libros..."
              className="barra__busqueda"
              value={terminoBusqueda}
              onChange={(e) => setTerminoBusqueda(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && manejarBusqueda()}
            />
            <img
              className="barra__iconoLupa"
              src={BusquedaIcono}
              alt="Icono de búsqueda"
              onClick={manejarBusqueda}
            />
          </div>
        </div>
      </nav>

      {/* Footer links móvil-tablet */}
      <footer className="barra__pie">
        <ul className="barra__lista barra__lista--movil">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `barra__enlace ${isActive ? 'barra__enlace--activo' : ''}`
              }
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mi-lista"
              className={({ isActive }) =>
                `barra__enlace ${isActive ? 'barra__enlace--activo' : ''}`
              }
            >
              Mi lista
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/biblioteca"
              className={({ isActive }) =>
                `barra__enlace ${isActive ? 'barra__enlace--activo' : ''}`
              }
            >
              Biblioteca
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sobre-mi"
              className={({ isActive }) =>
                `barra__enlace ${isActive ? 'barra__enlace--activo' : ''}`
              }
            >
              Sobre mí
            </NavLink>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default BarraNavegacion