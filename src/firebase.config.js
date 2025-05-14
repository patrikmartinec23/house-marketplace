import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBp9j3GTHcE5qcwfFFcEKX8rFyMGc2-a2o',
    authDomain: 'house-marketplace-app-4bf33.firebaseapp.com',
    projectId: 'house-marketplace-app-4bf33',
    storageBucket: 'house-marketplace-app-4bf33.firebasestorage.app',
    messagingSenderId: '295277385017',
    appId: '1:295277385017:web:b299e3185f5dbaa29d84e8',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
