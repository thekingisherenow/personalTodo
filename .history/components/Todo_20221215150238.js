import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

function Todo() {
  return (
    <div className='border border-blue-400 p-3 my-10'>
      <CheckCircleIcon className='m-4 p-2 bg-orange-700' />
      <span>Single To-do</span>
    </div>
  )
}

export default Todo
