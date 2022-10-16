import style from './searchBar.module.css'
import { BsSearch } from 'react-icons/bs'
import { searchPublicationByName } from '../../store/actions/actions'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
/* import Alert from '../Alert/Alert'
 */
export default function SeachBar () {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  /* const [alert, setAlert] = useState(false) */

  function handleSubmit (e) {
    e.preventDefault()
    if (!name) {
      /*  setAlert(true) */
      /* setTimeout(() => {
        setAlert(false)
      }, 1000) */
      document.getElementById('input').focus()
      document.getElementById('input').placeholder = 'Debes ingresar un nombre!'
    } else {
      /* setAlert(false) */
      dispatch(searchPublicationByName(name))
      setName('')
    }
  }

  function handleChange (e) {
    e.preventDefault()
    setName(e.target.value)
  }
  return (
    <div className={style.container}>
      <form className={style.searchBar} onChange={handleChange}>
        <input className={style.inputSearch} type='text' value={name} placeholder='Buscar...' id='input' />
        <button type='submit' onClick={handleSubmit} className={style.submitSearch}><BsSearch className={style.icon} /></button>
      </form>
      {/* {alert && <Alert message='Debes ingresar un nombre!' />} */}
    </div>
  )
}
