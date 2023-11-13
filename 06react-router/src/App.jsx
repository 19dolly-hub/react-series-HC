import {Header, Footer} from './components'
import { Outlet } from 'react-router-dom'

//Step 3: Repeated components and outlet
function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
