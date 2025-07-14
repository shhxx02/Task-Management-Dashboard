import React from 'react'

const Header = (props) => {

  const logoutuser =()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br/><span className='font-semibold text-3xl'> {props.data?.firstName || 'User'} 👋</span></h1>
        <button onClick={logoutuser} className='bg-red-600 rounded font-medium px-5 py-2'>Log Out</button>
    </div>
  )
}

export default Header