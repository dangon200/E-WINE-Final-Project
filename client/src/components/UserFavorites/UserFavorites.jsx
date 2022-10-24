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
    <div className='grid h-100'>
      <Container fluid style={{ height: '100vh' }}>
        <Row className='grid h-100 bg-grey bg-opacity-25'>
          <Col className='col-auto min-vh-100 pt-5 rounded'>
            <Sidebar />
          </Col>
          <Col className={s.container}>
            <h1>Favoritos</h1>
            <Col>
              {favorites.length > 0
                ? favorites.map(p => {
                  return (
                    <section key={p.publicationId}>
                      <Col className='mb-5'>
                        <CardFavorites
                          id={p.publicationId}
                          title={p.title}
                          name={p.name}
                            // price={p.price}
                          description={p.description}
                          key={p.publicationId}
                          image={p.image}
                        />
                      </Col>
                    </section>
                  )
                })
                : null}
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
