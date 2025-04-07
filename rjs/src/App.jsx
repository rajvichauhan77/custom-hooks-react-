import { useContext } from 'react'
import Home from './pages/Home'
import Products from './pages/Products'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import { ApiContext } from "./context/ApiContext"
import { AuthContext } from "./AuthContext/AuthProvider"
import './App.css'
import { Route, Routes, NavLink } from 'react-router-dom'
import ApiCall from "./ApiCall"

function App() {
  const {users} = useContext(ApiContext)
  const {tok} = useContext(AuthContext)

  return (
    <>
     
     <header className='shadow '>
        <div className="container mx-auto flex justify-between p-3">
          <h1 className='text-2xl font-bold'>Routing</h1>
        
          <div className="flex gap-4">
            <NavLink className={({isActive, isPending}) => isActive ? `text-red-400`  : isPending ? `text-green-600`  : `text-slate-800`} to="/dash">Dashboard</NavLink>
          
            <NavLink className={({isActive, isPending}) => isActive ? `text-red-400`  : isPending ? `text-green-600`  : `text-slate-800`} to="/products">Product</NavLink>
          
            <NavLink className={({isActive, isPending}) => isActive ? `text-red-400`  : isPending ? `text-green-600`  : `text-slate-800`} to="/users">Users</NavLink>
          </div>
          
        
      </div>
    </header>

    <Routes>
      <Route path='/dash' element={<Dashboard/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/users" element={<Users/>}/>
    </Routes>

    </>
  )
}

export default App
