import { AboutUs } from './components/AboutUs/AboutUs'
import { Footer } from './components/Footer/Footer'
import { Slider } from './components/Slider/Slider'
import { Menu } from './components/Menu/Menu'
import { StrategicAllies } from './components/StrategicAllies/StrategicAllies'
import './App.css'
import { Category } from './components/Category/Category'
import { Dates } from './components/Dates/Dates'
// import { Record } from './components/Record/Record'//formulario de registro
// import { Schedule } from './components/Schedule/Conferences'

function App () {
  return (
    <>
      <div className='background'>
        <Menu />
        <Slider />
        <AboutUs />
        <Category />
      </div>
      <div className='background-dos'>
        <Dates />
        {/* <Schedule /> */}
      </div>
      <div className='background'>
        {/* <Record /> */}
      </div>
      <StrategicAllies />
      <Footer />
    </>
  )
}
export default App
