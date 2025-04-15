import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration (Replace with your actual Firebase config)
const firebaseConfig = {
  apiKey: "AIzaSyA0UZoN4NAweK02ZFl4IB4bRonyp81Fw_c",
  authDomain: "collage-project-1-c7f87.firebaseapp.com",
  projectId: "collage-project-1-c7f87",
  storageBucket: "collage-project-1-c7f87.firebasestorage.app",
  messagingSenderId: "622424514045",
  appId: "1:622424514045:web:74aa72056d512c04754d94",
  measurementId: "G-TRL702WEYQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const dbc = getFirestore(app);

export { dbc };
