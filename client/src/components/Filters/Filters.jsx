import React, { useState } from 'react'
import { types, varietales, provinces } from '../utilities/data.js'
import { useDispatch } from 'react-redux'
import { filterPublications, clearFilter } from '../../store/actions/actions'

function Filters () {
  const [filter, setFilter] = useState({
    order: '',
    varietal: '',
    type: '',
    origin: ''
  })
  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(filterPublications({ ...filter }))
  //   console.log(filter)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [filter])
  function handleSort (e) {
    setFilter({
      ...filter,
      [e.target.name]: [e.target.value]
    })
    dispatch(
      filterPublications(filter)
    )
    // setPage(1)
  }

  return (
    <div>
      <button onClick={() => {
        setFilter({
          order: '',
          varietal: '',
          type: '',
          origin: ''
        })
        dispatch(clearFilter())
      }}
      >Limpiar Filtros
      </button>

      <select onChange={e => handleSort(e)}>
        <option value=''> Ordernar </option>
        <option value='az'> A-Z </option>
        <option value='za'> Z-A </option>
        <option value='more'> Mayor Precio </option>
        <option value='less'> Menor Precio </option>
      </select>
      <select onChange={e => handleSort(e)}>
        <option name='varietal' value=''> Varietal</option>
        {varietales && varietales.map(e => {
          return (
            <option key={e} name='varietal' value={e}> {e} </option>
          )
        })}
      </select>
      <select onChange={e => handleSort(e)}>
        <option name='tipo' value=''> Tipo </option>
        {types && types.map(e => {
          return (
            <option name='tipo' key={e} value={e}> {e} </option>
          )
        })}
      </select>
      <select onChange={e => handleSort(e)}>
        <option name='origin' value=''> Origen </option>
        {provinces && provinces.map(e => {
          return (
            <option name='origin' key={e} value={e}> {e} </option>
          )
        })}
      </select>
    </div>
  )
}

export default Filters
