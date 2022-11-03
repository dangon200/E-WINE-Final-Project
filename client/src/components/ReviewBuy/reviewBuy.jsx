import Container from 'react-bootstrap/Container'
import React, { useRef, useState, useEffect } from 'react'
import { IoIosWine } from 'react-icons/io'
import style from './reviewBuy.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addReviewBuy, getReviewPublication } from '../../store/actions/actions'

export default function ReviewBuy (userId) {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  const text = useRef(null)
  const newComment = useSelector(state => state.reviewBuys)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getReviewPublication(userId.pubId))
  }, [newComment])
  const handleClick = (e) => {
    e.preventDefault('')
    const comentario = {
      userId: userId.userId,
      publicationId: userId.pubId,
      puntaje: rating,
      textRev: text.current.value
    }
    dispatch(addReviewBuy(comentario))
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
            <IoIosWine
              className={style.star}
              size={40} key={Math.random()}
              onMouseEnter={() => setHover(starRating)}
              onMouseLeave={() => setHover(null)}
              color={starRating > (hover || rating) ? '#D8D8D8' : '#890f0d'}
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
