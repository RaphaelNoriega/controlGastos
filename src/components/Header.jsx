import React from 'react'
import { useState } from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header =({presupuesto,setPresupuesto})=> {
  const [count, setCount] = useState(0)

  return (
      <header>
          <h1>Planificador de gastos</h1>

          <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
          />
      </header>
       
  )
}

export default Header