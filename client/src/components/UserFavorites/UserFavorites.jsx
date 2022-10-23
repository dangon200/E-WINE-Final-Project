import { useSelector } from 'react-redux'
/* import { getFavorites } from '../../store/actions/actions' */
/* import Card from '../Card/Card' */
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import CardFavorites from '../CardFavorites/CardFavorites'
/* import { useEffect } from 'react' */
/* import { AiFillHome } from 'react-icons/ai' */
import s from './userFavorites.module.css'
/* import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar' */
/* import NavDropdown from 'react-bootstrap/NavDropdown' */
import Sidebar from '../Sidebar/Sidebar'

export default function UserFavorites () {
  const favorites = useSelector(state => state.favorites)

  console.log(favorites)

  return (
    <div className='grid h-100'>
      <Container fluid style={{ height: '100vh' }}>
        <Row className='grid h-100 bg-grey bg-opacity-25'>
          <Col className='bg-light col-auto min-vh-100 pt-5 rounded'>
            <Sidebar />
          </Col>
          <Col className={s.container}>
            <h1>Favoritos</h1>
            <Row>
              <div>
                {favorites.length > 0
                  ? favorites.map(p => {
                    return (
                      <section key={p.publicationId}>
                        <Col className='mb-5'>
                          <CardFavorites
                            id={p.publicationId}
                            title={p.title}
                            name={p.name}
                            price={p.price}
                            key={p.publicationId}
                          />
                        </Col>
                      </section>
                    )
                  })
                  : null}
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
