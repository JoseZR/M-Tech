import React, { useEffect } from 'react'
import './AboutUs.css'
import bot01 from '../../../public/img/bot_01.webp'
import bot02 from '../../../public/img/bot_02.webp'
import Aos from 'aos'
import 'aos/dist/aos.css' // Importa los estilos CSS de AOS
import { Container, Row, Col } from 'react-bootstrap'

export function AboutUs () {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <Container>
      <Container>
        <Row className='pt-5 mt-5 mb-5'>
          <Col xs={12} md={12} lg={12} className='text-center'>
            <p className='title-mtech'>M-Tech 2023</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={12} className='text-center my-3' data-aos='zoom-out' data-aos-delay='300' data-aos-duration='1500'>
            <p className='item-use topic-1 mx-2 my-4 p-4'>¿Te fascina la robótica?</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={12} className='text-center my-3' data-aos='zoom-out' data-aos-duration='1500'>
            <p className='item-use topic-2 mx-2 my-4 p-4'>¿Te gustaría romper los límites de tu imaginación?</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={12} className='text-center my-3' data-aos='zoom-out' data-aos-duration='1500'>
            <p className='item-use topic-3 mx-2 my-4 p-4'>¿Quieres demostrar el poder de tu robot en nuestros desafiantes retos?</p>
          </Col>
        </Row>
      </Container>
      <Container className='my-5'>
        <Row>
          <Col xs={12} md={6} lg={6} className='d-flex justify-content-center py-5 px-5'>
            <img
              src={bot01} alt='igeco-daniela-hernandez' className='img-fluid' data-aos='fade-up' data-aos-anchor-placement='bottom-bottom' data-aos-duration='1000'
            />
          </Col>
          <Col xs={12} md={6} lg={6} className='cont-text-bot text-center py-4 px-5' data-aos='fade-zoom-in' data-aos-easing='ease-in-back' data-aos-delay='200' data-aos-offset='0' data-aos-duration='1000'>
            <div>
              <p>Entonces</p> <br />
              <h2 className='title-bot'> ¡M-Tech 2023 es para ti!</h2><br />
              <p>Desafía al futuro y demuestra tu talento en la segunda edición de la competencia de robótica que el Gobierno del Estado de Guanajuato e Italian German Exhibition Company Mexico organizan para ti</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12} md={6} lg={6} className='card-1 cont-text-bot text-center my-5 py-5 px-5' data-aos='fade-zoom-in' data-aos-easing='ease-in-back' data-aos-delay='200' data-aos-offset='0' data-aos-duration='1000'
          >
            <p>
              Las categorías de M-Tech 2023 te permitirán sobrepasar los límites de tu imaginación, poner a prueba tus habilidades en robótica, crear innovaciones y potenciar tus habilidades blandas
            </p>
          </Col>
          <Col xs={12} md={6} lg={6} className='card-2 d-flex justify-content-center py-5 px-5'>
            <img src={bot02} alt='igeco-daniela-hernandez' className='img-fluid' data-aos='fade-down' data-aos-duration='1000' />
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xs={12} lg={2} />
          <Col xs={12} lg={8} className='text-center my-5 py-3' data-aos='zoom-in' data-aos-duration='1800'>
            <img src='/MTech/img/resultados.webp' alt='mtech-resultados' className='img-resultados w-100' />
          </Col>
          <Col xs={12} lg={2} />
        </Row>
      </Container>
    </Container>
  )
}
