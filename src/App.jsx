import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/Home'
import Admin from './routes/admin/Admin'
import Auth from './routes/auth/Auth'
import Login from './routes/auth/login/Login'
import Register from './routes/auth/register/Register'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './components/nav/Nav'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Nav/>}>
        <Route path="" element={<Home />} />
          <Route path="auth" element={<Auth />}>
            <Route path='' element={<Login/>} />
            <Route path='register' element={<Register/>} />
          </Route>
        </Route>
        <Route path="admin" element={<Admin />} />
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App


// LOGIN
// REGISTER
// CONTEXT API
