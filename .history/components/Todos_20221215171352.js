import React from 'react'
import Todo from './Todo'

function Todos() {

    const todolist = [ "Do this thing","Also this", "This again !!" ,"kaam ta garnu parcha","Absolutely this."]

  return (
    <div className='p-5 m-10 border border-orange-700'>
      <h1 className='font-bold text-2xl'>Todos</h1>

        <Todo />

    </div>
  )
}

export default Todos
