import {useState,useEffect} from 'react'

 const Filtros = ({filtro,setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form>
            <div className='campo'>
                <label>Filtrar Gastos</label>
                <select
                    value={filtro}
                    onChange={e => setFiltro(e.target.value)}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="casa">Comida</option>
                    <option value="gastos">Gastos Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscribciones">Subscripciones</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filtros
