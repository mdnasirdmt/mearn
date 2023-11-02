import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

  const {user}= useParams()

  return (
    <div className=' text-center text-4xl bg-slate-500 text-white p-6'>
    
    <h1>User : {user}</h1>
    </div>
  )
}

export default User