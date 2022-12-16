import React, { useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { FaRegCircle ,FaRegCheckCircle } from 'react-icons/fa';

function Todo({todo}) {
    const [check, setCheck] = useState(false)

    //a function that removes the data.
  return (
    <div className='border  p-3 my-2 flex'>
        <div
         className=' w-10 h-10 flex justify-center items-center' onMouseEnter={()=>setCheck(true)}  onMouseLeave={()=>setCheck(false)} >

        { check?

<FaRegCheckCircle 
className=' text-orange-700 w-8 h-8 ' /> :
<FaRegCircle className='w-8 text-orange-700 h-8' />
}
</div>

      <span className='text-center h-10 text-2xl flex items-center justify-center p-4 '>{todo}</span>
    </div>
  )
}

export default Todo
