import { Button, Col, Container, Row } from 'react-bootstrap'
import '../Category/Category.css'
import robot01 from '../../../public/img/robots/robot_fite.webp'
export function Category () {
  return (
    <>
      <Container className='btn-container'>
        <a className='link_pdf d-grid w-100 h-100' href='/MTech/convocatorias/Convocatoria M-Tech 2023.pdf' target='_blank'>
          <Button className='hoverEffect button-convocatoria' variant='primary' size='lg'>
            <span className='text-convocatoria'>Consulta la Convocatoria</span>
          </Button>
        </a>
      </Container>
      <Container>
        <div className='categorias-padre'>
          <Row className='justify-content-center'>
            <Col xs={12} md={12} lg={12}>
              <p className='title-category text-center'>CATEGORÍAS</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={12} className='justify-content-center'>
              <div className='categoria-hijo my-5'>
                <div className='categoria-nieto mx-5'>
                  <h4 className='titulo-categoria'>SUMO AUTÓNOMO </h4>
                  <p className='info-categoria'>Combate entre dos robots autónomos en un área
                    denominada Dojo, para ganar se debe lograr que el robot oponente salga primero de la
                    zona de lucha
                  </p>
                  <a href='/MTech/convocatorias/Reglamento Sumo.pdf' target='_blank'>
                    <button className='btn-reglamento-autonomo'>REGLAMENTO SUMO AUTÓNOMO</button><br />
                  </a>
                </div>
                <div className='position-img categoria-nieto categoria-img'>
                  <img className='img-categoria-robot' src={robot01} alt='mtech-robot-fite' loading='lazy' />
                </div>
              </div>
              <div className='categoria-hijo my-5'>
                <div className='position-img categoria-img'>
                  <img className='img-categoria-robot' src='img/robots/robot_buil.webp' alt='mtech-robot-buil' loading='lazy' />
                </div>
                <div className='categoria-nieto mx-5'>
                  <h4 className='titulo-categoria'>M-TECH INNOVATIONS</h4>
                  <p className='info-categoria'>Desarrolla un proyecto robótico que optimice
                    actividades cotidianas o ayude a resolver problemáticas del mundo real
                  </p>
                  <a href='/MTech/convocatorias/Reglamento M-Tech Innovations.pdf' target='_blank'>
                    <button className='btn-reglamento-autonomo'>REGLAMENTO INNOVATIONS</button>
                  </a>
                </div>
              </div>
              <div className='categoria-hijo my-5'>
                <div className='categoria-nieto mx-5'>
                  <h4 className='titulo-categoria'>RALLY DE ROBOINSECTOS</h4>
                  <p className='info-categoria'>Compite en una carrera entre robots autónomos, en una pista de
                    competencia con obstáculos, los robots deberán recorrer el camino simulando el
                    movimiento de un insecto
                  </p>
                  <a href='/MTech/convocatorias/Reglamento Rally Roboinsectos.pdf' target='_blank'>
                    <button className='btn-reglamento-autonomo'>REGLAMENTO RALLY</button><br />
                  </a>
                </div>
                <div className='position-img categoria-nieto categoria-img'>
                  <img className='img-categoria-robot' src='img/robots/robot_race.webp' alt='mtech-robot-race' loading='lazy' />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}
