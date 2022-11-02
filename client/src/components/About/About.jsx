import React from 'react'
import s from './about.module.css'
// import Button from '../Button/Button.jsx'
/* import catamos from '../../utils/images/icono_catamos.png'
import elegis from '../../utils/images/elegis.png'
import disfrutas from '../../utils/images/disfrutas.png'
import recibis from '../../utils/images/recibis.png' */
// import Footer from '../Footer/Footer.jsx'
import team from '../../utils/images/teamwork1.jpg'
import { AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'
function About () {
  return (
    <div>
      {/* <div className={s.header}>
        <div className={s.apartado}>
          <h1 className={s.h1}>Conocé mas sobre <p className={s.enfasis}>E-Wine</p></h1>
          <h2>Con nuestra variedad, podrás encontrar lo que buscas y recibirlo en el momento oportuno.</h2>
          <Button content='Visitar la tienda' link='/home' />
        </div>
      </div> */}
      <section>
        <img className={s.sectionImage} src={team} alt='equipo' />
      </section>
      <h1 className={s.title}>Conoce nuestro equipo</h1>
      <div className={s.container}>
        <section className={s.cardSection}>
          <div className={s.divCard}>
            <div className={s.card}>
              <img className={s.cardImage} src={team} alt='team' />
              <p className='fs-3 fw-semibold'>Felipe gomez castro</p>
              <span className='fs-4'>Fullstack developer</span>
              <div className='d-flex gap-5 mt-5'>
                <a href='#'><AiOutlineInstagram size={25} color='#484d55' /></a>
                <a href='#'><SiGmail color='#484d55' size={25} /></a>
                <a href='#'><AiOutlineGithub size={25} color='#484d55' /></a>
              </div>
            </div>
          </div>
          <div className={s.divCard}>
            <div className={s.card}>
              <img className={s.cardImage} src={team} alt='team' />
              <p className='fs-3 fw-semibold'>Felipe gomez castro</p>
              <span className='fs-4'>Fullstack developer</span>
              <div className='d-flex gap-5 mt-5'>
                <a href='#'><AiOutlineInstagram size={25} color='#484d55' /></a>
                <a href='#'><SiGmail color='#484d55' size={25} /></a>
                <a href='#'><AiOutlineGithub size={25} color='#484d55' /></a>
              </div>
            </div>
          </div>
          <div className={s.divCard}>
            <div className={s.card}>
              <img className={s.cardImage} src={team} alt='team' />
              <p className='fs-3 fw-semibold'>Felipe gomez castro</p>
              <span className='fs-4'>Fullstack developer</span>
              <div className='d-flex gap-5 mt-5'>
                <a href='#'><AiOutlineInstagram size={25} color='#484d55' /></a>
                <a href='#'><SiGmail color='#484d55' size={25} /></a>
                <a href='#'><AiOutlineGithub size={25} color='#484d55' /></a>
              </div>
            </div>
          </div>
          <div className={s.divCard}>
            <div className={s.card}>
              <img className={s.cardImage} src={team} alt='team' />
              <p className='fs-3 fw-semibold'>Felipe gomez castro</p>
              <span className='fs-4'>Fullstack developer</span>
              <div className='d-flex gap-5 mt-5'>
                <a href='#'><AiOutlineInstagram size={25} color='#484d55' /></a>
                <a href='#'><SiGmail color='#484d55' size={25} /></a>
                <a href='#'><AiOutlineGithub size={25} color='#484d55' /></a>
              </div>
            </div>
          </div>
          <div className={s.divCard}>
            <div className={s.card}>
              <img className={s.cardImage} src={team} alt='team' />
              <p className='fs-3 fw-semibold'>Felipe gomez castro</p>
              <span className='fs-4'>Fullstack developer</span>
              <div className='d-flex gap-5 mt-5'>
                <a href='#'><AiOutlineInstagram size={25} color='#484d55' /></a>
                <a href='#'><SiGmail color='#484d55' size={25} /></a>
                <a href='#'><AiOutlineGithub size={25} color='#484d55' /></a>
              </div>
            </div>
          </div>
          <div className={s.divCard}>
            <div className={s.card}>
              <img className={s.cardImage} src={team} alt='team' />
              <p className='fs-3 fw-semibold'>Felipe gomez castro</p>
              <span className='fs-4'>Fullstack developer</span>
              <div className='d-flex gap-5 mt-5'>
                <a href='#'><AiOutlineInstagram size={25} color='#484d55' /></a>
                <a href='#'><SiGmail color='#484d55' size={25} /></a>
                <a href='#'><AiOutlineGithub size={25} color='#484d55' /></a>
              </div>
            </div>
          </div>
          <div className={s.divCard}>
            <div className={s.card}>
              <img className={s.cardImage} src={team} alt='team' />
              <p className='fs-3 fw-semibold'>Felipe gomez castro</p>
              <span className='fs-4'>Fullstack developer</span>
              <div className='d-flex gap-5 mt-5'>
                <a href='#'><AiOutlineInstagram size={25} color='#484d55' /></a>
                <a href='#'><SiGmail color='#484d55' size={25} /></a>
                <a href='#'><AiOutlineGithub size={25} color='#484d55' /></a>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <div className={s.entrega}>
        <h1 className={s.h1exp}>¿Cómo es la experiencia?</h1>
        <div className={s.contenedor}>
          <div className={s.box}>
            <img src={catamos} alt='catamos' className={s.img} />
            <div className={s.text}>
              <h3 className={s.bigtext}>Entras</h3>
              <p className={s.smalltext}>y te ofrecemos los mejores vinos</p>
            </div>
          </div>
          <div className={s.box}>
            <img src={elegis} alt='elegis' />
            <div className={s.text}>
              <h3 className={s.bigtext}>Elegís</h3>
              <p className={s.smalltext}>el vino que más te guste</p>
            </div>

          </div>
          <div className={s.box}>
            <img src={recibis} alt='recibis' />
            <div className={s.text}>
              <h3 className={s.bigtext}>Recibís</h3>
              <p className={s.smalltext}>los vinos en TU CASA</p>
            </div>
          </div>
          <div className={s.box}>
            <img src={disfrutas} alt='disfrutas' />
            <div className={s.text}>
              <h3 className={s.bigtext}>Disfrutas</h3>
              <p className={s.smalltext}>del mejor vino, descuentas y mucho más</p>
            </div>
          </div>
        </div>
      </div> */}
      {/* <Footer /> */}
    </div>
  )
}

export default About
