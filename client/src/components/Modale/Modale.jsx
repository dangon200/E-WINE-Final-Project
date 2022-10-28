import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import style from './Modale.module.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Modale (props) {
  const login = useSelector(state => state.login)
  useEffect(() => { handleChange() }, [login]) //eslint-disable-line
  const [show, setShow] = useState(login)
  const handleChange = () => setShow(!show)

  return (
    <>
      <div className={!props.styleButton ? `${style.navlink}` : ''} type='button' onClick={handleChange}>
        {props.buttonText}
      </div>

      <Modal show={show} onHide={handleChange}>

        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* Esperamos un componente a renderizar en el body del modal sino un texto y caso que no esten tiramos un texto */}
          {props.render ? <props.render /> : props.body ? props.body : 'Debes pasar la data por body o pasar el componente a renderizar'}
        </Modal.Body>

        <Modal.Footer className='d-flex w-100 flex-column justify-content-center align-items-center gap-5'>
          <div className='text-start fs-4 me-5 pe-5'>
            Olvidaste tu contraseña?
          </div>
          <div className='text-end ms-5'>
            {props.close && <Button variant='secondary' onClick={handleChange}>Cerrar</Button>}
            {props.createAcc && <p className='fs-4' data-bs-dismiss='modal' onClick={handleChange}>Si no tienes cuenta <Link className='text-decoration-none' to='/register'> Crea tu Cuenta!</Link></p>}
          </div>
          {/* {props.close && <Button variant='secondary' onClick={handleChange}>Cerrar</Button>}
          {props.createAcc && <p className='fs-4' data-bs-dismiss='modal' onClick={handleChange}>Si no tienes cuenta <Link className='text-decoration-none' to='/register'>Crea tu Cuenta!</Link></p>} */}
        </Modal.Footer>
      </Modal>
    </>
  )
}
