import React from 'react'
import './Profile.css'
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import PlansScreen from './PlansScreen'

function Profile() {
  const user = useSelector(selectUser)

  return (
    <div className="profile">
      <Nav />
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profile__details">
            <h2>{user.email}</h2>
            <div className="profile__plans">
              <h3>Plans</h3>

              <PlansScreen />

              <button
                onClick={() => signOut(auth)}
                className="profile__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
