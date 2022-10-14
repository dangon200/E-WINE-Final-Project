
// import style from './SeachBar.module.css'
import { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { searchByNameProduct } from '../../store/actions/actions'

export default function SeachBar () {
  // const dispatch = useDispatch()
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  // PENDIENTE ACTION PARA BUSCAR POR NAME
  // const handleSubmit = (e) => {
  //   e.preventDefault(e)
  //   if (input.length > 0) {
  //     dispatch(searchByNameProduct())
  //     setInput('')
  //   } else {
  //     alert('Enter a valid name')
  //   }
  // }

  return (
    <div>
      <form>
        <input onChange={handleChange} type='text' value={input} />
        {/* <button onSubmit={handleSubmit} type='submit'> </button> */}

      </form>
    </div>
  )
}
