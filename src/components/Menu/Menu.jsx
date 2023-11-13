import { useState } from 'react'
import { Navbar, Nav, Offcanvas, Container, NavDropdown } from 'react-bootstrap'
import logoIGECO from '../../../public/img/igeco_bn.webp'
import logoDeutche from '../../../public/img/deutsche_messe_bn.webp'
import './Menu.css'
import { Link } from 'react-router-dom'
export function Menu () {
  const [show, setShow] = useState()

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  return (
    <>
      <Navbar expand='lg' className='menu py-4'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <a href='https://hfmexico.mx' target='_blank' rel='noopener noreferrer'><img className='img-logos w-100 mx-auto' src={logoIGECO} alt='igeco-mexico-logo' /></a>
            <a href='https://hfmexico.mx' target='_blank' rel='noopener noreferrer'><img className='img-logos w-100 mx-auto' src={logoDeutche} alt='deutsche-messe-logo' /></a>
          </Navbar.Brand>
          <Navbar.Toggle onClick={handleShow} />
          <Navbar.Offcanvas id='responsive-navbar-nav' className='bg-dark' placement='end' show={show}>
            <Offcanvas.Header closeButton onClick={handleClose} data-bs-theme='dark' />
            <Offcanvas.Body className='ms-auto'>
              <Nav className='justify-content-end flex-grow-1 pe-5'>
                <NavDropdown title='GALERIA' renderMenuOnMount disable>
                  <NavDropdown.Item as={Link} to='gallery2023' onClick={handleClose}>EDICION 2023</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='gallery2022' onClick={handleClose}>EDICION 2022</NavDropdown.Item>
                </NavDropdown>
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
