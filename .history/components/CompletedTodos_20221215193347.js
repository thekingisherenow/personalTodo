import React from 'react'
import CompletedTodo from './CompletedTodo'

function Completed() {
  return (
    <div className='p-10'>
      Completed tasks
      <div>
            {todolist.length? todolist.map((todo,index)=>{
                return(
                    <CompletedTodo key={index} index={index} todo={todo} tick ={tick} />
                    )
                }):<div className='p-8  text-gray-400'>No items to display.</div>}
            </div>
    </div>
  )
}

export default Completed
