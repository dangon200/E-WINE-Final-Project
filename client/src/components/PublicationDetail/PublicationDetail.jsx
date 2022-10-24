/* eslint-disable no-prototype-builtins */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'

import { FaHeart } from 'react-icons/fa'

import { addCarrito, addFavorites, getByPublication, getQuestions, removeFavorites } from '../../store/actions/actions'
/* import Question from '../Question/Question' */

import ProductDetail from '../ProductDetail/ProductDetail'
import Preguntas from '../Preguntas/Preguntas.jsx'
import RecomendedPublications from '../RecomendedPublications/RecomendedPublications'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Carousel from 'react-bootstrap/Carousel'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { BsFillCartPlusFill, BsFillCartCheckFill } from 'react-icons/bs'
import style from './publicationDetail.module.css'

export default function PublicationDetail (props) {
  const publication = useSelector((state) => state.detailPublication)
  const favorites = useSelector((state) => state.favorites)
  const questions = useSelector(state => state.questions)
  /* const user = useSelector(state => state.user) */
  // const carrito = useSelector((state) => state.carrito)
  const dispatch = useDispatch()
  const { id } = useParams() // props.match.params.id
  const { name, price, title, image, count } = publication
  const [counter, setCounter] = useState(1)
  /* const [question, setQuestion] = useState('') */

  useEffect(() => {
    dispatch(getByPublication(id))
    dispatch(getQuestions(id))
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
        <Row xs={1} sm={2} md={2} className='mt-5 rounded mx-auto shadow-lg'>
          <Col>
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
            <span className='fs-2 pb-5'>Precio: ${price?.toLocaleString('MX')}</span>
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
            <Row>
              {/* md={10} lg xl={8} xxl={9} */}
              <Col>
                <Stack
                  direction='horizontal'
                  gap={1}
                >
                  <Button
                    variant='prueba'
                    onClick={() => updateCount('rest')}
                    className='ms-4'
                  >
                    -
                  </Button>
                  <span className='fs-4 fw-bold'>
                    {counter}
                  </span>
                  <Button
                    variant='prueba'
                    onClick={() =>
                      counter < count &&
                      updateCount('add')}
                  >
                    +
                  </Button>
                  <Col>
                    <Button
                      className='ms-2 fs-4 p-2'
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
                  </Col>
                  <Col>
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
                  </Col>
                </Stack>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* PEDIDO */}
        {publication ? <ProductDetail publication={publication} /> : null}
        <Preguntas questions={questions} publication={publication} />
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

/* // ________________CODIGO 1 con lo nuevo de Lauti________________________
// import { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useParams, Link } from 'react-router-dom'
// import { MdFavoriteBorder } from 'react-icons/md'
// import { addCarrito, addFavorites, getByPublication, removeFavorites } from '../../store/actions/actions'
// // import Footer from '../Footer/Footer.jsx'
// import style from './publicationDetail.module.css'
// import RecomendedPublications from '../RecomendedPublications/RecomendedPublications'
// import ProductDetail from '../ProductDetail/ProductDetail'

// export default function PublicationDetail (props) {
//   const publication = useSelector((state) => state.detailPublication)
//   const favorites = useSelector((state) => state.favorites)
//   // const carrito = useSelector((state) => state.carrito)
//   const dispatch = useDispatch()
//   const { id } = useParams()// props.match.params.id
//   const [count, setCount] = useState(1)

//   useEffect(() => {
//     dispatch(getByPublication(id))
//   }, [dispatch, id])

//   const isInFavorites = (id) => {
//     return favorites.some(f => f === id)
//   }
//   const addToCarrito = (id, countParam) => {
//     for (let i = 0; i < countParam; i++) {
//       const key = window.localStorage.length
//       window.localStorage.setItem(key, id)
//       dispatch(addCarrito(id))
//     }
//   }
//   const updateCount = (param) => {
//     if (param === 'rest' && count > 1) setCount(count - 1)
//     if (param === 'add') setCount(count + 1)
//   }
//   return (
//     <>

//       <div className={style.publication}>
//         <div className='image'>
//           <img src={publication.img} alt={`${publication.name}`} />
//         </div>
//         <div className={style.name}>
//           <h1>{publication.name}</h1>
//           <span>{publication.price}</span>
//           <span>{publication.count}</span>
//         </div>
//         {/* FAVORITES */
//         <div className={style.iconContainer}><MdFavoriteBorder
//           className={isInFavorites(id) ? style.iconActive : style.icon} onClick={() => {
//             isInFavorites(id) ? dispatch(removeFavorites(id)) : dispatch(addFavorites(id))
//
//
//         </div>
//         {/* PEDIDO */}
//         <div className={style.pedido}>
//           <button onClick={() => updateCount('rest')}> - </button>{count}<button onClick={() => updateCount('add')}> + </button>
//         </div>
//         {/* CARRITO */}
//         <div className={style.carrito}>
//           <button onClick={() => { addToCarrito(id, count) }}>Agregar al Carrito</button>
//         </div>
//         {/* COMPRAR AHORA */}
//         <div className={style.buyNow}>
//           <Link to='/Carrito'>
//             <button>Comprar ahora</button>
//           </Link>
//         </div>
//       </div>
//       {publication ? <RecomendedPublications type={publication.type} varietal={publication.varietal} origin={publication.origin} /> : null}
//       {publication ? <ProductDetail publication={publication} /> : null}
//       {/* <Footer /> */}
//     </>
//   )
// }

// _______________________CODIGO 1 Margje________________________
// <div>
//   <h1>PUBLICATION DETAILS</h1>
// </div>
// {publication
//   ? (
//     <div>
//       <div>
//         <p>Name: {publication.name}</p>
//         <p>Count: {publication.count}</p>
//         <img src={publication.img} alt='imagen' />
//         <p>Price: {publication.price}</p>
//         <p>Count: {publication.count}</p>
//         <p>Description: {publication.description}</p>
//         <p>Type: {publication.type}</p>
//         <p>Type: {publication.varietal}</p>
//         <p>Type: {publication.origin}</p>
//       </div>
//       <div>
//         <button>Add to cart</button>
//       </div>
//       <div>
//         <button>Buy now</button>
//       </div>
//       <div>
//         <p>incluir componente Reseñas</p>
//       </div>
//       <div>
//         <p>incluir componente Preguntas</p>
//       </div>
//     </div>)
//   : (
//     <div>
//       <h1>Loading...</h1>
//     </div>)} */
