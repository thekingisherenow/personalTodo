import React, { useEffect, useState } from 'react'
import Todo from './Todo'

function Todos() {

    const [todolist, setTodolist] = useState([ "Do this thing","Also this", "This again !!" ,"kaam ta garnu parcha","Absolutely this."])

     //a function that removes the data.
     const tick = (data)=>{
        console.log("hello")
        console.log("the index from todo is",data)
        setTodolist(todolist.filter((item,index)=>  index !== data  ) )  
        console.log("todo after filter",todolist)
        // setTodolist(todolist)
    }

  return (
    <div className='p-5 m-10 border border-orange-700'>
      <h1 className='font-bold text-2xl'>Todos</h1>
        <div>
            {todolist.length? todolist.map((todo,index)=>{
                return(
                    <Todo key={index} index={index} todo={todo} tick ={tick} />
                    )
                }):<div className='p-8 ml-4 bg-gray-400'>No items to display.</div>}
            </div>

    </div>
  )
}

export default Todos
