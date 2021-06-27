import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD3WmpuyTeEXbr_Owl6AiL_Cz6BwEqKYDY",
    authDomain: "rtyui-4b047.firebaseapp.com",
    projectId: "rtyui-4b047",
    storageBucket: "rtyui-4b047.appspot.com",
    messagingSenderId: "405774054898",
    appId: "1:405774054898:web:c704cb6adbdaa454cb676b",
    measurementId: "G-6T795ERK4W"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const firebaseAuth = firebaseApp.auth();
