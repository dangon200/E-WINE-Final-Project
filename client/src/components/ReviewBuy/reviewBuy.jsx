import Container from 'react-bootstrap/Container'
import React, { useRef, useState } from 'react'
import { ImGlass } from 'react-icons/im'
import style from './reviewBuy.module.css'
const urlApi = 'http://localhost:3001'

export default function ReviewBuy (id, pubId) {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  const text = useRef(null)
  const handleClick = () => {
    const comentario = {
      userId: id,
      publicationId: pubId,
      puntaje: rating,
      textRev: text.current.value
    }
    fetch(`${urlApi}/reviewsBuy`, {
      method: 'POST',
      body: JSON.stringify(comentario),
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include'
    })
  }

  return (
    <Container className='mt-5 bg-body shadow-lg' fluid>
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
        <textarea type='text' name='Comentario' placeholder='Agregar comentario...' ref={text} />
        <button type='button' onClick={e => handleClick()}>Enviar</button>
      </form>
    </Container>
  )
}
