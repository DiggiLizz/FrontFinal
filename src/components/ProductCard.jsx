import React from 'react';

/**
 * Componente que representa la tarjeta de un producto individual.
 * Recibe el objeto 'producto' y la función 'onAgregar' como props.
 */
const ProductCard = ({ producto, onAgregar }) => {
  return (
    <div className="card shadow-sm h-100 bg-dark text-light border-secondary">
      <img 
        src={producto.imagen} 
        className="card__img" 
        alt={producto.altText} 
        style={{ objectFit: 'cover', height: '200px' }}
      />
      <div className="card-body text-center d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title text-info">{producto.titulo}</h5>
          <p className="card-text fw-bold">${producto.precio.toLocaleString()}</p>
        </div>

        {/* REQUISITO PAUTA: Evento onClick para interactividad */}
        <button 
          className="btn-primary mt-3" 
          onClick={() => onAgregar(producto)}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;