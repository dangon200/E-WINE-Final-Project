import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeCarrito } from '../../store/actions/actions'
// import { useSelector } from 'react-redux'
import Counter from '../Counter/Counter'
import s from './itemCarrito.module.css'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/esm/Button'

export default function ItemCarrito (props) {
  const { id, title, price, count, image, name, stock } = props
  const dispatch = useDispatch()
  // const countItemCarrito=useSelector

  const removeFromCarrito = (id) => {
    window.localStorage.removeItem(id)
    dispatch(removeCarrito(id))
  }
  return (
    <div className={s.container}>
      <Row className='w-75 bg-light p-4 border-bottom rounded-4 fs-4'>
        <Row>
          <Col className={s.image}>
            <img className='img-fluid' src={image} alt={image} />
          </Col>
          <Col className='d-flex flex-column justify-content-center align-items-left ms-4'>
            <Row className='fs-2'>{title}</Row>
            <Row className='fw-bold'>{name}</Row>
          </Col>
          <Col className='d-flex justify-content-center align-items-center'>
            ${price}
          </Col>
          <Col className='d-flex align-items-center'>
            <Counter
              id={id}
              title={title}
              price={price}
              image={image}
              name={name}
              countFromPub={count}
              stock={stock}
            />
          </Col>
          <Col className='d-flex flex-column gap-3'>
            <Row>
              <Button className={s.button} onClick={() => { removeFromCarrito(id) }}>
                Eliminar
              </Button>
            </Row>
            <Row>
              <Button className={s.button2}>
                <Link className='text-decoration-none text-dark' to={`/publication/${id}`}>
                  Ver producto
                </Link>
              </Button>
            </Row>
          </Col>
        </Row>
      </Row>
    </div>
  )
}
