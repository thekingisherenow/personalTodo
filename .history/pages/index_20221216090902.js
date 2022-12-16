import Head from 'next/head'
import Image from 'next/image'
import Completed from '../components/CompletedTodos'
import Todos from '../components/Todos'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [todolist, setTodolist] = useState([ "Do this thing","Also this", "This again !!" ,"kaam ta garnu parcha","Absolutely this."])

  
  const tick = (data)=>{
    console.log("hello")
    console.log("the index from todo is",data)
    setTodolist(todolist.filter((item,index)=>  index !== data  ) )  
    console.log("todo after filter",todolist)
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
      <Todos tick={tick}/>

      {/* //Completed tasks */}
      <Completed />
     </div>
    </div>
  )
}
