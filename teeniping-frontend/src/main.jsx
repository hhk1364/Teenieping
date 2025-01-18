import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './page/App.jsx'
import Login from './page/Login.jsx'
import GoogleLogin from './page/GoogleLogin.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Topbar from './page/TopBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Topbar/>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<App/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/googleLogin' element={<GoogleLogin/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)