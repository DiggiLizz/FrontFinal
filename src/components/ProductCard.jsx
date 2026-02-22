import React, { useState } from 'react';

// Criterio 6: Comentario descriptivo del componente
// Este componente renderiza la tarjeta del producto y su detalle en un modal.
const ProductCard = ({ producto, onAgregar, neonActivo }) => {
  const [mostrarModal, setMostrarModal] = useState(false);

  // Estilos dinámicos para la tarjeta
  const estiloCard = {
    backgroundColor: 'rgba(17, 24, 39, 0.95)',
    borderRadius: '15px',
    transition: 'all 0.5s ease',
    border: neonActivo ? '2px solid #FF00FF' : '1px solid #2B3753',
    boxShadow: neonActivo ? '0 0 15px #FF00FF' : 'none',
  };

  const estiloTitulo = {
    color: neonActivo ? '#FF00FF' : '#FFFFFF',
    textShadow: neonActivo ? '0 0 10px #FF00FF' : 'none',
  };

  return (
    <>
      {/* TARJETA PRINCIPAL */}
      <div className="card h-100 text-light" style={estiloCard}>
        <img 
          src={producto.imagen} 
          className="card-img-top p-2" 
          alt={producto.altText}
          onClick={() => setMostrarModal(true)}
          style={{ height: '220px', objectFit: 'cover', cursor: 'zoom-in', borderRadius: '15px' }}
        />
        <div className="card-body d-flex flex-column justify-content-between text-center">
          <div>
            <h5 className="card-title fw-bold" style={estiloTitulo}>
              {producto.titulo}
            </h5>
            
            <div className="d-flex justify-content-center align-items-center gap-2 mb-1">
              {/* RENDERIZADO CONDICIONAL: Solo muestra precio anterior si existe */}
              {producto.precioAnterior && (
                <span className="text-decoration-line-through" style={{ color: '#adb5bd', fontSize: '0.9rem' }}>
                  ${producto.precioAnterior.toLocaleString()}
                </span>
              )}
              <span className="fw-bold fs-4" style={{ color: neonActivo ? '#00FF00' : '#2ecc71' }}>
                ${producto.precio.toLocaleString()}
              </span>
            </div>

            {/* RENDERIZADO CONDICIONAL: Badge de oferta */}
            {producto.precioAnterior && (
              <div className="mb-2">
                <span className="badge bg-danger shadow-sm">¡OFERTA ESPECIAL!</span>
              </div>
            )}
          </div>

          <button 
            className={`btn ${neonActivo ? 'btn-outline-magenta' : 'btn-primary'} w-100 fw-bold mt-2`} 
            onClick={() => onAgregar(producto)}
            style={neonActivo ? { borderColor: '#FF00FF', color: '#FF00FF' } : {}}
          >
            {neonActivo ? 'ADQUIRIR TESORO' : 'Agregar al carrito'}
          </button>
        </div>
      </div>

      {/* MODAL CON DETALLES */}
      {mostrarModal && (
        <div className="modal-overlay" onClick={() => setMostrarModal(false)} style={estilosModal.overlay}>
          <div className="modal-content-custom" 
               onClick={(e) => e.stopPropagation()} 
               style={{...estilosModal.content, border: neonActivo ? '2px solid #FF00FF' : '1px solid #444'}}>
            
            <button onClick={() => setMostrarModal(false)} style={estilosModal.botonCerrar}>✕</button>
            
            <div className="row g-0 align-items-center">
              <div className="col-md-6">
                <img src={producto.imagen} alt={producto.titulo} style={estilosModal.imagenGrande} />
              </div>
              <div className="col-md-6 p-4 text-center text-white">
                <h2 style={estiloTitulo}>{producto.titulo}</h2>
                
                <div className="my-3">
                    {/* CORRECCIÓN: Precio anterior condicional en el Modal */}
                    {producto.precioAnterior && (
                        <p style={{ color: '#adb5bd', textDecoration: 'line-through' }} className="mb-0">
                          Antes: ${producto.precioAnterior.toLocaleString()}
                        </p>
                    )}
                    
                    <h3 style={{ color: '#00FF00' }}>
                      {producto.precioAnterior ? 'Ahora: ' : 'Precio: '} 
                      ${producto.precio.toLocaleString()}
                    </h3>

                    {/* CORRECCIÓN: El mensaje de stock ahora solo sale si hay oferta */}
                    {producto.precioAnterior && (
                      <p className="text-warning small fw-bold mt-2">
                        ⚠️ ¡Válido hasta agotar stock!
                      </p>
                    )}
                </div>
                
                {/* Criterio 1: Descripción del producto */}
                <p style={{ color: '#f8f9fa' }}>{producto.descripcion || producto.altText}</p>
                
                <button 
                  className="btn btn-primary mt-3 px-5 fw-bold" 
                  onClick={() => { onAgregar(producto); setMostrarModal(false); }}
                  style={neonActivo ? { backgroundColor: '#FF00FF', border: 'none' } : {}}
                >
                  ¡AÑADIR AL CARRITO!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const estilosModal = {
  overlay: {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 5000,
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px',
    backdropFilter: 'blur(8px)'
  },
  content: {
    backgroundColor: '#111827', borderRadius: '20px',
    maxWidth: '800px', width: '100%', position: 'relative', overflow: 'hidden'
  },
  botonCerrar: {
    position: 'absolute', top: '15px', right: '20px',
    background: 'none', border: 'none', color: 'white', fontSize: '1.8rem', cursor: 'pointer', zIndex: 10
  },
  imagenGrande: { width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain' }
};

export default ProductCard;