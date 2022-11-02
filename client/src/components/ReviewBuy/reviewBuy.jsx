import Container from 'react-bootstrap/Container'
import React, { useRef, useState } from 'react'
import { ImGlass } from 'react-icons/im'
import style from './reviewBuy.module.css'
import { useDispatch } from 'react-redux'
import { getReviewBuys } from '../../store/actions/actions'
const urlApi = 'https://e-winespf.herokuapp.com'

export default function ReviewBuy (userId) {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  const text = useRef(null)
  const dispatch = useDispatch()
  const handleClick = (e) => {
    e.preventDefault('')
    const comentario = {
      userId: userId.userId,
      publicationId: userId.pubId,
      puntaje: rating,
      textRev: text.current.value
    }
    fetch(`${urlApi}/reviewsBuys`, {
      method: 'POST',
      body: JSON.stringify(comentario),
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include'
    })
    dispatch(getReviewBuys(userId.userId))
    text.current.value = ''
  }

  return (
    <Container className='mt-5 bg-body shadow-lg' fluid>
      <div className={style.text}>Si ya compraste este vino dejanos tu opinión</div>
      {[...Array(5)].map((star, i) => {
        const starRating = i + 1
        return (
          <label key={Math.random()}>
            <input
              className={style.input}
              type='radio'
              name='rating'
              value={starRating}
              onClick={() => setRating(starRating)}
            />
            <ImGlass
              className={style.star}
              size={50} key={Math.random()}
              onMouseEnter={() => setHover(starRating)}
              onMouseLeave={() => setHover(null)}
              color={starRating > (hover || rating) ? '#e4e5e9' : '#56070C'}
            />
          </label>
        )
      })}
      <form>
        <input
          className={style.questionsContainer}
          type='text'
          name='Comentario'
          placeholder='Agregar comentario...' ref={text}
        />
        <button className={style.inputBtn} type='button' onClick={e => handleClick(e)}>Enviar</button>
      </form>
    </Container>
  )
}
