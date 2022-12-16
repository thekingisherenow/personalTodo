import React from 'react'
import { CheckCircleIcon,CircleIc } from '@heroicons/react/24/outline'
import { FaRegCircle } from 'react-icons/fa';

function Todo() {
  return (
    <div className='border border-blue-400 p-3 my-10 flex'>
      <CheckCircleIcon className=' text-orange-700 w-10 h-10 ' />
      <span>Single To-do</span>
      <FaRegCircle className='w-9 h-9' />
    </div>
  )
}

export default Todo
