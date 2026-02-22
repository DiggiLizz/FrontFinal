import React, { useState } from 'react';

/**
 * COMPONENTE: MediaCard
 * PROPÓSITO: Mostrar una tarjeta de contenido (Anime o Videojuego) con su 
 * respectiva reseña y opinión personal en un modal interactivo.
 */
const MediaCard = ({ producto, neonActivo }) => {
  // Estado local para controlar la apertura del modal (Criterio 5)
  const [mostrarModal, setMostrarModal] = useState(false);

  // 1. ESTILOS DINÁMICOS: Cambian según el estado global del Modo Neón
  const estiloCard = {
    backgroundColor: 'rgba(17, 24, 39, 0.85)',
    borderRadius: '15px',
    transition: 'all 0.5s ease',
    border: neonActivo ? '2px solid #FF00FF' : '1px solid #2B3753',
    boxShadow: neonActivo ? '0 0 15px #FF00FF' : 'none',
    cursor: 'pointer'
  };

  const estiloTitulo = {
    color: neonActivo ? '#FF00FF' : '#FFFFFF',
    textShadow: neonActivo ? '0 0 10px #FF00FF' : 'none',
    transition: '0.5s'
  };

  return (
    <>
      {/* TARJETA EN LA GRILLA (Interactividad con onClick) */}
      <div className="card h-100 text-light shadow-sm" style={estiloCard} onClick={() => setMostrarModal(true)}>
        <img 
          src={producto.imagen} 
          className="card-img-top p-2" 
          alt={producto.altText} 
          style={{ height: '280px', objectFit: 'cover', borderRadius: '15px' }}
        />
        <div className="card-body d-flex flex-column justify-content-center text-center">
          <h5 className="card-title fw-bold m-0" style={estiloTitulo}>
            {producto.titulo}
          </h5>
          
          {/* Indicador visual de acción (Criterio 5) */}
          <small className={neonActivo ? "text-magenta" : "text-info"} style={{marginTop: '10px'}}>
             Ver reseña y opinión
          </small>
        </div>
      </div>

      {/* VENTANA EMERGENTE (MODAL REUTILIZABLE) */}
      {mostrarModal && (
        <div className="modal-overlay" onClick={() => setMostrarModal(false)} style={estilosModal.overlay}>
          <div className="modal-content-custom" 
               onClick={(e) => e.stopPropagation()} 
               style={{
                 ...estilosModal.content,
                 border: neonActivo ? '2px solid #FF00FF' : '1px solid #444',
                 boxShadow: neonActivo ? '0 0 30px #FF00FF' : '0 10px 30px rgba(0,0,0,0.5)'
               }}>
            
            {/* Botón de cierre con estilo dinámico */}
            <button onClick={() => setMostrarModal(false)} style={estilosModal.botonCerrar}>✕</button>
            
            <div className="row g-0">
              {/* Parte izquierda: Imagen */}
              <div className="col-md-5">
                <img src={producto.imagen} alt={producto.altText} style={estilosModal.imagenGrande} />
              </div>
              
              {/* Parte derecha: Información dinámica */}
              <div className="col-md-7 p-4 text-white">
                <h2 style={estiloTitulo} className="mb-3">{producto.titulo}</h2>
                
                <div style={{ maxHeight: '380px', overflowY: 'auto', paddingRight: '15px' }}>
                    <h6 className="fw-bold" style={{color: neonActivo ? '#FF00FF' : '#0dcaf0'}}>
                      Información General:
                    </h6>
                    <p className="small" style={{color: '#e2e8f0'}}>{producto.descripcion}</p>
                    
                    <h6 className="fw-bold mt-4" style={{color: neonActivo ? '#FF00FF' : '#0dcaf0'}}>
                      Opinión Personal:
                    </h6>
                    <p className="small" style={{ 
                      fontStyle: 'italic', 
                      color: '#cbd5e1', 
                      borderLeft: `3px solid ${neonActivo ? '#FF00FF' : '#0dcaf0'}`, 
                      paddingLeft: '15px',
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      padding: '10px'
                    }}>
                      "{producto.opinionPersonal}"
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Estilos de los objetos para limpieza del código (Criterio 6)
const estilosModal = {
  overlay: {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: 'rgba(0,0,0,0.92)', zIndex: 5000,
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px',
    backdropFilter: 'blur(10px)'
  },
  content: {
    backgroundColor: '#0B1220', borderRadius: '25px',
    maxWidth: '950px', width: '100%', position: 'relative',
    overflow: 'hidden', transition: '0.5s'
  },
  botonCerrar: {
    position: 'absolute', top: '15px', right: '20px',
    background: 'none', border: 'none', color: '#FF00FF',
    fontSize: '2rem', cursor: 'pointer', zIndex: 10
  },
  imagenGrande: {
    width: '100%', height: '100%', minHeight: '480px', objectFit: 'cover',
    backgroundColor: '#000'
  }
};

export default MediaCard;