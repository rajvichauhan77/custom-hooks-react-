import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import ApiContextProvider from './context/ApiContextProvider.jsx'
import AuthProvider from './AuthContext/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <AuthProvider>
        <ApiContextProvider>
          <App />
        </ApiContextProvider>
      </AuthProvider>
    </BrowserRouter>
    
  </StrictMode>,
)
