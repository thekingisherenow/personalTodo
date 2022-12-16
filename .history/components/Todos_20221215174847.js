import React, { useState } from 'react'
import Todo from './Todo'

function Todos() {

    const [todolist, setTodolist] = useState([ "Do this thing","Also this", "This again !!" ,"kaam ta garnu parcha","Absolutely this."])

     //a function that removes the data.
     const tick = (data)=>{
        console.log("hello")
        console.log("the data is",data)
        todolist.filter(item => item !==data)
        setTodolist(todolist)
    }

  return (
    <div className='p-5 m-10 border border-orange-700'>
      <h1 className='font-bold text-2xl'>Todos</h1>
        {todolist.map((todo,index)=>{
            return(
                <Todo key={index} index={index} todo={todo} tick ={tick} />
            )
        })}

    </div>
  )
}

export default Todos