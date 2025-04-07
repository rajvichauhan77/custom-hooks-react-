import React, { children, useEffect, useState } from 'react'

import { createContext } from "react";

export const AuthContext = createContext();



const AuthProvider = ({children}) => {

    const [tok, setTok]  = useState("")

    let cred = {
        username: "'john_doe",
        password : "pass123"
    }



        useEffect(() => {
            
            

            const credentials = { username: 'johnd', password: 'm38rmF' };
                fetch('https://fakestoreapi.com/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
                })
                .then(response => response.json())
                .then(data => setTok(data.token));

        }, [])

        console.log(tok)
     
     


  return (
    <AuthContext.Provider value={{tok}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider