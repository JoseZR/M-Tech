/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import { Container } from 'react-bootstrap'
import { galleryCortazar, galleryDolores, gallerySilao } from './constans_gallery'
import { GalleryYear } from './GalleryYear'
import './GalleryPage.css'

export function GalleryPage () {
    return (
        <>
        <center><h1 className='title-gallery'>GALERIA M-TECH 2023</h1></center>
            <Container className='galleryPage mt-5'>
                <h1 className='gallery-title'>CORTAZAR</h1>
            <GalleryYear gallery={galleryCortazar} />
                <h1 className='gallery-title mt-5 pt-5'>DOLORES HIDALGO</h1>
            <GalleryYear gallery={galleryDolores} />
                <h1 className='gallery-title mt-5 pt-5'>SILAO</h1>
            <GalleryYear gallery={gallerySilao} />
            </Container>
        </>
    )
}
