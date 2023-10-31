import { Navbar, Nav, Offcanvas, Container } from 'react-bootstrap'
import logoIGECO from '../../../public/img/igeco_bn.webp'
import logoDeutche from '../../../public/img/deutsche_messe_bn.webp'
import './Menu.css'
export function Menu () {
  return (
    <>
      <Navbar expand='lg' className='menu py-4'>
        <Container>
          <a href='https://hfmexico.mx' target='_blank' rel='noopener noreferrer'><img className='img-logos img-fluid w-100 mx-auto' src={logoIGECO} alt='igeco-mexico-logo' /></a>
          <a href='https://hfmexico.mx' target='_blank' rel='noopener noreferrer'><img className='img-logos img-fluid w-100 mx-auto' src={logoDeutche} alt='deutsche-messe-logo' /></a>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Offcanvas id='responsive-navbar-nav' className='bg-dark' placement='end'>
            <Offcanvas.Header closeButton data-bs-theme='dark' />
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-5'>
                <Nav.Link className='options' href='https://hfmexico.mx/about-igeco' target='_blank'>¿QUIÉNES SOMOS?</Nav.Link>
                <Nav.Link className='options' href='https://hfmexico.mx' target='_blank'>NUESTROS EVENTOS</Nav.Link>
                <Nav.Link className='options' href='https://hfmexico.mx/messe-events/' target='_blank'>MESSE EVENTS</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}
