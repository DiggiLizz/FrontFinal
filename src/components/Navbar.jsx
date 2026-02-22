import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top border-bottom border-secondary">
      <div className="container">
        {/* Logo con el estilo de negrita que tenías */}
        <a className="navbar-brand fw-bold" href="/">
          SEKHMET
        </a>

        {/* Botón de hamburguesa para móviles (Bootstrap) */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enlaces de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Videojuegos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Anime</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Tienda</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Comunidad</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;