import firebase from 'firebase';

  // Initialize Firebase
var config = {
    apiKey: "AIzaSyB6g3QcpCy7chfNOQYlizAfIo1gKZ2W1N4",
    authDomain: "smart-shop-app.firebaseapp.com",
    databaseURL: "https://smart-shop-app.firebaseio.com",
    projectId: "smart-shop-app",
    storageBucket: "smart-shop-app.appspot.com",
    messagingSenderId: "770311739233"
};

const fire = firebase.initializeApp(config);
export default fire;
