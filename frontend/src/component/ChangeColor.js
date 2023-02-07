import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { diffColor } from '../features/theme'

const ChangeColor = () => {
    const [color,setColor]=useState("")
    const dispatch=useDispatch()

    const demo=(e)=>{
        // e.preventDefault()
        setColor(e.target.value)
    }
  return (
    <div>
    <form className="logout">
    <input type="text" onChange={demo}/>
        <button onClick={()=>dispatch(diffColor(color))}>change</button>
    </form>
    </div>
  )
}

export default ChangeColor