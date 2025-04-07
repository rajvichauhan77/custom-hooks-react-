import React, { useContext } from 'react'
import { ApiContext } from '../context/ApiContext'

// import { useParams } from 'react-router-dom'

const Dashboard = () => {


const {plen, ulen} = useContext(ApiContext)



  return (
    <div>
      <div className='max-w-5xl border p-2 mx-auto my-3 flex gap-3'>
        <div className='w-50 shadow shadow-amber-400 p-2 rounded text-center'>
          <h2 className='text-xl font-bold'>Products</h2>
          <h2>{plen}</h2>
        </div>
        <div className='w-50 shadow shadow-amber-400 p-2 rounded text-center'>
        <h2 className='text-xl font-bold'>Users</h2>
        <h2>{ulen}</h2>
        </div>
      </div>
    </div>
  )
}

export default Dashboard