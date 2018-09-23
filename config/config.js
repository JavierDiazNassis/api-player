'use strict'

const firebase = require('firebase')

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDz2tOctmorsEcLwvGwBMhZvvMKu3cg-Ok",
  authDomain: "webservice-task-ded7a.firebaseapp.com",
  databaseURL: "https://webservice-task-ded7a.firebaseio.com/",
  projectId: "webservice-task-ded7a",
  storageBucket: "webservice-task-ded7a.appspot.com",
  messagingSenderId: "964618625627"
})

const db = firebaseApp.database()

module.exports = {
  firebaseApp,
  db
}

