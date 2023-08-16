import { Container } from 'react-bootstrap'
import '../Dates/Dates.css'

export function Dates () {
  return (
    <Container fluid className='container-sedes py-4'>
      <div className='container-sedes-hijo'>
        <br /><br /><br />
        <center>
          <h2 className='title-category'>SEDES Y FECHAS</h2>
        </center>
        <div className='card-padre' data-aos='fade-up' data-aos-delay='100' data-aos-duration='1000'>
          <div className='myCard '>
            <div className='innerCard'>
              <div className='frontSide'>
                <p className='title'> Silao, Gto.</p>
              </div>
              <div className='backSide'>
                <p className='title'> - UPB - <br />Universidad Politécnica del Bicentenario</p>
                <p className='sede-fecha'>14 de septiembre</p>
                <p>Carr. Nacional Romita Km. 2, <br /> Mexico 84, San Juan los Durán<br /> 36172 Silao. </p>
              </div>
            </div>
          </div>
          <div className='myCard'>
            <div className='innerCard'>
              <div className='frontSide'>
                <p className='title'>Cortazar, Gto.</p>
              </div>
              <div className='backSide'>
                <p className='title'> - UPG - <br /> Universidad Politécinca de Guanajuato</p>
                <p className='sede-fecha'>19 de septiembre</p>
                <p> Avenida Universidad Sur #1001<br />Comunidad Juan Alonso,<br /> 38496 Cortazar.</p>
              </div>
            </div>
          </div>
          <div className='myCard'>
            <div className='innerCard'>
              <div className='frontSide'>
                <p className='title'>Dolores Hidalgo, Gto.</p>
              </div>
              <div className='backSide'>
                <p className='title'> - UTNG - <br />Universidad Tecnológica del Norte de Guanajuato</p>
                <p className='sede-fecha'>26 de septiembre</p>
                <p>Educación Tecnológica 34,<br /> Fracc. Universidad, 37800 <br />Dolores Hidalgo, Gto.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='myCard2' data-aos='zoom-in' data-aos-easing='linear' data-aos-duration='500'>
          <div className='innerCard'>
            <div className='frontSide'>
              <p className='title fase-final'>FASE FINAL</p>
              <p className='fase-final-lugar'>León - 05 octubre - 2023</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
