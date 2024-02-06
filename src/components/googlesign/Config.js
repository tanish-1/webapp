// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAl7-QOk0ayG-bk0eKSW3rbm3BYZF_hLto",
  authDomain: "webapp2-33d73.firebaseapp.com",
  projectId: "webapp2-33d73",
  storageBucket: "webapp2-33d73.appspot.com",
  messagingSenderId: "833509887007",
  appId: "1:833509887007:web:9dafc4f09ee83a4fd3592a",
  measurementId: "G-W05VZ7ME32",
  databaseURL: "https://webapp2-33d73-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
