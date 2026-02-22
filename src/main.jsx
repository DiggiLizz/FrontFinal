import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// 1. importar Bootstrap (para que sea la base)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// 2. Luego CSS (para que las reglas como .btn-primary ganen a las de Bootstrap)
import './assets/css/estilos.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)