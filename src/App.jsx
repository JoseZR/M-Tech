import { Menu } from './components/Menu/Menu'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home/Home'
import { Gallery2022 } from './components/Gallery/Gallery2022'
import { Footer } from './components/Footer/Footer'
import { Gallery2023 } from './components/Gallery/Gallery2023'
function App () {
  return (
    <>
      <Menu />
      <Routes>
        <Route
          path='/' element={
            <>
              <title>M-TECH</title>
              <Home />
            </>
          }
        />
        <Route
          path='gallery2022'
          element={<Gallery2022 />}
        />
        <Route
          path='gallery2023'
          element={<Gallery2023 />}
        />
      </Routes>
      <Footer />
    </>
  )
}
export default App
