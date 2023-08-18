import { AboutUs } from './components/AboutUs/AboutUs'
import { Footer } from './components/Footer/Footer'
import { Slider } from './components/Slider/Slider'
import { Menu } from './components/Menu/Menu'
import { StrategicAllies } from './components/StrategicAllies/StrategicAllies'
import './App.css'
import { Category } from './components/Category/Category'
import { Dates } from './components/Dates/Dates'
import { Record } from './components/Record/Record'

function App () {
  return (
    <>
      <div className='background'>
        <Menu />
        <Slider />
        <AboutUs />
        <Category />
        <Dates />
      </div>
      <div className='background'>
        <Record />
      </div>
      <StrategicAllies />
      <Footer />
    </>
  )
}
export default App
