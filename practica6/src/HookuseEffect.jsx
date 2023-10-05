import React, {useState, useEffect} from 'react';

function HookuseEffect(){
    const [contador, setContador] = useState(0);
    const listaTitulos = ['Pagina Nueva', 'Fernando Vizcarra', 'Deyner Cuadros','Bryan Torres','Jesus Castillo'];
    useEffect(()=>{
        document.title = listaTitulos[contador];
        if(contador>4){
            document.title = 'No me quedan mas titulos';
        }
    },)
    return (
        <div>
            <p>Cambiar titulo:</p>
            <button onClick={() => setContador(contador+1)}>Cambiar Titulo</button>
        </div>
    )
}
export default HookuseEffect;