import Head from 'next/head'
import Image from 'next/image'
import Completed from '../components/Completed'
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
      <h1 className='bg-black'>Completed Tasks</h1>
      <Todos/>
      <Completed />
     </div>
    </div>
  )
}
