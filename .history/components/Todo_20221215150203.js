import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

function Todo() {
  return (
    <div className='border border-blue-400 p-3 my-10'>
      <span>Single To-do</span>
      <CheckCircleIcon />
    </div>
  )
}

export default Todo
