import React, { useState } from 'react'
import axios from 'axios'
import signup from '../../assets/signup.png'
import {Link , useNavigate} from 'react-router-dom'

import { Button } from '@/components/ui/button'
import '../Signin/Signin.css'

function Signin() {
  const [email , setEmail] = useState()
  const [password , setPassword] = useState()
  const navigate = useNavigate();

//   const { login } = require('../../lib/authContext').useAuth();
  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post("http://localhost:8000/signin" 
    , { email , password}).then((r)=>{
      console.log(r);
      navigate('/')
    }).catch((e)=>{
      console.log(e);
    })
  }
  return (
    <>
     <div className="signup-container flex p-[5rem] justify-center ">
        <div className="inner-signup-container flex justify-center ">
            <div className="left-img-singup-container">
                <img src={signup} alt="" className='  w-[25rem] h-[37rem]'/>
            </div>
            
            <div className="right-signup-details-forms ml-5">
                <div className="right-top-headlines flex justify-center items-center mb-6">
                    <h1 className='font-[lora] font-bold text-5xl mt-5 '>Singup Here</h1>
                </div>
                <div className="right-top-headlines flex justify-center items-center mb-6">
                <Button variant='default' className='cursor-pointer font-bold font-[lora] bg-[#070f2b] w-[20rem]' >Signup With Google</Button>

                </div>
                <div className="or-section-seperator flex justify-center items-center mb-2">
                    <p>------------------------or------------------------</p>
                </div>
        <div className="middle-form-area">
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <input type="text" placeholder='Email' className='w-[20rem] h-[30px] border-2 border-black my-2 mx-5 p-5 rounded-md' name='email' onChange={(e)=>setEmail(e.target.value)} />
          <input type='password' placeholder='Password' className='w-[20rem] h-[30px] border-2 border-black my-2 mx-5 p-5 rounded-md' name='password' onChange={(e)=>setPassword(e.target.value)}/>
          <div className="sub-inputs flex">
          </div>
          <div className="singup-button-action mt-5 flex justify-center items-center">
            <Button type="submit" variant='default' className='cursor-pointer font-bold font-[lora] bg-[#070f2b] w-[20rem]' >SignIn</Button>
          </div>
        </form>
        </div>
            <div>
                <p className='link-signin flex justify-center items-center mt-3 font-[karla] font-semibold text-md'>Don't have An Account??<Button variant='link' className='font-semibold text-sm  cursor-pointer '><Link to='/signup'>Signup Here</Link></Button></p>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signin
