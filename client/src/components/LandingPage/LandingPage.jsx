import style from './landingPage.module.css'
import copa from '../assets/imgs/copa.png'
import teamwork from '../../utils/images/teamwork1.jpg'//eslint-disable-line
import barriles from '../../utils/images/bodegabarriles.jpg'
import { BsCheck2 } from 'react-icons/bs'

import { GiWineBottle } from 'react-icons/gi'
import { BiBookBookmark } from 'react-icons/bi'
import { RiCustomerService2Fill } from 'react-icons/ri'
import logo from '../assets/imgs/arriba.png'

import Button from '../Button/Button.jsx'
import { useEffect } from 'react'
import ReseñasLanding from '../ReseñasLanding/ReseñasLanding'
// import NavBar from '../Nav/Nav.jsx'

export default function LandingPage () {
  const showBtn = () => {
    /* document.getElementById('home').getBoundingClientRect().height */
    if (window.pageYOffset > 100) {
      document.getElementById('toTop').style.display = 'block'
    } else {
      document.getElementById('toTop').style.display = 'none'
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', showBtn)
    return () => window.removeEventListener('scroll', showBtn)
  }, [])

  return (
    <>
      <header id='home' className={style.header}>
        <h1 className={style.h1}>Descrubrí <span>E-wine</span></h1>
        <p className='fs-3'>Acceder a todos sus vinos favoritos nunca ha sido tan fácil</p>
        <div className={style.buttons}>
          <Button link='/about' content='CONOCÉ SOBRE E-WINE' />
          <Button link='/home' content='EXPLORÁ LA TIENDA' />
        </div>
      </header>
      <section className='my-5'>
        <article className={`row align-items-center text-start ${style.cont}`}>
          <img src={copa} alt='copa de vino' className={` mx-5 px-5 col img-fluid d-none d-sm-block ${style.img}`} />
          <div className={`col ${style.details} heigth100 text-center text-sm-start`}>
            <div className='container heigth100 d-flex flex-column justify-content-sm-evenly'>
              <h2 className='row fs-1'>Disfrutá navegando por miles de vinos y haciendo tu elección de manera más cómoda todo en un sólo sitio</h2>

              <div className='row text-start'>
                <p className='fs-2'><span><BsCheck2 /></span>Te conectamos con las mejores bodegas.</p>
                <p className='fs-2'><span><BsCheck2 /></span>Podés seleccionar el vino que quieras.</p>
                <p className='fs-2'><span><BsCheck2 /></span>Revisa las reseñas y las recomendaciones de expertos.</p>
              </div>
            </div>

          </div>
        </article>

        <article className={`row align-items-center text-start mt-4 ${style.cont}`}>
          <div className={`col ${style.details} heigth100 text-center text-sm-end`}>
            <div className='container heigth100 d-flex flex-column justify-content-sm-evenly'>
              <h2 className='row fs-1'> Nuestra plataforma conecta a los consumidores con los proveedores, facilitando la interacción.</h2>
              <div className='row text-start text-sm-end '>
                <p className='fs-2'><span className=' d-sm-none'><BsCheck2 /></span>Conecta a los amantes del vino con sus favoritos.<span className='d-none d-sm-inline'><BsCheck2 /></span></p>
                <p className='fs-2'><span className=' d-sm-none'><BsCheck2 /></span>Recomendaciones por especialistas en el tema.<span className='d-none d-sm-inline'><BsCheck2 /></span></p>
                <p className='fs-2'><span className=' d-sm-none'><BsCheck2 /></span>Accede a descuentos y ofertas de manera rápida.<span className='d-none d-sm-inline'><BsCheck2 /></span></p>
              </div>
            </div>
          </div>
          <img src={barriles} alt='Bodega' className={`mx-5 px-5 col img-fluid d-none d-sm-block ${style.img}`} />
        </article>
      </section>

      <section className={`m-auto container flex-column justify-content-end ${style.sectionCards}`}>

        <ReseñasLanding />
      </section>

      <section className={`container-fluid px-0 text-center text-lg-start  ${style.sectionAboutProject}`}>
        <div className={` row ${style.divAboutProject}`}>
          <div className={`col-12 col-lg-6 ${style.divTeamWork}`}>
            <img src={teamwork} alt={teamwork} className={`img-fluid h-100 ${style.imgAbout}`} />
          </div>
          <div className='col-12 p-5 ps-lg-4 col-lg-6'>
            <h1 className='text-center my-4 '>Sobre el proyecto</h1>
            <div className='mx-5'>
              <p className='fs-2'>
                E-Wines es una plataforma digital de compra y venta de vinos especialmente diseñada para consumidores y tiendas de vinos. Contamos con una sección de reseñas y valoraciones, para usuarios y personas especializadas en el tema.
              </p>
              <p className='fs-2'>
                Nuestra misión es crear un sentido de comunidad y crecer a partir de las necesidades de nuestros clientes.
              </p>
              <p className='fs-2'>
                Actualmente contamos con una aplicación web y está en desarrollo una aplicación móvil para teléfonos celulares. A través de estas herramientas, las tiendas de vinos pueden llegar a su público de una manera más enfocada y fácil, permitiendo el desarrollo del mercado online además del físico.
              </p>
              <p className='fs-2'>
                Es importante destacar que no habría ningún costo adicional para las tiendas por el uso de la herramienta ya que es nuestra intención contribuir a la comunidad de la que formamos parte y visualizarnos como desarrolladores de tecnología. Estamos muy interesados en conocer su opinión sobre esta propuesta y las necesidades del sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`container-fluid py-5 d-flex flex-column ${style.sectionPreFooter}`}>
        <div className='row pb-3'>
          <h2 className='fs-1'>Millones de personas confían en nosotros para encontrar y comprar el vino perfecto una y otra vez
          </h2>
        </div>
        <div className='row '>
          <div className='col-12 col-sm-4 fs-4'>
            <GiWineBottle size={50} />
            <p className=''>Compra en el mercado de vinos más grande del mundo</p>

          </div>
          <div className='col-12 col-sm-4 fs-4'>
            <RiCustomerService2Fill size={50} />
            <p className=''>Nuestro equipo de Atención al Cliente está siempre a tu disposición</p>
          </div>
          <div className='col-12 col-sm-4 fs-4'>
            <BiBookBookmark size={50} />
            <p className=''> Consulta reseñas sinceras sobre cualquier vino antes de comprarlo</p>
          </div>
        </div>
      </section>

      <a href='#h' id='toTop' className={style.icon} onClick={() => window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })}><img className={style.iconImg} src={logo} alt='top' /></a>
    </>
  )
}
