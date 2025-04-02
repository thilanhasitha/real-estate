import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import About from './pages/About'

export default function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/about' element={<About/>}/>
     </Routes>
    </BrowserRouter>
)}
