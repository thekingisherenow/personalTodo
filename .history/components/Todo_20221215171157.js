import React, { useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { FaRegCircle ,FaRegCheckCircle } from 'react-icons/fa';

function Todo() {
    const [check, setCheck] = useState(false)

  return (
    <div className='border  p-3 my-10 flex'>
        <div
         className=' w-12 h-12 flex justify-center items-center' onMouseEnter={()=>setCheck(true)}  onMouseLeave={()=>setCheck(false)} >

        { check?

<FaRegCheckCircle 
className=' text-orange-700 w-10 h-10 ' /> :
<FaRegCircle className='w-10 text-orange-700 h-10' />
}
</div>

      <span className='text-center h-10 text-2xl flex items-center justify-center p-4 '>Single To-do</span>
    </div>
  )
}

export default Todo
