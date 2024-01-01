import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdsO28q-u4KTbtnzPyXoSqLIaHLK7xs74",
  authDomain: "blog-website-b748c.firebaseapp.com",
  projectId: "blog-website-b748c",
  storageBucket: "blog-website-b748c.appspot.com",
  messagingSenderId: "863332682837",
  appId: "1:863332682837:web:481bc2be6fe93df0b3d8dc",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
