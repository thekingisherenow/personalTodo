import React, { useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { FaRegCircle ,FaRegCheckCircle } from 'react-icons/fa';

function Todo({todo}) {
    const [check, setCheck] = useState(false)

    //a function that removes the data.
  return (
    <div className='border  p-2 my-2 flex'>
        <div
         className=' w-9 h-9 flex justify-center items-center' onMouseEnter={()=>setCheck(true)}  onMouseLeave={()=>setCheck(false)} >

        { check?

<FaRegCheckCircle 
className=' text-orange-700 w-7 h-7 m-auto' /> :
<FaRegCircle className='w-7 text-orange-700 h-7 m-auto' />
}
</div>

      <span className='text-center h-10 text-lg my-auto  p-1 ml-4 '>{todo}</span>
    </div>
  )
}

export default Todo
