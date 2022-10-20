import React from 'react'
import bebiendo from '../assets/imgs/bebiendo.jpg'
import bebiendo2 from '../assets/imgs/bebiendo2.jpg'
import bebiendo3 from '../assets/imgs/bebiendo3.jpg'
import style from './carousel.module.css'
export default function Carousel () {
  return (
    <div id='carouselExampleCaptions' className={`carousel slide ${style.cont}`} data-bs-ride='true'>
      <div className='carousel-indicators'>
        <button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1' />
        <button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='1' aria-label='Slide 2' />
        <button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='2' aria-label='Slide 3' />
      </div>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img src={bebiendo3} className='d-block w-100' alt='...' />
          <div className='carousel-caption d-none d-md-block'>
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className='carousel-item'>
          <img src={bebiendo} className='d-block w-100' alt='...' />
          <div className='carousel-caption d-none d-md-block'>
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className='carousel-item'>
          <img src={bebiendo2} className='d-block w-100' alt='...' />
          <div className='carousel-caption d-none d-md-block'>
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide='prev'>
        <span className='carousel-control-prev-icon' aria-hidden='true' />
        <span className='visually-hidden'>Previous</span>
      </button>
      <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide='next'>
        <span className='carousel-control-next-icon' aria-hidden='true' />
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  )
}
