// import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
// import { FaHeart } from 'react-icons/fa'
// import { addFavorites, removeFavorites } from '../../store/actions/actions'
import Col from 'react-bootstrap/esm/Col'
import s from './cardFavorite.module.css'

export default function CardFavorites ({ id, title, image, name, price }) {
  return (
    <div>
      <Card className={s.card}>
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
        <Card.Img className={s.image} variant='top' src={image} alt={image} />
        <Card.Body>
          <Card.Title className='fs-3 mt-3'>{title}</Card.Title>
          <Card.Text>
            {name}
          </Card.Text>
          <Button className={`p-3 fs-4 ${s.button}`}>
            <Link className='text-light text-decoration-none' to={`/publication/${id}`}>
              Ir a la publicación
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}
