import React, { useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { FaRegCircle } from 'react-icons/fa';

function Todo() {
    const [check, setCheck] = useState(false)

  return (
    <div className='border border-blue-400 p-3 my-10 flex'>
        <div
         className='bg-blue-400 w-10 h-10' onMouseEnter={()=>setCheck(!check)}  onMouseLeave={()=>setCheck(!check)} >

        { check?

<CheckCircleIcon 
className=' text-orange-700 w-10 h-10 ' /> :
<>
<FaRegCircle className='w-10 text-orange-700 h-10' />
{/* <span>hi</span> */}
</>
}
</div>

      <span>Single To-do</span>
    </div>
  )
}

export default Todo
