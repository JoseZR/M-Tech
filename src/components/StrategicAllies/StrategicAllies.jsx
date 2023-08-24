import { Col, Container, Row } from 'react-bootstrap'
import '../StrategicAllies/StrategicAllies.css'
// import explora from '../../../public/img/logos/explora_logo.webp'
// import guanajuato from '../../../public/img/logos/seg_logo.webp'
// import steam from '../../../public/img/logos/steam_logo.webp'
// import andra from '../../../public/img/logos/andra_logo.webp'
// import ideaGto from '../../../public/img/logos/idea_gto.webp'
// import uniUtg from '../../../public/img/logos/uni_utg.webp'
// import uniUpg from '../../../public/img/logos/uni_upg.webp'
// import uniUpb from '../../../public/img/logos/uni_upb.webp'
// import leon from '../../../public/img/logos/leon-logo.webp'
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
            <img className='w-100' src='/MTech/img/logos/explora_logo.webp' alt='explora' loading='lazy' />
          </Col>
          <Col sm={12} md={4} lg={4}>
            <img className='w-100 logo-aliado' src='/MTech//img/logos/seg_logo.webp' alt='seg_logo' loading='lazy' />
          </Col>
          <Col sm={12} md={4} lg={4}>
            <img className='w-100 logo-aliado' src='/MTech//img/logos/leon-logo.webp' alt='leon_logo' loading='lazy' />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={4} lg={4} className='p-2'>
            <img className='w-100 logo-aliado' src='/MTech/img/logos/idea_gto.webp' alt='idea-guanajuato' loading='lazy' />
          </Col>
          <Col sm={12} md={4} lg={4} className='p-2'>
            <img className='w-100 logo-aliado' src='/MTech//img/logos/steam_logo.webp' alt='steam-logo' loading='lazy' />
          </Col>
          <Col sm={12} md={4} lg={4} className='p-2'>
            <img className='w-100 logo-aliado' src='/MTech/img/logos/andra_logo.webp' alt='andrea' loading='lazy' />
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col sm={12} md={4} lg={4} className='p-2'>
            <img className='w-100 logo-aliado' src='/MTech/img/logos/uni_upb.webp' alt='universidad-bicentenario' loading='lazy' />
          </Col>
          <Col sm={12} md={4} lg={4} className='p-2'>
            <img className='w-100 logo-aliado' src='/MTech/img/logos/uni_utg.webp' alt='universidad-tec-norte-gto' loading='lazy' />
          </Col>
          <Col sm={12} md={4} lg={4} className='p-2'>
            <img className='w-100 logo-aliado' src='/MTech/img/logos/uni_upg.webp' alt='universidad-guanajuato' loading='lazy' />
          </Col>
        </Row>
      </Container>
    </>

  )
}
