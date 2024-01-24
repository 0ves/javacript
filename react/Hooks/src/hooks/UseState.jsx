import React from 'react'
import {useState} from 'react'

function UseState() {
    const [Count , useCount] = useState(0)
  return (
    <div className="bg-gray-600 flex flex-col align-middle ">
    
      <h1 className='p-5'>Use state Hook </h1>
      <button
      className=' text-red-900 border-l px-10 py-5 bg-green-500' 
      onClick={()=>useCount(Count+1)}>button</button>
      
      <button
      className='  border-red-400 px-10 py-5 bg-green-500' 
      onClick={()=>useCount(0)}>Clear</button>
     
      <h1 className='p-5'>{Count}</h1>
    </div>
  )
}

export default UseState