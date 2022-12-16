import React from 'react'
import { CheckCircleIcon,CircleIc } from '@heroicons/react/24/outline'
import { FaRegCircle } from 'react-icons/fa';

function Todo() {
    const value = false ;

  return (
    <div className='border border-blue-400 p-3 my-10 flex'>
        { value?

            <CheckCircleIcon className=' text-orange-700 w-10 h-10 ' />:
      <FaRegCircle className='w-9 h-9' />
        }
      <span>Single To-do</span>
    </div>
  )
}

export default Todo
