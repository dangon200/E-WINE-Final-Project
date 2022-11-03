import React from 'react'
import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import Counter from '../Counter/Counter'
import s from './itemModaleBuy.module.css'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

export default function ItemModaleBuy (props) {
  const { id, title, price, count, image, name } = props
  // const countItemCarrito=useSelector
  return (
    <div className={s.container}>
      <div className={`row border-bottom border-2 fs-4 ${s.item}`}>
        <Row>
          <Col>
            <img className={s.image} src={image} alt={image} />
          </Col>
          <Col className='d-flex flex-column col-4 justify-content-center align-items-left ms-4'>
            <Row className='fs-3 text-start'>{title}</Row>
            <Row className='fw-bold'>{name}</Row>
            <Row><span className='fs-3 fw-semibold text-start pt-5'>$ {price}</span></Row>
          </Col>
          <Col className='d-flex flex-column gap-3 justify-content-center align-items-center'>
            <Row><Counter id={id} title={title} price={price} image={image} name={name} countFromPub={count} /></Row>
          </Col>
          <Col className={`d-flex gap-5 justify-content-center align-items-end ${s.eliminar}`}>
            <Row>
              <button className={s.button2}>
                <Link className='text-decoration-none text-dark' to={`/publication/${id}`}>
                  Ver producto
                </Link>
              </button>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}
