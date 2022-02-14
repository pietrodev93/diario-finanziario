import axios from "axios";
import React from "react";
import { useRouter } from 'next/router';

function TransactionItem({ item, deleteItem, setDelete }) {
  const handleDelete = (id) => {
    axios.delete(`https://diario-finanziario.vercel.app/api/transactions/${id}`).then(() => {
      setDelete(!deleteItem)
    })
  }
  return (
    <tr key={item._id}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 sm:w-20">
            <p>{item.createdAt}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 sm:w-20">
            <p>{item.name}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 sm:w-20">
            <p>{item.amount}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 sm:w-20">
            <p>{item.mainCategory}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 sm:w-20">
            <p>{item.detailCategory}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Modifica
        </a>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <p onClick={() => handleDelete(item._id)} className="text-indigo-600 hover:text-indigo-900">
          Elimina
        </p>
      </td>
    </tr>
  );
}

export default TransactionItem;
