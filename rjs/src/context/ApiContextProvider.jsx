
import React, { useState } from 'react'
import { ApiContext } from './ApiContext'


const ApiContextProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [users, setUsers] = useState([])

    // console.log(products)
    // console.log(users)
    let plen= products.length
    let ulen = users.length
    

  return (

    <ApiContext.Provider value={{products, users, plen, ulen, setProducts, setUsers}}>
        {children}
    </ApiContext.Provider>
  )
}

export default ApiContextProvider