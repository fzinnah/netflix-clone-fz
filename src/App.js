import React, { useEffect } from 'react'
import './App.css'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './screens/Login'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice'
import Profile from './screens/Profile'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  console.log(auth)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        )
      } else {
        dispatch(logout())
      }
    })

    return unsubscribe
  }, [dispatch])

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/profile" Component={Profile} />
            <Route exact path="/" Component={HomeScreen} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  )
}

export default App
