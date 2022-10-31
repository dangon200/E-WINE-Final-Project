import React from 'react'
import s from './about.module.css'
import Button from '../Button/Button.jsx'
import catamos from '../../utils/images/icono_catamos.png'
import elegis from '../../utils/images/elegis.png'
import disfrutas from '../../utils/images/disfrutas.png'
import recibis from '../../utils/images/recibis.png'
// import Container from 'react-bootstrap/esm/Container'
// import Footer from '../Footer/Footer.jsx'

function About () {
  return (
    <div className='container-fluid px-0'>
      <div className={`row ${s.entrega}`}>
        <div className={`row ${s.header}`}>
          <div className={`col-6 ${s.apartado}`}>
            <h1 className={s.h1}>Conocé mas sobre <p className={s.enfasis}>E-Wine</p></h1>
            <h2>Con nuestra variedad, podrás encontrar lo que buscas y recibirlo en el momento oportuno.</h2>
            <Button content='Visitar la tienda' link='/home' />
          </div>
        </div>
        <div className={`row  ${s.entrega}`}>
          <h1 className={s.h1exp}>¿Cómo es la experiencia?</h1>
          <div className={`container d-flex justify-content-center d-grid gap-3 flex-wrap ${s.contenedor}`}>
            <div className={`card mb-3 ${s.box}`}>
              <div className='row g-0'>
                <div className='col-md-4'>
                  <img src={catamos} alt='catamos' className={s.img} />
                </div>
                <div className='col-md-8'>
                  <div className={`card-body ${s.text}`}>
                    <h3 className={`card-title ${s.bigtext}`}>Entras</h3>
                    <p className={`card-text ${s.smalltext}`}>y te ofrecemos los mejores vinos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`card mb-3 ${s.box}`}>
              <div className='row g-0'>
                <div className='col-md-4'>
                  <img src={elegis} alt='elegis' />
                </div>
                <div className='col-md-8'>
                  <div className={`card-body ${s.text}`}>
                    <h3 className={`card-title ${s.bigtext}`}>Elegís</h3>
                    <p className={`card-text ${s.smalltext}`}>el vino que más te guste</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`card mb-3 ${s.box}`}>
              <div className='row g-0'>
                <div className='col-md-4'>
                  <img src={recibis} alt='recibis' />
                </div>
                <div className='col-md-8'>
                  <div className={`card-body ${s.text}`}>
                    <h3 className={`card-title ${s.bigtext}`}>Recibís</h3>
                    <p className={`card-text ${s.smalltext}`}>los vinos en TU CASA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`card mb-3 ${s.box}`}>
              <div className='row g-0'>
                <div className='col-md-4'>
                  <img src={disfrutas} alt='disfrutas' />
                </div>
                <div className='col-md-8'>
                  <div className={`card-body ${s.text}`}>
                    <h3 className={`card-title ${s.bigtext}`}>Disfrutas</h3>
                    <p className={`card-text ${s.smalltext}`}>del mejor vino, descuentas y mucho más</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default About
