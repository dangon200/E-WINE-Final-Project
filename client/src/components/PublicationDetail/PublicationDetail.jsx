// import style from './publicationDetail.module.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getByPublication } from '../../store/actions/actions'
import NavBar from '../Nav/Nav.jsx'
import Footer from '../Footer/Footer.jsx'

export default function PublicationDetail () {
  const publication = useSelector((state) => state.detailPublication)
  const dispatch = useDispatch()

  useEffect((id) => {
    dispatch(getByPublication(id))
  }, [dispatch])

  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div>
        <h1>PUBLICATION DETAILS</h1>
      </div>

      {publication.length > 0
        ? (
          <div>
            <div>
              <p>Name: publication[0].name</p>
              <img src='acá tenemos la imagen' alt='imagen' />
              <p>Price: publication[0].price</p>
              <p>Count: publication[0].count</p>
              <p>Description: publication[0].description</p>
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
