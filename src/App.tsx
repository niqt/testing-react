import React, { useState, useEffect } from 'react'
import './App.css'
import UserInfo from './Molecules/UserInfo'
import Login from './Molecules/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  )
}
/*
<Route path="blogs" element={<Blogs />} />
<div className="App">
      <UserInfo />
    </div>
    */
export default App
