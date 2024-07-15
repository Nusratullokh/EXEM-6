import './App.css'
import Nav from './components/nav/Nav'
import Home from './routes/home/Home'
import { Routes, Route, useLocation } from 'react-router-dom'
import SinglePage from './routes/single-page/SinglePage'
import Cart from './routes/cart'
import Login from './routes/auth/login/Login'
import ScrollToTop from './components/scrollToTop'

function App() {
  const {pathname } = useLocation();
  return (
    <>
       
      <ScrollToTop pathname={pathname} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/SinglePage/:id' element={<SinglePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
