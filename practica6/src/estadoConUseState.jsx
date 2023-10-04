import React, { useState } from 'react';

function EstadoConUseState() {
  const [contador, setContador] = useState(999);

  const incrementarContador = () => {
    setContador(contador -1);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementarContador}>Disminuir</button>
    </div>
  );
}

export default EstadoConUseState;