// import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
// import { FaHeart } from 'react-icons/fa'
// import { addFavorites, removeFavorites } from '../../store/actions/actions'
import Col from 'react-bootstrap/esm/Col'
import s from './cardFavorite.module.css'

export default function CardFavorites ({ id, title, description, image, name, price }) {
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
        <Card.Img className={s.image} variant='top' src={image} alt={image} />
        <Card.Body>
          <Card.Title className='fs-3 mt-3'>{title}</Card.Title>
          <Card.Text className='fs-4 my-3'>
            {description}
          </Card.Text>
          <Card.Text>
            {name}
          </Card.Text>
          {/* <Card.Text>
            {price}
          </Card.Text> */}
          <Button className={`p-3 fs-4 ${s.button}`}>
            <Link className='text-light text-decoration-none' to={`/publication/${id}`}>
              Volver a la publicación
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}
