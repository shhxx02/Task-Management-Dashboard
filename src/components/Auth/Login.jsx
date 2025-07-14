import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler= (e)=>{
    e.preventDefault()
    handleLogin(email,password)
    setEmail("")
    setPassword("")
  }

  return (
    <div className='h-screen w-screen flex items-center justify-center'>
        <div className='flex items-center justify-center  border-2 border-emerald-600 rounded-xl p-15'>
            <form 
            onSubmit={(e)=>{
              submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
                 required className='border-2 border-emerald-600 rounded-full outline-none bg-transparent px-3 py-1 mb-2 text-l' type='email' placeholder='Enter your email'/>
                <input 
                 value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                required className='border-2 border-emerald-600 rounded-full outline-none bg-transparent px-3 py-1 mt-2 text-l' type='password' placeholder='Enter password'/>
                <button className=' hover:bg-emerald-700 bg-emerald-600 rounded-full font-semibold outline-none text-white w-full  mt-5 px-8 py-1  text-l '>Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Login

