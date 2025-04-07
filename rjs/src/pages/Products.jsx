import React, { useContext, useEffect } from 'react'
import { ApiContext } from '../context/ApiContext'
// import { useParams } from 'react-router-dom'
import useApiFetch from '../utilities/ApiFetch'

const Products = () => {

  const {loading, error, data} = useApiFetch('https://fakestoreapi.com/products')

  return (
    <div className='border p-5 max-w-7xl mx-auto'>
        <div className="grid grid-cols-4 gap-5">
         {
          data.map((ele) => (
            <div className='rounded-1xl shadow shadow-slate-600 '>
            <img className='w-full h-65' src={ele.image} alt="" />
            <h2>{ele.title}</h2>
          </div>
          ))
         }
       
        </div>
    </div>
  )
}

export default Products