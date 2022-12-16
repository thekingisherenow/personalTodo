import React, { useEffect, useState } from 'react'
import Todo from './Todo'

function Todos({tick}) {


    

  return (
    <div className='p-5 m-10 border border-orange-700'>
      <h1 className='font-bold text-2xl'>Todos</h1>
        <div>
            {todolist.length? todolist.map((todo,index)=>{
                return(
                    <Todo key={index} index={index} todo={todo} tick ={tick} />
                    )
                }):<div className='p-8  text-gray-400'>No items to display.</div>}
            </div>

    </div>
  )
}

export default Todos
