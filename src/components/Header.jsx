import React from 'react'
import { useState } from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header =({presupuesto,setPresupuesto,isValidPresupuesto,setIsValidPresupuesto})=> {
  const [count, setCount] = useState(0)


  return (
      <header>
          <h1>Planificador de gastos</h1>

          {isValidPresupuesto ? (
            <ControlPresupuesto
            presupuesto={presupuesto}
            />
          ) : (
            <NuevoPresupuesto
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              setIsValidPresupuesto={setIsValidPresupuesto}
            />
          )}
         
      </header>
       
  )
}

export default Header