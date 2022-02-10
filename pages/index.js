import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'


export default function Home() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState(false)
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    if(username && password){
      
      const urlLogin = `https://diario-finanziario.vercel.app/api/login`;
      const { data } = await axios.post(urlLogin, {
        username: username,
        passowrd: password
      })
      if(data.success){
        setError(false)
        router.push('/transazioni')
      } else{
        setError(true)
      }
    } else {
      setError(!error)
    }
  }

  return (
    <div>
      <Head>
        <title>Transaction Report</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen overflow-hidden pt-20 px-10 text-center" style={{backgroundColor: '#e8e0e8'}}>
        <h1 className='text-3xl mb-5'>Hey, Ciao!</h1>
        <p className='text-lg leading-5'>Bentornato, hai nuove transazioni da aggiungere?</p>
        <div className="my-10 w-full">
          <form onSubmit={() => handleLogin()} className='flex flex-col items-center'>
            <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder='username' className='mb-8 w-full  md:w-full lg:w-1/3 h-12 outline-none px-2 rounded-xl'/>

            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' className='w-full sm:w-full md:w-full  lg:w-1/3 h-12 outline-none px-2 rounded-xl'/>
            <button onClick={(e) => handleLogin(e)} className='my-8 bg-[#f56b68] w-2/3 lg:w-1/4 h-12 rounded-xl text-white'>Accedi</button>
          </form>
          {error && (
            <div className='justify-center flex'>
              <p className='w-1/2 bg-orange-500 flex items-center justify-center text-white h-20 font-semibold rounded-xl '>Errore</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
