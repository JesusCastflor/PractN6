import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import EstadoConUseState from './estadoConUseState.jsx'
import HookuseEffect from './HookuseEffect.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <EstadoConUseState/>
    <HookuseEffect/>
  </React.StrictMode>
)
