import React from 'react'

function Filters ({ handleSort }) {
  return (
    <div>
      <select onChange={e => handleSort(e)}>
        <option value=''> Ordernar </option>
        <option value='az'> A-Z </option>
        <option value='za'> Z-A </option>
        <option value='more'> Mayor Precio </option>
        <option value='less'> Menor Precio </option>
      </select>
      {/* <select onChange={e => handleSort(e)}>
        <option value=''> Valor</option>

      </select> */}
    </div>
  )
}

export default Filters
