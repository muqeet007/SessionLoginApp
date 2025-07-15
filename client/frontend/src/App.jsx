import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login  from './components/Login.jsx'
import Register from './components/Register.jsx'
import Navbar from './components/Navbar.jsx'
import Profile from './components/Profile.jsx'
import Dashboard from './components/Dashboard.jsx'
import {Routes,Route} from 'react-router-dom'
import Layout from './components/Layout.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
          <Route element={<Layout/>}>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
          </Route>


          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
