import React, { useState } from 'react'
import CompletedTodo from './CompletedTodo'

function Completed() {
  const [todolist, setTodolist] = useState([ "Do this thing","Also this", "This again !!" ,"kaam ta garnu parcha","Absolutely this."])
  
  return (
    <div className='p-2 m-3 '>
      <button className='font-bold text-2xl'>Completed tasks</button>
      
      <div className='border p-3 m-7 border-orange-700'>
            {todolist.length? todolist.map((todo,index)=>{
                return(
                    <CompletedTodo key={index} index={index} todo={todo}  />
                    )
                }):<div className='p-8  text-gray-400'>No items to display.</div>}
            </div>
    </div>
  )
}

export default Completed
