import style from './searchBar.module.css'
import { BsSearch } from 'react-icons/bs'
import { searchByNameProduct } from '../../store/actions/actions'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

export default function SeachBar () {
  const dispatch = useDispatch()
  const [name, setName] = useState()

  function handleSubmit (e) {
    e.preventDefault()
    if (!name) {
      return alert('Please enter a name')
    }
    dispatch(searchByNameProduct(name))
    setName('')
  }

  function handleChange (e) {
    e.preventDefault()
    setName(e.target.value)
  }
  return (
    <div className={style.container}>
      <form className={style.searchBar} onChange={handleChange}>
        <input className={style.inputSearch} type='text' placeholder='Buscar...' />
        <button type='submit' onClick={handleSubmit} className={style.submitSearch}><BsSearch /></button>
      </form>
    </div>
  )
}
