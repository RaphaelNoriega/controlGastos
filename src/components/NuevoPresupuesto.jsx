import React from 'react'
import { useState } from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto =({presupuesto,setPresupuesto})=> {

    const[mensaje,setMensaje] = useState('')
  
    const handlePresupuesto = (e)=>{
        e.preventDefault();

        if(!Number(presupuesto) || Number(presupuesto) < 0){
            setMensaje('no es valido')
            console.log('no')
        }else{
            setMensaje('si es valido')
            console.log('si')
        }
    }


  return (
      <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className='campo'>
                <label>Definir Presupuesto</label>

                <input
                    className='nuevo-presupuesto'
                    type='text'
                    placeholder='Aniade tu presupuesto'
                    value={presupuesto}
                    onChange={e => setPresupuesto(e.target.value)}
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