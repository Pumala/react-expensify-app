import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC29JAsAGZuNoDsU6DC819K84uoCuPG2yg",
    authDomain: "expensify-cca29.firebaseapp.com",
    databaseURL: "https://expensify-cca29.firebaseio.com",
    projectId: "expensify-cca29",
    storageBucket: "expensify-cca29.appspot.com",
    messagingSenderId: "178920366321"
};

firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'Carolyn Lam'
});