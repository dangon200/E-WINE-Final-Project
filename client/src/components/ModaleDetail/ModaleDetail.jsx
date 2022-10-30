import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getItemsDetails } from '../../store/actions/actions'
import Modal from 'react-bootstrap/Modal'
import s from './ModaleDetail.module.css'

function ModaleDetail (props) {
  const dispatch = useDispatch()
  const items = useSelector(state => state.itemsDetail)
  const [show, setShow] = useState(false)
  const handleChange = () => setShow(!show)

  useEffect(() => {
    dispatch(getItemsDetails(props.buyId))
  }, [dispatch, props.buyId])

  return (
    <>
      <div className={s.button} type='button' onClick={handleChange}>
        {props.buttonText}
      </div>
      <Modal show={show} onHide={handleChange}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {items}
          {/* Esperamos un componente a renderizar en el body del modal sino un texto y caso que no esten tiramos un texto */}
          {props.render ? <props.render /> : props.body ? props.body : 'Debes pasar la data por body o pasar el componente a renderizar'}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModaleDetail
