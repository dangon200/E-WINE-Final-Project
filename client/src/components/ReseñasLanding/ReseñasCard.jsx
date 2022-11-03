import React from 'react'
import s from './Estilos.module.css'

function ReseñasCard ({ id, name, varietal, cellar, img, username, text }) {
  return (
    <div className={`card ${s.card}`}>
      <div className={`row h-100 w-100 g-0 ${s.imgBody}`}>
        <div className='col-md-4'>
          <img src={img} className={`d-block img-fluid rounded-end rounded-4 ${s.image}`} alt='...' />
        </div>
        <div className={`col-md-8 ${s.body}`}>
          <div className='card-body'>
            <h1 className={`card-title fw-bold fs-1 ${s.title}`}>{varietal} - {cellar}</h1>
            <div className={`card-title flex-column align-items-center fs-1 ${s.title}`}>

              <span className='fw-semibold'> "{text}"</span>
              {/* <hr /> */}
              <span className='fw-semibold'>-{username}.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReseñasCard
