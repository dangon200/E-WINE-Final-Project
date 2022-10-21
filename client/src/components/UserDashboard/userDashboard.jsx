import { useSelector } from 'react-redux'
/* import { getRecomendedPublications } from '../../store/actions/actions'
import Card from '../Card/Card' */
// import style from './recomendedPublications.module.css'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from '../Card/Card'

export default function DashboardUser () {
  const favorites = useSelector(state => state.favorites)

  return (
    <Container fluid>
      <Row w-75 mx-auto>
        <Col lg-6>
          <h1 className='px-4'>Favoritos</h1>
          <p>kdekdkvfsdkvndsfnv</p>
          <div>
            {favorites
              ? favorites.map((p) => {
                return (
                  <section key={p.id}>
                    <div>
                      <Card
                        id={p.id}
                        title={p.title}
                        name={p.name}
                        image={p.image}
                        price={p.price.toLocaleString('es-MX')}
                        key={p.id}
                      />
                    </div>
                  </section>
                )
              })
              : <h5>No tienes favoritos</h5>}
          </div>
        </Col>
        <Col lg-6>
          <h2>Favoritos</h2>
          <p>kdekdkvfsdkvndsfnv</p>
        </Col>
      </Row>
    </Container>
  )
}
