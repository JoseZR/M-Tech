import { Container } from 'react-bootstrap'
import { BestMoments } from './constans_gallery'
import { GalleryYear } from './GalleryYear'
import './GalleryPage.css'
import { Link } from 'react-router-dom'

export function GalleryPage () {
  return (
    <>
      <center><h1 className='title-gallery'>LO MEJOR DE M-TECH 2023</h1></center>
      <Container className='galleryPage mt-5'>
        <GalleryYear gallery={BestMoments} />
        <center>
          {/* <Link to='/gallery2023' className='text-decoration-none'>
            <button class='btn-best-moments my-3'><span class='btn-best-moments-content'>VER GALERIA</span></button>
          </Link> */}
        </center>
      </Container>
    </>
  )
}
