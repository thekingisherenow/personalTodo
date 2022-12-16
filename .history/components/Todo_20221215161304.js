import React, { useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { FaRegCircle ,FaRegCheckCircle } from 'react-icons/fa';

function Todo() {
    const [check, setCheck] = useState(false)

  return (
    <div className='border border-blue-400 p-3 my-10 flex'>
        <div
         className='bg-blue-400 w-12 h-12 flex justify-center items-center' onMouseEnter={()=>setCheck(true)}  onMouseLeave={()=>setCheck(false)} >

        { check?

<FaRegCheckCircle 
className=' text-orange-700 w-10 h-10 ' /> :
<FaRegCircle className='w-10 text-orange-700 h-10' />
}
</div>

      <span>Single To-do</span>
    </div>
  )
}

export default Todo
