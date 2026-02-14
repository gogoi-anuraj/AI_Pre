
import Home from './pages/Home.jsx'
import Auth from './pages/Auth.jsx'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/auth' element = {<Auth/>}/>
    </Routes>
    </>
  )
}

export default App