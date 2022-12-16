import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Completed from '../components/CompletedTodos'
import Todos from '../components/Todos'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [todolist, setTodolist] = useState([ "Do this thing","Also this", "This again !!" ,"kaam ta garnu parcha","Absolutely this."])
  
  const [completedTodolist, setCompletedTodolist] = useState([])

  const tick = (data)=>{
    // console.log("hello")
    console.log("the index from todo is",data)
    const newValue = todolist.filter((item,index)=>  index === data)
    console.log("todo filter garera aayeko data",newValue)
    setCompletedTodolist(arr => [...arr,newValue])
    console.log("completedTodolist",completedTodolist)
    // setCompletedTodolist(todolist => todolist.filter((item,index)=>  index === data  ))
    setTodolist(todolist.filter((item,index)=>  index !== data  ) )  
    // setTodolist(todolist) 
}

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="To-do App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <div className='bg-white'>
      <Todos tick={tick} todolist={todolist} />

      {/* //Completed tasks */}
      <Completed />
     </div>
    </div>
  )
}
