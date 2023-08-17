import { Col, Container, Row } from 'react-bootstrap'
import '../StrategicAllies/StrategicAllies.css'
import explora from '../../../public/img/logos/explora_logo.webp'
import guanajuato from '../../../public/img/logos/seg_logo.webp'
import steam from '../../../public/img/logos/steam_logo.webp'
import andra from '../../../public/img/logos/andra_logo.webp'
import ideaGto from '../../../public/img/logos/idea_gto.webp'
import uniUtg from '../../../public/img/logos/uni_utg.webp'
import uniUpg from '../../../public/img/logos/uni_upg.webp'
export function StrategicAllies () {
  return (
    <>
      <Container className='py-5'>
        <Row className='justify-content-md-center'>
          <Col sm={12} md={12} lg={12} className='text-center my-3'>
            <h2 className='title-aliados'>ALIADOS ESTRATÉGICOS</h2>
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col sm={12} md={4} lg={4}>
            <img className='w-100' src={explora} alt='mtech-robot-fite' loading='lazy' />
          </Col>
          <Col sm={12} md={4} lg={4}>
            <img className='w-100 logo-aliado' src={guanajuato} alt='seg_logo' loading='lazy' />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={4} lg={4} className='p-2'>
            <img className='w-100 logo-aliado' src={ideaGto} alt='idea_guanajuato' loading='lazy' />
          </Col>
          <Col sm={12} md={4} lg={4} className='p-2'>
            <img className='w-100 logo-aliado' src={steam} alt='steam_logo' loading='lazy' />
          </Col>
          <Col sm={12} md={4} lg={4} className='p-2'>
            <img className='w-100 logo-aliado' src={andra} alt='andrea' loading='lazy' />
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col sm={12} md={4} lg={4} className='p-2'>
            <img className='w-100 logo-aliado' src={uniUtg} alt='' loading='lazy' />
          </Col>
          <Col sm={12} md={4} lg={4} className='p-2'>
            <img className='w-100 logo-aliado' src={uniUpg} alt='' loading='lazy' />
          </Col>
        </Row>
      </Container>
    </>

  )
}
