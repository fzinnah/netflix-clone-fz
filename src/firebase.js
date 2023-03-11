import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyB-skNM2Hc_LugDRsnN6LznuxWbywXQVic',
  authDomain: 'netflix-clone-3f694.firebaseapp.com',
  projectId: 'netflix-clone-3f694',
  storageBucket: 'netflix-clone-3f694.appspot.com',
  messagingSenderId: '718648280810',
  appId: '1:718648280810:web:fa4fa1d4adcfc1e92e3993',
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { auth }
export default db
