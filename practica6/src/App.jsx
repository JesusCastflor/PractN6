import React, { useState } from 'react';
import './App.css'
import ComponenteA from './ComponenteA';  //AUNQ  UE MUESTRE ERROR FUNCIONA
import ComponenteB from './ComponenteB';


function App() {
  const nombres = ['Juan', 'José', 'Albedrto']; // PARA ITERADORES

  const [contador, setContador] = useState(0);  //PARA EVENTOS

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <>
      <div> 
        PROP: <ComponenteA valor="Valor de ejemplo" /> 
        <ComponenteB />
      </div>
      ITERADORES:
      <ul>  
        {nombres.map((nombre, index) => (
          <li key={index}>{nombre}</li>
        ))}
      </ul>
      EVENTO:
      <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
    </>
  )
}

export default App
