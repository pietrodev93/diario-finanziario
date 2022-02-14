import axios from 'axios'
import React, { useState } from 'react'
import { useRouter } from 'next/router';

function Aggiungi() {
    const router = useRouter()
    const [values, setValues] = useState(
        {
            name: false,
            upload: false,
            amount: false,
            mainCategory: false,
            detailCategory: false,
        }
    )
    const [error, setError] = useState(false)
    const submitTransaction = (e) => {
        e.preventDefault()
        if(values.name || values.upload || values.amount || values.mainCategory || values.detailCategory){
            axios.post('http://localhost:3000/api/transactions', 
                {
                    "name": `${values.name}`,
                    "upload": `${values.upload}`,
                    "amount": `${values.amount}`,
                    "mainCategory": `${values.mainCategory}`,
                    "detailCategory": `${values.detailCategory}`
                }
            ).then(() => {
                router.push('/transazioni')
            }, (error) => {
                console.log(error)
            })
        } else {
            setError(!error)
        }
    }
  return (
    <div className="h-screen overflow-hidden pt-20 px-10 text-center relative" style={{backgroundColor: '#e8e0e8'}}>
        <h1 className='text-3xl mb-5'>Aggiungi una nuova transazione</h1>
        <div className="mt-14 p-8 bg-white m-auto h-2/3 rounded-2xl w-4/4 sm:w-2/4">
            <form onSubmit={(e) => submitTransaction(e)}>
                <div className="flex text-center justify-center w-full h-10 mb-4">
                    <p className="bg-black w-1/4 text-white px-5 rounded-l-2xl items-center flex justify-center">
                        Nome
                    </p>
                    <input onChange={(e) => setValues({...values, name: e.target.value})} type="text" className="bg-gray-100 outline-none rounded-r-2xl px-2 flex-1" />
                </div>
                <div className="flex text-center justify-center w-full h-10 mb-4">
                    <p className="bg-black w-1/4 text-white px-5 rounded-l-2xl items-center flex justify-center">
                        Data
                    </p>
                    <input onChange={(e) => setValues({...values, upload: e.target.value})} type="datetime-local" className="bg-gray-100 outline-none rounded-r-2xl px-2 flex-1" />
                </div>
                <div className="flex text-center justify-center w-full h-10 mb-4">
                    <p className="bg-black w-1/4 text-white px-5 rounded-l-2xl items-center flex justify-center">
                        Spesa
                    </p>
                    <input onChange={(e) => setValues({...values, amount: e.target.value})} type="text" className="bg-gray-100 outline-none rounded-r-2xl px-2 flex-1" />
                </div>
                <div className="flex text-center justify-center w-full h-10 mb-4">
                    <p className="bg-black w-1/4 text-white px-5 rounded-l-2xl items-center flex justify-center">
                        Categoria principale
                    </p>
                    <input onChange={(e) => setValues({...values, mainCategory: e.target.value})} type="text" className="bg-gray-100 outline-none rounded-r-2xl px-2 flex-1" />
                </div>
                <div className="flex text-center justify-center w-full h-10 mb-4">
                    <p className="bg-black w-1/4 text-white px-5 rounded-l-2xl items-center flex justify-center">
                        Categoria secondaria
                    </p>
                    <input onChange={(e) => setValues({...values, detailCategory: e.target.value})} type="text" className="bg-gray-100 outline-none rounded-r-2xl px-2 flex-1" />
                </div>
                <div className="flex justify-center items-center mt-14">
                    <button onClick={(e) => submitTransaction(e)} className="bg-black text-white w-16 h-14 rounded-xl">Invia</button>
                </div>
            </form>
        </div>
        {error && (
            <div className='justify-center flex'>
              <p className='w-1/2 bg-orange-500 flex items-center justify-center text-white h-20 font-semibold rounded-xl '>Errore</p>
            </div>
        )}

    </div>
  )
}

export default Aggiungi