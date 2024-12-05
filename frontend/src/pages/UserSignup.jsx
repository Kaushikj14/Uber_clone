import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const UserSignup = () => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ userData, setUserData ] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault();

    setUserData({
      fullName:{
        firstName:firstName,
        lastName:lastName
      },
      email:email,
      password:password
    })

    console.log(userData);
    

    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
   
  }



  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      
      <div>
        <img
          className="w-16 mb-10"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
        />

        <form onSubmit={(e)=>{
                submitHandler(e)
        }}>

{/* --------------------------------------------------------------------------             */}
          <h3 className="text-base font-medium mb-2">What's your name</h3>
          <div className='flex gap-4 mb-6'>
          <input
            value={firstName}
            onChange={(e)=>{
              setFirstName(e.target.value);
            }}
            className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base"
            required
            type="text"
            placeholder="Firstname"
          />

        <input
            value={lastName}
            onChange={(e)=>{
              setLastName(e.target.value);
            }}
            className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base"
            required
            type="text"
            placeholder="Lastname"
        />
        </div>

{/* ---------------------------------------------------------------------         */}
          <h3 className="text-base font-medium mb-2">What's your email</h3>
          <input
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="email"
            placeholder="email@example.com"
          />



{/* ----------------------------------------------------------------------------- */}
          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            name=""
            id=""
            placeholder="password"
          />

          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base">
            Login
          </button>

        

        </form>

        <p className="text-center">
        Already have a Account? 
                <Link 
                to='/login' 
                className="text-blue-600">
                    Login here
                </Link>
            </p>


      </div>

        <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
        Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>

    </div>
  )
}

export default UserSignup
