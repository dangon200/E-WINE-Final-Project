
import Card from 'react-bootstrap/Card'
import s from './cardSommelierReview.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { postReview } from '../../store/actions/actions'

export default function CardSommelierReview ({ id, type, origin, cellar, varietal, image, name, reviews }) {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const review = (reviews) => {
    if (!reviews) {
      return false
    }
    for (let x = 0; x < reviews.length; x++) {
      if (reviews[x].userId === user.id) {
        return reviews[x].text
      }
    }
    return false
  }
  const post = (e) => {
    e.preventDefault()
    dispatch(postReview(user.id, id, input))
  }
  return (
    <div>
      <Card className={s.card}>
        <div className='row'>
          <div className='col col-4'><Card.Img className={s.image} variant='top' src={image} alt={image} /></div>
          <div className='col col-8'>
            <Card.Body className={s.bodyCard}>
              <Card.Title className='fs-1 fw-semibold mt-3 text-start'>{name}</Card.Title>
              <div className='row d-flex justify-content-start gap-4'>
                <div className='row d-flex gap-4'>
                  <div className='col fs-4 my-3'>Origen: {origin}</div>
                  <div className='col fs-4 my-3'>Bodega: {cellar}</div>
                </div>
                <div className='row d-flex gap-4'>
                  <div className='col fs-4 my-3'>Varietal: {varietal}</div>
                  <div className='col fs-4 my-3'>Tipo: {type}</div>
                </div>
              </div>
              {
            review(reviews)
              ? <div className='fs-3'>Reseña: {review(reviews)}</div>
              : <div className={s.inputs}>
                <input className={s.input1} type='text' placeholder='Dejar reseña' value={input} onChange={(e) => setInput(e.target.value)} />
                <input className={s.input2} type='submit' value='Enviar' onClick={(e) => post(e)} />
              </div>  // eslint-disable-line
          }
            </Card.Body>
          </div>
        </div>
        {/* <Card.Img className={s.image} variant='top' src={image} alt={image} /> */}
        {/* <Card.Body className={s.bodyCard}>
          <Card.Title className='fs-2 mt-3 text-center'>{name}</Card.Title>
          <div className='row'>
            <div className='col fs-4 my-3'>Origen: {origin}</div>
            <div className='col fs-4 my-3'>Bodega: {cellar}</div>
          </div>
          <div className='row'>
            <div className='col fs-4 my-3'>Varietal: {varietal}</div>
            <div className='col fs-4 my-3'>Tipo: {type}</div>
          </div>
          {
            review(reviews)
              ? <div className='fs-3'>Reseña: {review(reviews)}</div>
              : <div className={s.inputs}>
                <input className={s.input1} type='text' placeholder='Dejar reseña' value={input} onChange={(e) => setInput(e.target.value)} />
                <input className={s.input2} type='submit' value='Enviar' onClick={(e) => post(e)} />
              </div>  // eslint-disable-line
          }
        </Card.Body> */}
      </Card>
    </div>
  )
}
