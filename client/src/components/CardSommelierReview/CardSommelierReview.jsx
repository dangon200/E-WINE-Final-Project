
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
        <Card.Img className={s.image} variant='top' src={image} alt={image} />
        <Card.Body className={s.bodyCard}>
          <Card.Title className='fs-2 mt-3 text-center'>{name}</Card.Title>
          {/* <Card.Text className='fs-4 my-3'>
            Origen: {origin}
          </Card.Text>
          <Card.Text className='fs-4 my-3'>
            Bodega: {cellar}
          </Card.Text>
          <Card.Text className='fs-4 my-3'>
            Varietal: {varietal}
          </Card.Text>
          <Card.Text className='fs-4 my-3'>
            Tipo: {type}
          </Card.Text> */}
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
                <input className='fs-4' type='text' placeholder='Dejar reseña' value={input} onChange={(e) => setInput(e.target.value)} />
                <input className='fs-4' type='submit' value='Enviar' onClick={(e) => post(e)} />
              </div>  // eslint-disable-line
          }
        </Card.Body>
      </Card>
    </div>
  )
}
