import { useSelector } from 'react-redux'
/* import { getRecomendedPublications } from '../../store/actions/actions' */
import Card from '../Card/Card'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
/* import Favorites from '../Favorites/Favorites' */
/* import { AiFillHome } from 'react-icons/ai' */
/* import s from './userDashboard.module.css' */
/* import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar' */
/* import NavDropdown from 'react-bootstrap/NavDropdown' */
import Sidebar from '../Sidebar/Sidebar'

export default function DashboardUser () {
  const favorites = useSelector(state => state.favorites)

  return (
    <div className='grid h-100'>
      <Container fluid style={{ height: '100vh' }}>
        <Row className='grid h-100 bg-grey bg-opacity-25'>
          <Col className='col-auto min-vh-100 pt-5 rounded'>
            {/* <ul>
              <li>
                <a href='/' className='nav-link pe-3 d-flex align-items-center'><AiFillHome size={20} className='me-3' /><span className='fs-3'>Home</span></a>
              </li>
            </ul>
            <ul className='mt-5'>
              <li>
                <a href='/' className='nav-link pe-4 d-flex align-items-center'><AiFillHome size={20} className='me-3' /><span className='fs-3'>Home</span></a>
              </li>
            </ul>
            <ul className='mt-5'>
              <li>
                <a href='/' className='nav-link pe-4 d-flex align-items-center'><AiFillHome size={20} className='me-3' /><span className='fs-3'>Home</span></a>
              </li>
            </ul>
            <ul className='mt-5'>
              <li className='d-flex justifify-content-center align-items-center'>
                <AiFillHome size={20} className='me-3' />
                <NavDropdown className='fs-3' title='Link' id='navbarScrollingDropdown'>
                  <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
                  <NavDropdown.Item href='#action4'>
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action5'>
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
            </ul>
            <ul className='mt-5'>
              <li>
                <a href='/' className='nav-link pe-4 d-flex align-items-center'><AiFillHome size={20} className='me-3' /><span className='fs-3'>Home</span></a>
              </li>
            </ul> */}
            <Sidebar />
          </Col>
          <Col className='bg-light text-dark pt-5 w-100'>
            <h1>Favoritos</h1>
            <p>kdekdkvfsdkvndsfnv</p>
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
