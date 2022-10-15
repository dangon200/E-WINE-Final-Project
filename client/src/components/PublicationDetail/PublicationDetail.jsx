// import style from './publicationDetail.module.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getByPublication } from '../../store/actions/actions'
import Footer from '../Footer/Footer.jsx'
// import { useParams } from 'react-router-dom'

export default function PublicationDetail (props) {
  const publication = useSelector((state) => state.detailPublication)
  const dispatch = useDispatch()
  const { id } = useParams()// props.match.params.id

  useEffect(() => {
    dispatch(getByPublication(id))
  }, [dispatch, id])

  return (
    <div>

      <div>
        <h1>PUBLICATION DETAILS</h1>
      </div>

      {publication
        ? (
          <div>
            <div>
              <p>Name: {publication.name}</p>
              <p>Count: {publication.count}</p>
              <img src={publication.img} alt='imagen' />
              <p>Price: {publication.price}</p>
              <p>Count: {publication.count}</p>
              <p>Description: {publication.description}</p>
              <p>Type: {publication.type}</p>
              <p>Type: {publication.varietal}</p>
              <p>Type: {publication.origin}</p>
            </div>
            <div>
              <button>Add to cart</button>
            </div>
            <div>
              <button>Buy now</button>
            </div>
            <div>
              <p>incluir componente Reseñas</p>
            </div>
            <div>
              <p>incluir componente Preguntas</p>
            </div>
          </div>)
        : (
          <div>
            <h1>Loading...</h1>
          </div>)}

      <div>
        <Footer />
      </div>
    </div>
  )
}
