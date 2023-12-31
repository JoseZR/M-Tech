import React from 'react'
import { Container, Navbar, Row, Col } from 'react-bootstrap'
import './Footer.css'
import igeco from '../../../public/img/igeco_bn.webp'
import deutcheMesse from '../../../public/img/deutsche_messe_bn.webp'
import mtech from '../../../public/img/mtech.webp'
import contacto from '../../../public/img/contacto.webp'
import logoGto from '../../../public/img/logo-gto.webp'
export function Footer () {
  return (
    <>
      <Navbar expand='lg' className='menu my-2'>
        <Container className='logos-gob'>
          <img className='img-logos' src={igeco} alt='igeco-mexico' />
          <img className='img-logos' src={deutcheMesse} alt='deutsche-messe' />
          <img className='img-logos-mtech' style={{ width: '120px' }} src={logoGto} alt='guanajuato' />
          <img className='img-logos-mtech' src={mtech} alt='mtech' />
        </Container>
      </Navbar>
      <Container>
        <Row className='text-center px-4'>
          <div className='footer-socialmedia my-1'>
            <strong><h4 className='py-5'>REDES SOCIALES</h4></strong>
            <a href='https://www.facebook.com/profile.php?id=100093439748711' target='_blank' rel='noreferrer'>
              <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <title>Facebook</title>
                <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
              </svg>
            </a>
            <a href='https://www.instagram.com/igeco_providingthefuture/?igshid=MzRlODBiNWFlZA%3D%3D' target='_blank' rel='noreferrer'>
              <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <title>Instagram</title>
                <path d='M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z' />
              </svg>
            </a>
            <a href='https://twitter.com/HannoverFairsM' target='_blank' rel='noreferrer'>
              <svg width='100' height='100' viewBox='0 0 300 300' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                <title>Twitter</title>
                <path d='M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66' />
              </svg>
            </a>
          </div>
        </Row>
      </Container>
      <Container className='mt-4 mb-4 container-contacto'>
        <Row xs={6} md={2} lg={6} className='mx-5 justify-content-md-center'>
          <Col xs={12} md={2} lg={3} />
          <Col xs={12} md={4} lg={2} className='img-contacto py-2 '>
            <img src={contacto} alt='igeco-daniela-hernandez' className='img-fluid' />
          </Col>
          <Col xs={12} md={6} lg={4} className='py-4 tex-contacto'>
            <br /><strong><h5>Leimy Jimenez</h5></strong>
            <p>Especialista de Relaciones Públicas</p>
            <p><a href='mailto:leimy.jimenez@igeco.mx' className='link text-center'>leimy.jimenez@igeco.mx</a></p>
            <p>Tel: +52 55 2660 1388</p>
          </Col>
          <Col xs={12} md={2} lg={3} />
        </Row>
        <div className='footer-language d-flex my-5'>
          <strong>Italian German Exhibition Company</strong>
          <div className='language-option-footer ms-auto' />
        </div>
        <div className='mb-5 menu-footer'>
          <a href='https://hfmexico.mx/aviso-de-privacidad/' target='_blank' rel='noreferrer' className='item-link'>Aviso de privacidad</a>|
          <a href='https://hfmexico.mx/contacto-deutsche-messe/' className='item-link'> Contacto</a>|
          <a href='/MTech/PHP/login.php' className='item-link'>Administrador</a>
        </div>
      </Container>

    </>
  )
}
