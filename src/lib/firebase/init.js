// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEq2WTbBhmyB6emfgLbpMPDdFS9EzgCZI",
  authDomain: "my-next-project-eb38b.firebaseapp.com",
  projectId: "my-next-project-eb38b",
  storageBucket: "my-next-project-eb38b.appspot.com",
  messagingSenderId: "845621897282",
  appId: "1:845621897282:web:9ae1453a8d3f7454eca5db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app