// firebase
import firebase from 'firebase/app';
// Add the Firebase products that you want to use
import 'firebase/analytics';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA77lYjYSAzU1Mr6_d-gaCyKKdBLBc2VvY',
  authDomain: 'dailyauction-544ae.firebaseapp.com',
  projectId: 'dailyauction-544ae',
  storageBucket: 'dailyauction-544ae.appspot.com',
  messagingSenderId: '471359378705',
  appId: '1:471359378705:web:23bc1f7466ce8663dd68b0',
  measurementId: 'G-03PPZSNMZK',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const authService = firebase.auth();
