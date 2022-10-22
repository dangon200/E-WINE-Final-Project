import { useSelector } from 'react-redux'
/* import { getRecomendedPublications } from '../../store/actions/actions' */
import Card from '../Card/Card'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
/* import CardFavorites from '../CardFavorites/CardFavorites' */
/* import { AiFillHome } from 'react-icons/ai' */
import s from './userFavorites.module.css'
/* import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar' */
/* import NavDropdown from 'react-bootstrap/NavDropdown' */
import Sidebar from '../Sidebar/Sidebar'

export default function UserFavorites () {
  const favorites = useSelector(state => state.favorites)

  return (
    <div className='grid h-100'>
      <Container fluid style={{ height: '100vh' }}>
        <Row className='grid h-100 bg-grey bg-opacity-25'>
          <Col className='col-auto min-vh-100 pt-5 rounded'>
            <Sidebar />
          </Col>
          <Col className={s.container}>
            <h1>Favoritos</h1>
            <div>
              {favorites.length > 0
                ? favorites.map(p => {
                  return (
                    <section key={p.id}>
                      <Card
                        id={p.id}
                        title={p.title}
                        name={p.name}
                        image={p.image}
                        price={p.price}
                        key={p.id}
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
