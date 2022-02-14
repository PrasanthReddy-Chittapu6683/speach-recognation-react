import firebase from 'firebase'
import 'firebase/storage'

export const firebaseApp = firebase.initializeApp({
    "projectId": "ai-react-tfod",
    "appId": "1:150185282425:web:6ee3822e0e92f02098fda8",
    "storageBucket": "ai-react-tfod.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyBetSSc4m019pIB7EkhHKaf7CEGhcv-n-M",
    "authDomain": "ai-react-tfod.firebaseapp.com",
    "messagingSenderId": "150185282425"
});
