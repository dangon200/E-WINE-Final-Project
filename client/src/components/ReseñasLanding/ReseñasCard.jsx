import React from 'react'
import s from './Estilos.module.css'

function ReseñasCard ({ id, name, varietal, cellar, img, username, text }) {
  return (
    <div className='card mb-3 w-100 border-0 h-50'>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img src={img} className={`d-block img-fluid rounded-start ${s.image}`} alt='...' />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h1 className={`card-title fs-1 ${s.title}`}>{varietal} - {cellar}</h1>
            <div className={`card-title flex-column align-items-center fs-1 ${s.title}`}>

              <span> "{text}"</span>
              {/* <hr /> */}
              <span>-{username}.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReseñasCard
