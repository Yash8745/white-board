import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { DrawPage } from '../modules/draw/pages/DrawPage'
import { LoginPage } from '../modules/login/pages/LoginPage'
import { UserPage } from '../modules/user/pages/UserPage'

const Root = () => {
  return (
    
    <Routes>
        <Route path='/' element={<h1>Page under Construction</h1>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/draw' element={<DrawPage/>}/>
        <Route path='/user' element={<UserPage/>}/>
    </Routes>
    
  )
}

export default Root