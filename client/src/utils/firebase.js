import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authaiprep.firebaseapp.com",
  projectId: "authaiprep",
  storageBucket: "authaiprep.firebasestorage.app",
  messagingSenderId: "40228677846",
  appId: "1:40228677846:web:85ee8aabd41f5d57f78177",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
