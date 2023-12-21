// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4hJz8YQG5v-k27VQ8KJcAXVwECPMmjLQ",
  authDomain: "ecomerce-react-jp.firebaseapp.com",
  projectId: "ecomerce-react-jp",
  storageBucket: "ecomerce-react-jp.appspot.com",
  messagingSenderId: "808292480302",
  appId: "1:808292480302:web:4cf99975a43645a6bcb6bf",
  measurementId: "G-7BNSHT3B4Q"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);