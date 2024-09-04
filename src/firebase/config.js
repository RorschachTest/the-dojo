import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDBjY-jsJ7HZciJhTbLoALSIOYibCNfzSA",
  authDomain: "thedojo-8106b.firebaseapp.com",
  projectId: "thedojo-8106b",
  storageBucket: "thedojo-8106b.appspot.com",
  messagingSenderId: "944220321997",
  appId: "1:944220321997:web:10070116ae12108e1e9184"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.timestamp

export { projectFirestore, projectAuth, timestamp }