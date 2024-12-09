import React, { useContext } from 'react'
import { Routes,Route } from 'react-router-dom'
import Start from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Captainlogin from './pages/Captainlogin'
import Captainsignup from './pages/Captainsignup'
// import UserContext, { UserDataContext } from './context/userContext'
import Home from './pages/Home'
import UserProjectWrapper from './pages/UserProjectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import CaptainLogout from './pages/CaptainLogout'

const App = () => {

 
  

  return (
    <div>
        <Routes>
            <Route path="/" element={<Start />}></Route>
            <Route path="/login" element={<UserLogin />}></Route>
            <Route path="/signup" element={<UserSignup />}></Route>
            <Route path="/captain-login" element={<Captainlogin />}></Route>
            <Route path="captain-signup" element={<Captainsignup />}></Route>
            <Route path="/home" element={<UserProjectWrapper> <Home /> </UserProjectWrapper>}></Route>
            <Route path='/user/logout' element={<UserProjectWrapper>   <UserLogout /> </UserProjectWrapper>  } />
            <Route path='/captain-home' element={<CaptainProtectWrapper> <CaptainHome />  </CaptainProtectWrapper>} />
            <Route path='/captain-logout' element={<CaptainProtectWrapper> <CaptainLogout /> </CaptainProtectWrapper>} />

        </Routes>
    </div>
  )
}

export default App
