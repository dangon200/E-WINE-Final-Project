import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecomendedPublications } from '../../store/actions/actions'
import Card from '../Card/Card'
import Container from 'react-bootstrap/Container'
// import s from './recomendedPublications.module.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
export default function RecomendedPublications (props) {
  const dispatch = useDispatch()
  const recomendedPublication = useSelector((state) => state.recomendedPublication)
  const { type, varietal, origin } = props
  console.log(props)
  useEffect(() => {
    dispatch(getRecomendedPublications(type, varietal, origin))
  }, [dispatch, type, varietal, origin])
  return (
    <Container fluid>
      <Row className='mb-5 mt-5'>
        <h2 className='fs-1 fw-bold' style={{ color: '#890f0d', fontFamily: 'var(--font-family-1)' }}>Recomendados para vos</h2>
        {
            Array.isArray(recomendedPublication) && recomendedPublication.length > 0
              ? recomendedPublication.slice(0, 3).map((p) => {
                return (
                  <Col
                    key={p.id}
                    className='w-100 d-flex justify-content-center align-items-center mb-5 mt-5 rounded'
                  >
                    <Card
                      style={{ 'margin-top': '0' }}
                      id={p.id}
                      title={p.title}
                      name={p.name}
                      image={p.image}
                      price={p.price.toLocaleString('es-MX')}
                      key={p.id}
                      userId={p.userId}
                    />
                  </Col>
                )
              })
              : null
            }
      </Row>
    </Container>
  )
}
