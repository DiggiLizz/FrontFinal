import React, { useState, useEffect } from 'react';
import './assets/css/estilos.css'; 
import datosVentas from './assets/data/ventas.json';
import datosAnime from './assets/data/anime.json';
import datosJuegos from './assets/data/juegos.json';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import MediaCard from './components/MediaCard';

function App() {
  const [pestañaActiva, setPestañaActiva] = useState('tienda');
  const [productosVenta] = useState(datosVentas);
  const [listaAnime] = useState(datosAnime);
  const [listaJuegos] = useState(datosJuegos);
  const [carrito, setCarrito] = useState([]);
  const [neonActivo, setNeonActivo] = useState(false);
  const [mensaje, setMensaje] = useState("");

  // Criterio 2: Función para agregar productos con ID único
  const agregarAlCarrito = (producto) => {
    const nuevoItem = { ...producto, instanceId: Date.now() + Math.random() };
    setCarrito([...carrito, nuevoItem]);
    setMensaje(`✨ ¡${producto.titulo} se unió a tu colección!`);
    setTimeout(() => setMensaje(""), 3000);
  };

  // Criterio 2: Función para eliminar productos del carrito
  const eliminarDelCarrito = (instanceId) => {
    setCarrito(carrito.filter(item => item.instanceId !== instanceId));
  };

  const totalPrecio = carrito.reduce((acc, prod) => acc + prod.precio, 0);

  // Criterio 4: Evento de teclado para interactividad fluida
  useEffect(() => {
    const manejarTeclado = (e) => {
      if (e.key.toLowerCase() === 'v') setNeonActivo(prev => !prev);
    };
    window.addEventListener('keydown', manejarTeclado);
    return () => window.removeEventListener('keydown', manejarTeclado);
  }, []);

  return (
    <div className={`layout ${neonActivo ? 'modo-neon' : ''} min-vh-100 d-flex flex-column`}>
      
      <header className="fixed-top shadow-lg" style={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', zIndex: 1030 }}>
        <div className="container">
          <Navbar 
            cuentaCarrito={carrito.length} 
            activarNeon={() => setNeonActivo(!neonActivo)} 
            neonActivo={neonActivo}
            setPestañaActiva={setPestañaActiva} 
            pestañaActiva={pestañaActiva}
          />
        </div>
      </header>

      <main className="flex-grow-1" style={{ paddingTop: '140px' }}>
        <div className="container mb-5">

          {/* MENSAJE DE NOTIFICACIÓN TEMPORAL */}
          {/* CONTENEDOR DE NOTIFICACIÓN QUE SUBE CON EL SCROLL */}
          <div style={{ 
            height: '0px',             // 📏 Evita que el contenido "salte" al aparecer
            position: 'sticky',      // 📍 Ancla el mensaje a esta posición del documento
            top: '140px',          // 📏 Se frena justo debajo de tu Navbar
            zIndex: 2000,          // 🔝 Por encima de las cards
            width: '100%', 
            display: 'flex', 
            justifyContent: 'center',
                       
          }}>
            {mensaje && (
              <div className="badge px-4 py-2 shadow-lg" 
                style={{ 
                  position: 'absolute', // ☁️ Lo hace flotar sobre el contenido sin ocupar espacio
                  top: '10px',          // 📐 Ajusta la distancia inicial desde el borde
                  fontSize: '1rem',
                  backgroundColor: neonActivo ? 'rgba(255, 0, 255, 0.9)' : 'rgba(13, 202, 240, 0.9)',
                  color: '#FFFFFF',      // ⚪ Blanco para mayor legibilidad
                  border: `2px solid ${neonActivo ? '#FF00FF' : '#0dcaf0'}`,
                  borderRadius: '30px',
                  boxShadow: neonActivo ? '0 0 20px #FF00FF' : '0 0 20px rgba(13, 202, 240, 0.5)',
                  whiteSpace: 'nowrap'
                }}>
                {mensaje}
              </div>
            )}
          </div>

          {/* --- MENSAJE MODO NEÓN (Visible en todas las pestañas) --- */}
          {neonActivo && (
            <div className="container" style={{ marginTop: '20px', position: 'relative', zIndex: 1020 }}>
              <div className="alert py-2 text-center shadow-lg" 
                  style={{ 
                    backgroundColor: 'rgba(255, 0, 255, 0.2)', 
                    border: '2px solid #FF00FF', 
                    color: '#FF00FF',
                    fontSize: '0.9rem',
                    boxShadow: '0 0 20px #FF00FF',
                    borderRadius: '15px',
                    fontWeight: 'bold'
                  }}>
                ✨ MODO NEÓN ACTIVADO: Presiona 'V' para volver a la normalidad ✨
              </div>
            </div>
          )}
          
          {/* PESTAÑA 1: AIMES */}
          {pestañaActiva === 'anime' && (
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="mb-5 fw-bold" style={neonActivo ? {color: "#FF00FF", textShadow: "0 0 10px #FF00FF"} : {color: '#FF00FF'}}>
                  RESEÑAS Y OPINIONES
                </h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  {listaAnime.map(anime => (
                    <div className="col" key={`anime-${anime.id}`}>
                      <MediaCard producto={anime} neonActivo={neonActivo} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* PESTAÑA 2: VIDEOJUEGOS (Reseñas) */}
          {pestañaActiva === 'juegos' && (
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="mb-5 fw-bold" 
                    style={neonActivo ? {color: "#0dcaf0", textShadow: "0 0 10px #0dcaf0"} : {color: '#0dcaf0'}}>
                  BIBLIOTECA DE VIDEOJUEGOS
                </h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  {listaJuegos.map(item => (
                    <div className="col" key={`juego-${item.id}`}>
                      <MediaCard producto={item} neonActivo={neonActivo} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* PESTAÑA 3: TIENDA */}
          {pestañaActiva === 'tienda' && (
            <div className="row g-4">
              <div className="col-lg-8">
                <h2 className="text-info mb-4 border-start border-4 ps-3 border-info">Tesoros Disponibles</h2>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                  {productosVenta.map(prod => (
                    <div className="col" key={`prod-${prod.id}`}>
                      <ProductCard producto={prod} onAgregar={agregarAlCarrito} neonActivo={neonActivo} />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* CARRITO LATERAL */}
              <aside className="col-lg-4">
                <div className="sticky-top" style={{ top: '140px' }}>
                  <div className="card bg-dark text-light border-secondary shadow-lg" style={{ borderRadius: '15px' }}>
                    <div className="card-body">
                      <h5 className="text-info border-bottom pb-3 text-center mb-3">Tu Carrito</h5>
                      
                      {/* CRITERIO 5: Renderizado condicional del carrito */}
                      {carrito.length > 0 ? (
                        <>
                          <div className="mb-3" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                            {carrito.map(item => (
                              <div key={item.instanceId} className="d-flex justify-content-between align-items-center mb-2 border-bottom border-secondary pb-2">
                                <span className="small">{item.titulo}</span>
                                <button className="btn btn-sm text-danger" onClick={() => eliminarDelCarrito(item.instanceId)}>✕</button>
                              </div>
                            ))}
                          </div>
                          <div className="text-center">
                            <h4 className="text-success fw-bold mb-3">Total: ${totalPrecio.toLocaleString()}</h4>
                            <div className="d-grid gap-2">
                              <button className="btn btn-success fw-bold" onClick={() => { alert("¡Compra exitosa!"); setCarrito([]); }}>PAGAR AHORA</button>
                              <button className="btn btn-outline-warning btn-sm" onClick={() => setCarrito([])}>Vaciar Carrito</button>
                            </div>
                          </div>
                        </>
                      ) : (
                        /* ESTE ES EL MENSAJE DE CARRITO VACÍO */
                        <div className="text-center py-5">
                          <p style={{ fontSize: '3rem', marginBottom: '10px' }}>🛒</p>
                          <p style={{ 
                            color: '#ffffff', // Forzamos blanco puro para que se vea
                            fontWeight: 'bold',
                            textShadow: neonActivo ? '0 0 10px #0dcaf0' : 'none' 
                          }}>
                            No hay productos seleccionados
                          </p>
                          <p style={{ color: '#adb5bd', fontSize: '0.8rem' }}>
                            Tu colección espera por nuevos tesoros.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;