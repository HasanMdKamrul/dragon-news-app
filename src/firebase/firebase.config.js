// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAq42xazK1m8rRC1PFDS5y00PHjypPdHw",
  authDomain: "dragon-news-app-client.firebaseapp.com",
  projectId: "dragon-news-app-client",
  storageBucket: "dragon-news-app-client.appspot.com",
  messagingSenderId: "509855844202",
  appId: "1:509855844202:web:8635a1a63273e4f5488713",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
