import React, { useState } from 'react'
import { FaRegCircle ,FaRegCheckCircle, FaCheckCircle, FaCircle } from 'react-icons/fa';

function CompletedTodo({todo}) {
    const [check, setCheck] = useState(false)

    //    console.log("the index inside the todo component is:",index)
      return (
        <div className='border  p-2 my-2 flex'>
            <div 
            // onClick={()=>tick(index)}
             className=' w-9 h-9 flex justify-center ml-2 items-center' onMouseEnter={()=>setCheck(true)}  onMouseLeave={()=>setCheck(false)} >
    
            { check?
    
    <FaCircle 
    className=' text-orange-700 w-7 h-7 m-auto' /> :
    <FaCheckCircle className='w-7 text-orange-700 h-7 m-auto' />
    }
    </div>
    
          <span className='text-center h-10 text-lg my-auto  p-1 ml-4 line-through '>{todo}</span>
        </div>
      )
}

export default CompletedTodo
