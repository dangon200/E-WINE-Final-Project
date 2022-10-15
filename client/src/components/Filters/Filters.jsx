import React from 'react'
import { types, varietales, provinces } from '../utilities/data.js'

function Filters ({ handleSort, handleFilterVarietal, handleFilterType, handleFilterOrigin }) {
  return (
    <div>
      <select onChange={e => handleSort(e)}>
        <option value=''> Ordernar </option>
        <option value='az'> A-Z </option>
        <option value='za'> Z-A </option>
        <option value='more'> Mayor Precio </option>
        <option value='less'> Menor Precio </option>
      </select>
      <select onChange={e => handleFilterVarietal(e)}>
        <option value=''> Varietal</option>
        {varietales && varietales.map(e => {
          return (
            <option key={e} value={e}> {e} </option>
          )
        })}
      </select>
      <select onChange={e => handleFilterType(e)}>
        <option value=''> Tipo </option>
        {types && types.map(e => {
          return (
            <option key={e} value={e}> {e} </option>
          )
        })}
      </select>
      <select onChange={e => handleFilterOrigin(e)}>
        <option value=''> Origen </option>
        {provinces && provinces.map(e => {
          return (
            <option key={e} value={e}> {e} </option>
          )
        })}
      </select>
    </div>
  )
}

export default Filters
