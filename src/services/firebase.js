import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Ta config (J'ai repris celle de ton main.js)
const firebaseConfig = {
  apiKey: "AIzaSyBGzMQwqbE1yPgoMfxvhgIeX7Qo0wBVJc4",
  authDomain: "learnpython-1d8d0.firebaseapp.com",
  projectId: "learnpython-1d8d0",
  storageBucket: "learnpython-1d8d0.firebasestorage.app",
  messagingSenderId: "975177947496",
  appId: "1:975177947496:web:304..." // Assure-toi d'avoir l'ID complet ici
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };