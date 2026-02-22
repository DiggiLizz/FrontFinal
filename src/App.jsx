import React, { useState, useEffect } from 'react';
import datosVentas from './assets/data/ventas.json';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import Sidebar from './components/Sidebar'; 
import ProductCard from './components/ProductCard';

function App() {
  // 1. ESTADOS
  const [productos] = useState(datosVentas);
  const [carrito, setCarrito] = useState([]);
  const [neonActivo, setNeonActivo] = useState(false);

  // 2. LÓGICA DEL CARRITO (Requisito: Gestión y cálculos)
  
  // Agregar: Crea una copia con un ID único para poder borrar repetidos individualmente
  const agregarAlCarrito = (producto) => {
    const nuevoItem = { 
      ...producto, 
      instanceId: Date.now() + Math.random() 
    };
    setCarrito([...carrito, nuevoItem]);
  };

  // Eliminar: Quita solo el producto específico usando su instanceId
  const eliminarDelCarrito = (instanceId) => {
    setCarrito(carrito.filter(item => item.instanceId !== instanceId));
  };

  // Vaciar: Limpia todo el array
  const vaciarCarrito = () => setCarrito([]);

  // Total: Suma los precios de lo que hay en el carrito
  const totalPrecio = carrito.reduce((acc, prod) => acc + prod.precio, 0);

  // 3. EFECTOS (Modo Neón con tecla 'V')
  useEffect(() => {
    const manejarTeclado = (e) => {
      if (e.key.toLowerCase() === 'v') setNeonActivo(prev => !prev);
    };
    window.addEventListener('keydown', manejarTeclado);
    return () => window.removeEventListener('keydown', manejarTeclado);
  }, []);

  // 4. RENDERIZADO (Visualización)
  return (
    <div className={`layout ${neonActivo ? 'modo-neon' : ''}`}>
      <Navbar cuentaCarrito={carrito.length} />
      
      <div className="d-flex flex-column flex-lg-row">
        <Sidebar cuentaCarrito={carrito.length} />
        
        <main className="main flex-grow-1">
          <header className="hero-container text-center py-4">
            <h1 style={{ 
              color: neonActivo ? '#FF00FF' : '#9283a8', 
              transition: '0.5s',
              textShadow: neonActivo ? '0 0 10px #FF00FF' : 'none'
            }}>
              Sekhmet Shop
            </h1>
            
            {/* --- SECCIÓN DINÁMICA DEL CARRITO (Punto 2 y 5 de la pauta) --- */}
            [Image of React shopping cart component with add and remove functionality]
            {carrito.length > 0 ? (
              <div className="card bg-dark border-info mx-auto my-3 p-3 shadow" style={{maxWidth: '600px'}}>
                <h4 className="text-info border-bottom border-secondary pb-2">Tu Selección</h4>
                
                <ul className="list-group list-group-flush mb-3">
                  {carrito.map((item) => (
                    <li key={item.instanceId} className="list-group-item bg-dark text-light d-flex justify-content-between align-items-center border-secondary">
                      <span>{item.titulo} - <strong>${item.precio.toLocaleString()}</strong></span>
                      <button 
                        onClick={() => eliminarDelCarrito(item.instanceId)}
                        className="btn btn-sm btn-danger"
                      >
                        Eliminar
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="text-success m-0">Total: ${totalPrecio.toLocaleString()}</h5>
                  <button onClick={vaciarCarrito} className="btn btn-outline-warning btn-sm">
                    Vaciar Todo
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-muted mt-3">Tu carrito está vacío. ¡Elige una figura!</p>
            )}
          </header>

          {/* --- LISTADO DE PRODUCTOS (Punto 1 de la pauta) --- */}
          <div className="cards px-3">
            {productos.map((producto) => (
              <ProductCard 
                key={producto.id} 
                producto={producto} 
                onAgregar={agregarAlCarrito} 
              />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;