/* eslint-disable no-prototype-builtins */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'

import { FaHeart } from 'react-icons/fa'
import {
  addCarrito,
  addFavorites,
  getByPublication,
  removeFavorites
} from '../../store/actions/actions'
import ProductDetail from '../ProductDetail/ProductDetail'
import Preguntas from '../Preguntas/Preguntas.jsx'
import RecomendedPublications from '../RecomendedPublications/RecomendedPublications'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Carousel from 'react-bootstrap/Carousel'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/button'
import Image from 'react-bootstrap/Image'
import { BsFillCartPlusFill, BsFillCartCheckFill } from 'react-icons/bs'
import style from './publicationDetail.module.css'

export default function PublicationDetail (props) {
  const publication = useSelector((state) => state.detailPublication)
  const favorites = useSelector((state) => state.favorites)
  const dispatch = useDispatch()
  const { id } = useParams() // props.match.params.id
  const { name, price, title, image } = publication
  const [counter, setCounter] = useState(1)

  useEffect(() => {
    dispatch(getByPublication(id))
  }, [dispatch, id])

  const isInFavorites = (id) => {
    return favorites.some((f) => f === id)
  }
  const addToCarrito = (id, price, title, image, name, countParam) => {
    if (window.localStorage.hasOwnProperty(id)) {
         // eslint-disable-line
      console.log('entre al if')
      window.localStorage[id] = JSON.stringify({
        ...JSON.parse(window.localStorage[id]),
        count: countParam + JSON.parse(window.localStorage[id]).count
      })
      dispatch(
        addCarrito({
          id,
          price,
          title,
          image,
          name,
          count: JSON.parse(window.localStorage[id]).count
        })
      )
    } else {
      console.log('entre al else')
      window.localStorage.setItem(
        id,
        JSON.stringify({ price, title, image, name, count: countParam })
      )
      dispatch(
        addCarrito({ id, price, title, image, name, count: countParam })
      )
    }
  }
  const updateCount = (param) => {
    if (param === 'rest' && counter > 1) setCounter(counter - 1)
    if (param === 'add') setCounter(counter + 1)
  }

  return (
    <Container>
      <Row>
        <Row className='mt-5 rounded mx-auto shadow-lg'>
          <Col className=''>
            <div className='pt-3 d-flex justify-content-end'>
              <FaHeart
                className={isInFavorites(id) ? style.iconActive : style.icon}
                onClick={() => {
                  isInFavorites(id)
                    ? dispatch(removeFavorites(id))
                    : dispatch(addFavorites(id))
                }}
              />
            </div>
            <Carousel className='mb-5 mt-4'>
              <Carousel.Item>
                <Image
                  fluid
                  src={image}
                  alt={`${publication.name}`}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  fluid
                  src={image}
                  alt={`${publication.name}`}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  fluid
                  src={image}
                  alt={`${publication.name}`}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col className='text-center mt-5 mb-5'>
            <h1 className='mt-3 text-capitalize fw-bold'>{name}</h1>
            <span className='fs-2 pb-5'>Precio: ${price}</span>
            <br />
            <span className='fs-2'>
              Disponibilidad: {publication.count}
            </span>
            {/* <figure className='text-center mt-5'>
              <blockquote className='blockquote fs-4 fst-italic'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus suscipit facere cumque ratione, odio expedita quisquam iusto reprehenderit? Hic ea autem cupiditate ducimus similique molestiae eligendi voluptatibus facere debitis eveniet!</p>
              </blockquote>
              <figcaption className='blockquote-footer fs-5 text-end'>
                Famosa escritora y poeta - <cite>asdasds</cite>
              </figcaption>
            </figure> */}
            <Col>
              <Stack
                direction='horizontal'
                gap={3}
              >
                <div>
                  <Button
                    variant='prueba'
                    onClick={() => updateCount('rest')}
                  >
                    -
                  </Button>
                </div>
                <div className='fs-4 fw-bold'>
                  <span>{counter}</span>
                </div>
                <div>
                  <Button
                    variant='prueba'
                    onClick={() => updateCount('add')}
                  >
                    +
                  </Button>
                </div>
                <div>
                  <Button
                    className='ms-5 fs-4 p-2'
                    size='lg'
                    variant='botoncito'
                    onClick={() => {
                      addToCarrito(
                        id,
                        price,
                        title,
                        image,
                        name,
                        counter
                      )
                    }}
                  >
                    <BsFillCartPlusFill className='me-3 fs-2' />
                    AGREGAR
                  </Button>
                </div>

                <div>
                  <Link to='/Carrito'>
                    <Button
                      className='fs-4 p-2'
                      size='lg'
                      variant='botoncito'
                    >
                      <BsFillCartCheckFill className='me-3 fs-2' />
                      COMPRAR
                    </Button>
                  </Link>
                </div>
              </Stack>
            </Col>
          </Col>
        </Row>

        {/* PEDIDO */}
        {publication ? <ProductDetail publication={publication} /> : null}
        <Preguntas />
        {publication
          ? (
            <RecomendedPublications
              type={publication.type}
              varietal={publication.varietal}
              origin={publication.origin}
            />
            )
          : null}
      </Row>
    </Container>
  )
}
