
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
        <Card.Body>
          <Card.Title className='fs-3 mt-3'>{name}</Card.Title>
          <Card.Text className='fs-4 my-3'>
            {origin}
            {cellar}
            {varietal}
          </Card.Text>
          <Card.Text>
            {type}
          </Card.Text>
          {
            review(reviews)
              ? review(reviews)
              : <>
                <input type='text' placeholder='Dejar reseña' value={input} onChange={(e) => setInput(e.target.value)} />
                <input type='submit' value='Enviar' onClick={(e) => post(e)} />
              </>  // eslint-disable-line
          }
          {/* <Button className={`p-3 fs-4 ${s.button}`}>
            <Link className='text-light text-decoration-none' to={`/publication/${id}`}>
              Dejar review
            </Link>
          </Button> */}
        </Card.Body>
      </Card>
    </div>
  )
}
