import React, { useState, useRef } from 'react';

const Navbar = ({ cuentaCarrito, activarNeon, neonActivo, setPestañaActiva, pestañaActiva }) => {
  const [toqueCount, setToqueCount] = useState(0);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const timerRef = useRef(null);

  const cerrarMenu = () => setIsNavExpanded(false);

  const manejarClicLogo = (e) => {
    e.preventDefault();
    if (timerRef.current) clearTimeout(timerRef.current);

    const nuevoConteo = toqueCount + 1;
    if (nuevoConteo === 3) {
      activarNeon();
      setToqueCount(0);
      cerrarMenu();
    } else {
      setToqueCount(nuevoConteo);
      timerRef.current = setTimeout(() => setToqueCount(0), 1000);
    }
  };

  const cambiarSeccion = (e, seccion) => {
    e.preventDefault();
    setPestañaActiva(seccion);
    cerrarMenu();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent py-4">
      <div className="container">
        <span 
          className="navbar-brand fw-bold" 
          onClick={manejarClicLogo}
          style={{ 
            color: neonActivo ? "#FF00FF" : "#e4dfe6", 
            textShadow: neonActivo ? "0 0 10px #FF00FF, 0 0 20px #FF00FF" : "none",
            cursor: 'pointer', transition: '0.3s'
          }}
        >
          SEKHMET
        </span>

        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavExpanded ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-center">
            
            {/* 1. Enlace a Anime */}
            <li className="nav-item">
              <a 
                className={`nav-link ${pestañaActiva === 'anime' ? 'active fw-bold' : ''}`} 
                href="#anime" 
                style={pestañaActiva === 'anime' ? { color: '#FF00FF' } : {}}
                onClick={(e) => cambiarSeccion(e, 'anime')}
              >
                Anime
              </a>
            </li>

            {/* 2. Enlace a Videojuegos (AGREGADO) */}
            <li className="nav-item">
              <a 
                className={`nav-link ${pestañaActiva === 'juegos' ? 'active fw-bold' : ''}`} 
                href="#juegos" 
                style={pestañaActiva === 'juegos' ? { color: '#0dcaf0' } : {}}
                onClick={(e) => cambiarSeccion(e, 'juegos')}
              >
                Videojuegos
              </a>
            </li>

            {/* 3. Enlace a Tienda */}
            <li className="nav-item">
              <a 
                className={`nav-link ${pestañaActiva === 'tienda' ? 'active fw-bold text-info' : ''}`} 
                href="#tienda" 
                onClick={(e) => cambiarSeccion(e, 'tienda')}
              >
                Tienda
              </a>
            </li>

            {/* Indicador de Carrito */}
            <li className="nav-item ms-lg-2">
              <span 
                className={`badge rounded-pill ${neonActivo ? 'bg-magenta' : 'bg-info'} text-dark`}
                style={neonActivo ? { backgroundColor: '#FF00FF', boxShadow: '0 0 10px #FF00FF' } : {}}
              >
                🛒 {cuentaCarrito}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;