// _______________________CODIGO con estilo________________________

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
// import { MdFavoriteBorder } from 'react-icons/md'
import { FaHeart } from 'react-icons/fa'
import { addCarrito, addFavorites, addQuestion, getByPublication, getQuestions, removeFavorites } from '../../store/actions/actions'
// import Footer from '../Footer/Footer.jsx'
import style from './publicationDetail.module.css'
import RecomendedPublications from '../RecomendedPublications/RecomendedPublications'
import ProductDetail from '../ProductDetail/ProductDetail'
import Question from '../Question/Question'

export default function PublicationDetail (props) {
  const publication = useSelector((state) => state.detailPublication)
  const favorites = useSelector((state) => state.favorites)
  const questions = useSelector(state => state.questions)
  const user = useSelector(state => state.user)
  // const carrito = useSelector((state) => state.carrito)
  const dispatch = useDispatch()
  const { id } = useParams()// props.match.params.id
  const { name, price, title, image } = publication
  const [counter, setCounter] = useState(1)
  const [question, setQuestion] = useState('')

  useEffect(() => {
    dispatch(getByPublication(id))
    dispatch(getQuestions(id))
  }, [dispatch, id])

  const isInFavorites = (id) => {
    return favorites.some(f => f === id)
  }
  const addToCarrito = (id, price, title, image, name, countParam) => {
    if (window.localStorage.hasOwnProperty(id)) { // eslint-disable-line
      console.log('entre al if')
      window.localStorage[id] = JSON.stringify({ ...JSON.parse(window.localStorage[id]), count: (countParam + JSON.parse(window.localStorage[id]).count) })
      dispatch(addCarrito({ id, price, title, image, name, count: JSON.parse(window.localStorage[id]).count }))
    } else {
      console.log('entre al else')
      window.localStorage.setItem(id, JSON.stringify({ price, title, image, name, count: countParam }))
      dispatch(addCarrito({ id, price, title, image, name, count: countParam }))
    }
  }
  const updateCount = (param) => {
    if (param === 'rest' && counter > 1) setCounter(counter - 1)
    if (param === 'add') setCounter(counter + 1)
  }

  return (
    <div className={style.container}>
      <div className={style.cardContainer}>
        {/* Esta es la primera tarjeta */}
        <div className={style.card1}>
          {/* Icono de favorito */}
          <div className={style.iconContainer}>
            <FaHeart
              className={isInFavorites(id) ? style.iconActive : style.icon} onClick={() => {
                isInFavorites(id) ? dispatch(removeFavorites(id)) : dispatch(addFavorites(id))
              }}
            />
          </div>
          {/* Div que contiene la imagen del Product */}
          <div className={style.imageContainer}>
            <img src={image} alt={`${publication.name}`} />
          </div>
        </div>

        {/* Esta es la segunda tarjeta */}
        <div className={style.card2}>
          <div className={style.header}>
            <h1 className={style.h1}>{publication.title}</h1>
            <span>${price}</span>
            <br />
            <span>Stock: {publication.count}</span>
          </div>
          <div className={style.body}>
            {/* PEDIDO */}
            <div className={style.pedido}>
              <button className={style.btnR} onClick={() => updateCount('rest')}> - </button>
              <span>{counter}</span>
              <button className={style.btnS} onClick={() => updateCount('add')}> + </button>
            </div>
            {/* CARRITO */}
            <div className={style.carrito}>
              <button onClick={() => { addToCarrito(id, price, title, image, name, counter) }}>AGREGAR AL CARRITO</button>
              <Link to='/Carrito'>
                <button>COMPRAR AHORA</button>
              </Link>
            </div>
          </div>

        </div>
      </div>
      <div>
        <ProductDetail publication={publication} />
        <div className={style.questionsContainer}>
          {user && user.id !== publication.userId &&
            <div className={style.questionsHeader}>
              <h2>Preguntale al vendedor</h2>
              <div className={style.inputQuestion}>
                <input id='question' className={style.input} type='text' placeholder='Escriba su pregunta...' value={question} onChange={(e) => setQuestion(e.target.value)} />
                <input
                  className={style.inputBtn} type='submit' value='Preguntar' onClick={(e) => {
                    e.preventDefault()
                    if (question === '') {
                      document.getElementById('question').focus()
                    } else {
                      dispatch(addQuestion({
                        userId: user.id,
                        publicationId: publication.id,
                        text: question
                      }))
                      setQuestion('')
                    }
                  }}
                />
              </div>
            </div>}
          {typeof questions === 'string'
            ? <p className={style.message}>{questions}</p>
            : questions.map(r => (
              <Question key={r.id} question={r} publication={publication} user={user} />
            ))}

        </div>

        <RecomendedPublications type={publication.type} varietal={publication.varietal} origin={publication.origin} />
      </div>
    </div>
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
