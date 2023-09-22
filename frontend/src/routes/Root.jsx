import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { DrawPage } from '../modules/draw/pages/DrawPage'
import { LoginPage } from '../modules/login/pages/LoginPage'

const Root = () => {
  return (
    
    <Routes>
        <Route path='/' element={<DrawPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
    </Routes>
    
  )
}

export default Root