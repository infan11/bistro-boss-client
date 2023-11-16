// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_KeyapiKey,
  authDomain: import.meta.env.VITE_KeyauthDomain,
  projectId: import.meta.env.VITE_KeyprojectId,
  storageBucket: import.meta.env.VITE_KeystorageBucket,
  messagingSenderId: import.meta.env.VITE_KeymessagingSenderId,
  appId: import.meta.env.VITE_KeyappId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);