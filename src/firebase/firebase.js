import firebase from 'firebase';

let firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBSt-SIs8u6vS7wxRd7Bfnlwwjz1z2Q0d8',
  authDomain: 'code-visualized.firebaseapp.com',
  projectId: 'code-visualized',
  storageBucket: 'code-visualized.appspot.com',
  messagingSenderId: '866338902413',
  appId: '1:866338902413:web:e17c5462be85bd69f7adc4',
  measurementId: 'G-S0KRGJZGF7',
});

let db = firebaseApp.firestore();

export { db };
