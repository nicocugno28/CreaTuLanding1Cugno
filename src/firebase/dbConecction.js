// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIM5I883SHqq6I1mqzkrWiVxapbdxQkc8",
    authDomain: "clothesstore-4a89a.firebaseapp.com",
    projectId: "clothesstore-4a89a",
    storageBucket: "clothesstore-4a89a.appspot.com",
    messagingSenderId: "676972429862",
    appId: "1:676972429862:web:2fcf62ea11c1ae63a0dce7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)