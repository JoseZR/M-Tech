import { AboutUs } from '../AboutUs/AboutUs'
import { GalleryPage } from '../Gallery/GalleryPage'
import { Slider } from '../Slider/Slider'
import { StrategicAllies } from '../StrategicAllies/StrategicAllies'

export function Home () {
  return (
    <>
      <div className='background'>
        <Slider />
        <AboutUs />
        {/* <Category /> */}
      </div>
      <div className='background-dos'>
        {/* <Dates /> */}
        {/* <Schedule /> */}
      </div>
      <div className='background'>
        {/* <Record /> */}
      </div>
      <GalleryPage />
      <StrategicAllies />
    </>
  )
}
