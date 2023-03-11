import React from 'react'
import './App.css'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './screens/Login'

function App() {
  const user = false

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route exact path="/" Component={HomeScreen} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  )
}

export default App
