import { useDispatch, useSelector } from 'react-redux'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import CardSommelierReview from '../CardSommelierReview/CardSommelierReview'
import s from './sommelierReviews.module.css'
import Sidebar from '../Sidebar/Sidebar'
import { useEffect } from 'react'
import { getProductsReviews } from '../../store/actions/actions'

export default function SommelierReviews () {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  useEffect(() => {
    dispatch(getProductsReviews())
  }, [dispatch])
  return (
    <div>
      <Container fluid style={{ height: '100%' }}>
        <Row className='grid h-100 bg-grey bg-opacity-25'>
          <Col className='col-auto min-vh-100 pt-5 rounded'>
            <Sidebar />
          </Col>
          <Col className={s.container}>
            <Row className='mt-5'>
              <h1>Reseñas</h1>
            </Row>
            <div className={s.cont}>
              {products.length > 0
                ? products.map(p => {
                  return (
                    <section className={s.section} key={p.id}>
                      <CardSommelierReview
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        origin={p.origin}
                        cellar={p.cellar}
                        varietal={p.varietal}
                        key={p.id}
                        image={p.img}
                        reviews={p.reviews}
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
