import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getReviewsAdmin } from '../../store/actions/actions'
import Container from 'react-bootstrap/Container'
// import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ReseñasCard from './ReseñasCard'
import Carousel from 'react-bootstrap/Carousel'
import s from './Estilos.module.css'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
// import Slider from 'react-slick'

function ReseñasLanding () {
  const dispatch = useDispatch()
  const reviews = useSelector(state => state.allReviews)
  useEffect(() => {
    dispatch(getReviewsAdmin())
  }, [])//eslint-disable-line
  return (

    <Container>
      <Row className='mb-5 mt-5 d-flex justify-content-center'>
        <h1 className='fw-bold' style={{ color: '#56070C', fontFamily: 'var(--font-family-1)' }}>Recomendados por expertos </h1>
        <Carousel className={`mb-5 mt-5 d-flex justify-content-end ${s.carousel}`}>
          {
          Array.isArray(reviews) && reviews.length > 0
            ? reviews.map((p) => {
              return (
              // eslint-disable-next-line react/jsx-key
                <Carousel.Item
                  key={p.id}
                  className={`w-100 rounded ${s.cards}`}
                >
                  <ReseñasCard
                    id={p.id}
                    name={p.name}
                    varietal={p.varietal}
                    cellar={p.cellar}
                    img={p.img}
                    text={p.text}
                    username={p.username}
                    key={p.id}
                  />

                </Carousel.Item>
              )
            })
            : null
          }
        </Carousel>
      </Row>
    </Container>

  )
}
export default ReseñasLanding
// <div>
//   <Slider {...settings}>
//     {
//   Array.isArray(reviews) && reviews.length > 0
//     ? reviews.map((p) => {
//       return (
//         // eslint-disable-next-line react/jsx-key
//         <div key={p.id}>
//           <div className='card' style={{ width: '18rem' }}>

//             <img src={p.img} class='card-img-top' alt='...' />

//             <div className='card-body'>
//               <h5 className='card-title'>{p.varietal}' '{p.cellar}</h5>
//               <div className='card-text'>
//                 <span>{p.username}:</span>
//                 <span> {p.text}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )
//     })
//     : null

// }
//   </Slider>
// </div>
