import React, {useState} from 'react'


//hook useState

export  function Ejemplos01() {
  const [contador, setContador]=useState(0);

  const IncrementarValor =() =>{
    setContador(contador +1);
  }
  return (
    <div>
      <h1>Incremento: {contador}</h1>
     <button onClick={IncrementarValor}>Incrementar</button>
    </div>
  )
}
