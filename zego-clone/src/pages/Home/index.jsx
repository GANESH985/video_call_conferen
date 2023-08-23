import React,{useCallback,useState} from 'react'
import { useNavigate } from 'react-router-dom';

import './index.css'

function HomePage() {
    const [value,setValue] =useState();
    const navigate = useNavigate();
    const handleJoinRoom=useCallback(()=> {
        navigate(`/room/${value}`);
    },[navigate, value])


  return (
    <div className='container pt-60'>
      <div className='flex justify-end text-4xl font-serif text-center font-medium'>
        <h1 className='text-blue-600 pr-10'>
        Zoom Cloud Website.
         </h1>
         </div>
      <div className='sub-container'>
      <input value={value}
      onChange={(e) =>setValue(e.target.value)}
       type='text' placeholder='Enter Room Code' className='input caret-pink-800'/>
       <button onClick={handleJoinRoom}
      className='button'>Join</button>
      </div>
    </div>
  )
}

export default HomePage
