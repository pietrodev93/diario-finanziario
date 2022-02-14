import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TransactionTable from '../../components/TransactionTable';
import { useRouter } from 'next/router';

export default function Transazioni() {
  const [transactions, setTransactions] = useState()
  const [loading, setLoading] = useState(true)
  const [deleteItem, setDelete] = useState(false)
  const router = useRouter()

  useEffect(() => {
    init()
  },[deleteItem])

  const init = async () => {
    const urlTransactions = `https://diario-finanziario.vercel.app/api/transactions`
    const { data } = await axios.get(urlTransactions)
    if(data.success){
      setLoading(false)
      setTransactions(data.data)
    } else {
      alert('errore')
    }
  }
  

  return <div className="h-screen overflow-hidden pt-20 px-10 text-center relative" style={{backgroundColor: '#e8e0e8'}}>
       <h1 className='text-3xl mb-5'>Le tue ultime transazioni</h1>
      {
        loading ? (
          <p>Loading...</p>
        ) : (
          transactions && transactions.length < 1 ? <p>Non ci sono transazioni</p> : (
            <TransactionTable deleteItem={deleteItem} setDelete={setDelete} data={transactions} />
          )
        )
      }
      <div className="absolute h-14 px-5 flex justify-center items-center bg-black text-white rounded-lg bottom-12 right-10 cursor-pointer">
        <p onClick={() => router.push('/aggiungi')}>Aggiungi</p>
      </div>
  </div>
}
