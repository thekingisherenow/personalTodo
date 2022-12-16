import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

function Todo() {
  return (
    <div className='border border-blue-400 p-3 my-10 flex'>
      <CheckCircleIcon className='m-4 p-2 text-orange-700 w-10 h-10 ' />
      <span>Single To-do</span>
    </div>
  )
}

export default Todo
