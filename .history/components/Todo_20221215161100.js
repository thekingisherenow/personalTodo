import React, { useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { FaCircle ,FaRegCheckCircle } from 'react-icons/fa';

function Todo() {
    const [check, setCheck] = useState(false)

  return (
    <div className='border border-blue-400 p-3 my-10 flex'>
        <div
         className='bg-blue-400 w-12 h-12' onMouseEnter={()=>setCheck(!check)}  onMouseLeave={()=>setCheck(!check)} >

        { check?

<FaRegCheckCircle 
className=' range-700 w-10 h-10 ' /> :
<FaCircle className='w-10 range-700 h-10' />
}
</div>

      <span>Single To-do</span>
    </div>
  )
}

export default Todo
