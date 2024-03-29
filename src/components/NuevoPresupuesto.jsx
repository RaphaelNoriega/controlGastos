import React from 'react'
import { useState } from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto =({presupuesto,setPresupuesto,setIsValidPresupuesto})=> {

    const[mensaje,setMensaje] = useState('')
  
    const handlePresupuesto = (e)=>{
        e.preventDefault();

        if(!presupuesto || presupuesto < 0){
            setMensaje('no es valido')
            console.log('no')
             return //rompemos el ciclo de la funcion
        }
        console.log("si es un presupuesto valdo")
        setMensaje("");
        setIsValidPresupuesto(true)
    }


  return (
      <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className='campo'>
                <label>Definir Presupuesto</label>

                <input
                    className='nuevo-presupuesto'
                    type='number'
                    placeholder='Aniade tu presupuesto'
                    value={presupuesto}
                    onChange={e => setPresupuesto(Number(e.target.value))}
                />
            </div>
            <input
                type="submit"
                value="Aniadir"
            />

            {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
        </form> 

      </div>
       
  )
}

export default NuevoPresupuesto