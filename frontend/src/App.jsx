import React, { useContext } from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Captainlogin from './pages/Captainlogin'
import Captainsignup from './pages/Captainsignup'
import UserContext, { UserDataContext } from './context/userContext'

const App = () => {

 
  

  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<UserLogin />}></Route>
            <Route path="/signup" element={<UserSignup />}></Route>
            <Route path="/captain-login" element={<Captainlogin />}></Route>
            <Route path="captain-signup" element={<Captainsignup />}></Route>
        </Routes>
    </div>
  )
}

export default App
