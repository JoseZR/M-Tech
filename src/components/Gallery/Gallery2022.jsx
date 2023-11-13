import { Container } from 'react-bootstrap'
import { galleryCortazar2022, galleryDolores2022, galleryIrapuato2022, galleryLeon2022 } from './constans_gallery'
import { GalleryYear } from './GalleryYear'
import './GalleryPage.css'

export function Gallery2022 () {
  return (
    <>
      <center><h1 className='title-gallery py-5'>GALERIA M-TECH 2022</h1></center>
      <Container className='galleryPage mt-5'>
        <h1 className='gallery-title'>CORTAZAR</h1>
        <GalleryYear gallery={galleryCortazar2022} />
        <h1 className='gallery-title mt-5 pt-5'>DOLORES HIDALGO</h1>
        <GalleryYear gallery={galleryDolores2022} />
        <h1 className='gallery-title mt-5 pt-5'>IRAPUATO</h1>
        <GalleryYear gallery={galleryIrapuato2022} />
        <h1 className='gallery-title mt-5 pt-5'>LEÓN</h1>
        <GalleryYear gallery={galleryLeon2022} />
      </Container>
    </>
  )
}
