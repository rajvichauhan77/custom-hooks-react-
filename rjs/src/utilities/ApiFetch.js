import React, { useEffect, useState } from 'react'

const useApiFetch = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchData = async () => {
        try {
            let res = await fetch(url)
            let resp = await res.json()
            setData(resp)
            console.log(resp)
          
        }
         catch (error) {
            setError(true)
            // console.log(error)
        }
        finally{
            setLoading(false)
        }
    }

 

    useEffect(() => {
        fetchData()

    }, [])

  

  return {loading, error, data}
   
}

export default useApiFetch