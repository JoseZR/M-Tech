// import { useState, useEffect, useRef } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import banner1 from '../../../public/img/banner_01.webp'
import banner2 from '../../../public/img/banner_02.webp'
import banner3 from '../../../public/img/banner_03.webp'
import banner4 from '../../../public/img/banner_04.webp'

export function Slider () {
  return (
    <div className='position-relative'>
      <Carousel fade interval={null} controls={false}>
        <Carousel.Item>
          <video className='w-100' controls src='/MTech/img/final_mtech_2023.mp4' poster='/MTech/img/posterVideoMTech2023.webp' loading='lazy' autoPlay muted playsInline />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={banner1}
            alt='M-Tech'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={banner2}
            alt='M-Tech'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={banner3}
            alt='M-Tech'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={banner4}
            alt='M-Tech'
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
