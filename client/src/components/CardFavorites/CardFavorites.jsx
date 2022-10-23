// import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
// import { FaHeart } from 'react-icons/fa'
// import { addFavorites, removeFavorites } from '../../store/actions/actions'
import Col from 'react-bootstrap/esm/Col'
// import style from './cardFavorite.module.css'
// import Counter from '../Counter/Counter'

export default function CardFavorites ({ id, title, price, image, name }) {
  /* const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites)
  const user = useSelector(state => state.user) */
  // const countItemCarrito=useSelector
  /* const isInFavorites = (id) => {
    for (let x = 0; x < favorites.length; x++) {
      if (favorites[x].publicationId === id) return true
    }
    return false
  } */
  return (
    <div>
      <Card style={{ width: '28rem' }}>
        <Col>
          {/* <FaHeart
            className={isInFavorites(id) ? style.iconActive : style.icon} onClick={() => {
              isInFavorites(id)
                ? dispatch(removeFavorites(
                  user.id,
                  id
                ))
                : dispatch(addFavorites({
                  userId: user.id,
                  publicationId: id
                }))
            }}
          /> */}
        </Col>
        <Card.Img variant='top' src={image} alt={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {price}
            {name}
          </Card.Text>
          <Button className='p-3 fs-5' variant='dark'>
            <Link className='text-light text-decoration-none' to={`/publication/${id}`}>
              Volver a la publicación
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}
