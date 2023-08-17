import React, { useRef } from 'react'
import { auth } from '../firebase'
import './SignInScreen.css'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'

function SignInScreen() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const register = (e) => {
    e.preventDefault()

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  const signIn = (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <div className="signInScreen">
      <form action="">
        {' '}
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signInScreen__gray">New to Netflix? </span>
          <span className="signInScreen__link" onClick={register}>
            {' '}
            Sign Up now
          </span>
        </h4>
      </form>
    </div>
  )
}

export default SignInScreen
