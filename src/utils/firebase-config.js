
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDzSYnyOUH2_TwzLv8TGRVj-v-eNirRccc",
  authDomain: "netflix-clone-2a566.firebaseapp.com",
  projectId: "netflix-clone-2a566",
  storageBucket: "netflix-clone-2a566.appspot.com",
  messagingSenderId: "710673559469",
  appId: "1:710673559469:web:e5ffc42b907ff5062d7b24",
  measurementId: "G-8JDK3W54JJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);