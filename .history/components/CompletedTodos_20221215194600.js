import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import CompletedTodo from './CompletedTodo'

function Completed() {
  const [todolist, setTodolist] = useState([ "Do this thing","Also this", "This again !!" ,"kaam ta garnu parcha","Absolutely this."])
  const [open, setOpen] = useState(false)
  return (
    <div className='p-2 m-3 '>
      <button onClick={()=>setOpen(!open)} 
      className='font-bold text-xl ml-5 border border-orange-700 px-2 py-1 rounded-md flex'><span>Completed</span> 
      <span>{todolist.length}</span>
      <span>{open? <ChevronDownIcon className='w-4 h-5 items-center ml-4 mt-1 ' />
      :<ChevronRightIcon className='w-4 h-5 items-center ml-4 mt-1 ' />}</span> </button>
      
      {open && <div className='border p-3 m-7 border-orange-700'>
            {todolist.length? todolist.map((todo,index)=>{
                return(
                    <CompletedTodo key={index} index={index} todo={todo}  />
                    )
                }):<div className='p-8  text-gray-400'>No items to display.</div>}
            </div>}
    </div>
  )
}

export default Completed
