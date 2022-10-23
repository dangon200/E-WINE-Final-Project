
import FormSignUp from '../FormSignUp/FormSignUp'
import { useState } from 'react'
import FormLogin from '../FormLogin/FormLogin'//eslint-disable-line
import style from './LoginInit.module.css' //eslint-disable-line

export default function LoginInit () {
  const [form, setForm] = useState(true)
  return (
    <div className='container user-select-none'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <h2 className='text-center text-dark fs-1 mt-5'>{!form ? 'Iniciar sesión' : 'Cree su Cuenta'}</h2>
          <div className='text-center mb-5 text-dark' />
          <div className='card my-5'>

            <div className={`card-body cardbody-color p-lg-5 ${form ? 'd-block' : 'd-none'}`}>

              <div className='text-center'>
                <img
                  src='https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png' className={`img-fluid ${style.profileImagePic} img-thumbnail rounded-circle my-3`}
                  width='200px' alt='profile'
                />
              </div>
              <FormSignUp />
            </div>

            <div className={`card-body cardbody-color p-lg-5 ${!form ? 'd-block' : 'd-none'}`}>
              <div className='text-center'>
                <img
                  src='https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png' className={`img-fluid ${style.profileImagePic} img-thumbnail rounded-circle my-3`}
                  width='200px' alt='profile'
                />
              </div>
              <FormLogin />
            </div>
            <div id='emailHelp' className={`form-text text-center mb-5 text-dark fs-4 ${style.link}`}>
              <p onClick={() => setForm(!form)} href='#' className='text-dark fw-bold'>{!form ? 'No esta Registrado Cree su cuenta!' : 'Iniciar sesión'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
