import { useSelector } from 'react-redux'
// import { getPublicationsUserFavorites } from '../../store/actions/actions'
/* import Card from '../Card/Card' */
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import CardFavorites from '../CardFavorites/CardFavorites'
// import { useEffect } from 'react'
/* import { AiFillHome } from 'react-icons/ai' */
import s from './userFavorites.module.css'
/* import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar' */
/* import NavDropdown from 'react-bootstrap/NavDropdown' */
import Sidebar from '../Sidebar/Sidebar'

export default function UserFavorites ({ id }) {
  // const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites)
  // const ids = favorites.map((f) => f.publicationId)

  /* useEffect(() => {
    dispatch(getPublicationsUserFavorites(ids))
  }, [dispatch, id]) */

  console.log(favorites)

  return (
    <div>
      <Container fluid style={{ height: '100%' }}>
        <Row className='grid h-100 bg-grey bg-opacity-25'>
          <Col className='col-auto min-vh-100 pt-5 rounded'>
            <Sidebar />
          </Col>
          <Col className={s.container}>
            <Row className='mt-5'>
              <h1>Favoritos</h1>
            </Row>
            <div className={s.cont}>
              {favorites.length > 0
                ? favorites.map(p => {
                  return (
                    <section className={s.section} key={p.publicationId}>
                      <CardFavorites
                        id={p.publicationId}
                        title={p.title}
                        name={p.name}
                            // price={p.price}
                        key={p.publicationId}
                        image={p.image}
                      />
                    </section>
                  )
                })
                : null}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
