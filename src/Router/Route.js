import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import GetStart from '../Pages/GetStart'



export const CreateRouter =() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/get" element={<GetStart/>} />
        

        </Routes>
    </BrowserRouter>
   
  )
}
