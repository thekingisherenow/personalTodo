import Head from 'next/head'
import Image from 'next/image'
import Completed from '../components/CompletedTodos'
import Todos from '../components/Todos'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="To-do App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <div className='bg-white'>
      <Todos/>

      {/* //Completed tasks */}
      <Completed />
     </div>
    </div>
  )
}
