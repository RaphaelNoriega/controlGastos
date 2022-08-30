import React from 'react'
import { useState } from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header =({presupuesto,setPresupuesto,isValidPresupuesto,setGastos,setIsValidPresupuesto,gastos})=> {
  const [count, setCount] = useState(0)


  return (
      <header>
          <h1>Planificador de gastos</h1>

          {isValidPresupuesto ? (
            <ControlPresupuesto
            gastos={gastos}
            setGastos={setGastos}
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
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