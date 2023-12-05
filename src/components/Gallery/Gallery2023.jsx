import { Container } from 'react-bootstrap'
import { galleryCortazar2023, galleryDolores2023, gallerySilao2023, galleryLeon2023 } from './constans_gallery'
import { GalleryYear } from './GalleryYear'
import './GalleryPage.css'

export function Gallery2023 () {
  return (
    <>
      <center><h1 className='title-gallery py-5'>GALERIA M-TECH 2023</h1></center>
      <Container className='galleryPage mt-5'>
        <h1 className='gallery-title'>LEÓN</h1>
        <GalleryYear gallery={galleryLeon2023} />
        <h1 className='gallery-title'>CORTAZAR</h1>
        <GalleryYear gallery={galleryCortazar2023} />
        <h1 className='gallery-title mt-5 pt-5'>DOLORES HIDALGO</h1>
        <GalleryYear gallery={galleryDolores2023} />
        <h1 className='gallery-title mt-5 pt-5'>SILAO</h1>
        <GalleryYear gallery={gallerySilao2023} />
      </Container>
    </>
  )
}
