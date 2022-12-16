import React, { useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { FaRegCircle } from 'react-icons/fa';

function Todo() {
    const [check, setCheck] = useState(false)

  return (
    <div className='border border-blue-400 p-3 my-10 flex'>
        { check?

<CheckCircleIcon className=' text-orange-700 w-10 h-10 ' /> :
<FaRegCircle onMouseEnter={()=>setCheck(!check)} className='w-9 text-orange-700 h-9' />
        }
      <span>Single To-do</span>
    </div>
  )
}

export default Todo
