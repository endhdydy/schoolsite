import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9PLuxDz8jUu26kc9kimhMgYbfJCFyihI",
  authDomain: "school-6cd5b.firebaseapp.com",
  databaseURL: "https://school-6cd5b-default-rtdb.firebaseio.com",
  projectId: "school-6cd5b",
  storageBucket: "school-6cd5b.firebasestorage.app",
  messagingSenderId: "645131118965",
  appId: "1:645131118965:web:74ffff2345007799a18b3c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;