import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Orders from './pages/Orders/Orders'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const url = "http://localhost:4000"
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <hr/>
      <div className='app-content'>
        <Sidebar></Sidebar>
        <Routes>
          <Route path='/add' element={<Add url = {url}/>}/>
          <Route path='/orders' element={<Orders url = {url}/>}/>
          <Route path='/list' element={<List url = {url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
