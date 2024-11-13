import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhMClfVEcCDMQn0NmmD2oLlY8nH-1hs28",
  authDomain: "ecommerce-forconesi.firebaseapp.com",
  projectId: "ecommerce-forconesi",
  storageBucket: "ecommerce-forconesi.firebasestorage.app",
  messagingSenderId: "174007265836",
  appId: "1:174007265836:web:def37a58a67c5700c67f89"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db