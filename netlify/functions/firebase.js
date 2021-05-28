const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDQdL2rWlaO9EZ9kaMXNdeGWppMDFxJh1U",
  authDomain: "week8-d6d56.firebaseapp.com",
  projectId: "week8-d6d56",
  storageBucket: "week8-d6d56.appspot.com",
  messagingSenderId: "683787025379",
  appId: "1:683787025379:web:df93b439da9d50dbddfed6"
}
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase