import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCksKsBMJMVNCbHzIKDL1aH845zWYdaE7s",
    authDomain: "purposewithbackend-a5ed1.firebaseapp.com",
    databaseURL: "https://purposewithbackend-a5ed1.firebaseio.com",
    projectId: "purposewithbackend-a5ed1",
    storageBucket: "purposewithbackend-a5ed1.appspot.com",
    messagingSenderId: "649381454997",
    appId: "1:649381454997:web:e8fb8fd7fe46be609fe79c"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;