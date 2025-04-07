import React, { useContext, useEffect } from 'react'
import { ApiContext } from '../context/ApiContext'
import useApiFetch from '../utilities/ApiFetch'

const Users = () => {

  const {loading, error, data} = useApiFetch("https://fakestoreapi.com/users")

  return (
    <div className='border p-5 max-w-7xl mx-auto'>
    <div className="grid grid-cols-4 gap-3">
     {
      data.map((ele) => (
        <div key={ele.id} className='rounded-2xl shadow shadow-slate-400 '>
        <img className='w-full h-56' src={ele.image} alt="" />
        <h2>{ele.name.firstname } {ele.name.lastname}</h2>
      </div>
      ))
     }
     
    </div>
</div>

  )
}

export default Users