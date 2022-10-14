import style from './landingPage.module.css'
import React from 'react'
import Footer from '../Footer/Footer.jsx'
import bodega from '../assets/imgs/bodega.png'
import copa from '../assets/imgs/copa.png'
import { BsCheck2 } from 'react-icons/bs'

import Button from '../Button/Button.jsx'
// import NavBar from '../Nav/Nav.jsx'

export default function LandingPage () {
  return (
    <>
      <header className={style.header}>
        <h1 className={style.h1}>Descrubrí <span>E-wine</span></h1>
        <p className={style.p}>Acceder a todos sus vinos favoritos nunca ha sido tan fácil</p>
        <div className={style.buttons}>
          <Button link='/about' content='CONOCÉ SOBRE E-WINE' />
          <Button link='/home' content='EXPLORÁ LA TIENDA' />
        </div>
      </header>

      <section className={style.section}>

        <article>
          <img src={copa} alt='copa de vino' className={style.img} />
          <div className={style.details}>
            <h2>Disfrutá navegando por miles de vinos y haciendo tu elección de manera más cómoda todo en un sólo sitio</h2>

            <p><span><BsCheck2 /></span>Te conectamos con las mejores bodegas.</p>
            <p><span><BsCheck2 /></span>Podés seleccionar el vino que quieras.</p>
            <p><span><BsCheck2 /></span>Revisa las reseñas y las recomendaciones de expertos.</p>
          </div>

        </article>

        <article>
          <div className={style.details}>
            <h2> Nuestra plataforma conecta a los consumidores con los proveedores, facilitando la interacción.</h2>

            <p><span><BsCheck2 /></span>Conecta a los amantes del vino con sus favoritos.</p>
            <p><span><BsCheck2 /></span>Recomendaciones por especialistas en el tema.</p>
            <p><span><BsCheck2 /></span>Accede a descuentos y ofertas de manera rápida.</p>

          </div>
          <img src={bodega} alt='Bodega' className={style.img} />
        </article>

      </section>

      <section className={style.sectionCards}>
        <h2>Recomendados por expertos</h2>
        <article className={style.gridCards}>
          <div className={style.card}>
            <img src={copa} alt='fakeImg' className={style.cardImg} />
            <section>
              <h4>Dars ishlanma</h4>
              <p>Xalqaro tajribalarga asoslangan, ilgor interfaol metodlar bilan otilgan yuqori saviyadagi bir soatlik namuanali dars yoki togarak mashguloti ishlanmasidir.</p>
            </section>

          </div>
          <div className={style.card}>
            <img src={copa} alt='fakeImg' className={style.cardImg} />
            <section>
              <h4>Dars ishlanma</h4>
              <p>Xalqaro tajribalarga asoslangan, ilgor interfaol metodlar bilan otilgan yuqori saviyadagi bir soatlik namuanali dars yoki togarak mashguloti ishlanmasidir.</p>
            </section>
          </div>
          <div className={style.card}>
            <img src={copa} alt='fakeImg' className={style.cardImg} />
            <section>
              <h4>Dars ishlanma</h4>
              <p>Xalqaro tajribalarga asoslangan, ilgor interfaol metodlar bilan otilgan yuqori saviyadagi bir soatlik namuanali dars yoki togarak mashguloti ishlanmasidir.</p>
            </section>
          </div>
        </article>
      </section>
      <span>------------------------------------------</span>
      <div>
        <Footer />
      </div>
    </>
  )
}
