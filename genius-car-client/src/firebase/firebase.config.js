// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
  apiKey: "AIzaSyDnjqrQ_Qf5ky9UzRqh8it9eNu9lQeLoII",
  authDomain: "genius-car-82157.firebaseapp.com",
  projectId: "genius-car-82157",
  storageBucket: "genius-car-82157.appspot.com",
  messagingSenderId: "97264828631",
  appId: "1:97264828631:web:cf3f21030a2295c3b63092",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
