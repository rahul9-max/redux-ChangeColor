import React from 'react'
import { useSelector } from 'react-redux'
// import theme from '../features/theme'


const Profile = () => {
    const user=useSelector((state)=>state.user.value)
    const theme=useSelector((state)=>state.theme.value)
    console.log(user)
  return (
    <div style={{color:theme}}>
        <h1>Profile page</h1>
        <p>Name:{user.name}</p>
        <p>Age:{user.age}</p>
        <p>Email:{user.email}</p>
    </div>
  )
}

export default Profile