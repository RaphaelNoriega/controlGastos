import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import {generarId} from './helpers'
import Modal from './components/Modal'

const App =()=> {
  const [presupuesto, setPresupuesto] = useState(0)
  const[isValidPresupuesto,setIsValidPresupuesto] = useState(false)

  const [modal,setModal]= useState(false)
  const [animarModal,setAnimarModal]= useState(false)

  const [gastos,setGastos]= useState([])

  const handleNuevoGasto =()=>{
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 1000);
  }

  const guardarGasto =(gasto)=>{
    console.log(gasto)
    gasto.id = generarId();
    setGastos([...gastos,gasto])

    setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
          }, 500);
  }

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

    {isValidPresupuesto && (
      <div className='nuevo-gasto'>
        <img
          src={IconoNuevoGasto}
          alt="icono nuevo gasto"
          onClick={handleNuevoGasto}
        />
      </div>
    )}

    {modal && <Modal
      setModal={setModal}
      animarModal={animarModal}
      setAnimarModal={setAnimarModal}
      guardarGasto={guardarGasto}
    />}
      

    </div>  
  )
}

export default App