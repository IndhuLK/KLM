import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA-PkC364dgpNMD7_alCJYGVq_GpCy5uQ4",
  authDomain: "klm-project-d635e.firebaseapp.com",
  projectId: "klm-project-d635e",
  storageBucket: "klm-project-d635e.firebasestorage.app",
  messagingSenderId: "720828097682",
  appId: "1:720828097682:web:a214882bff5cd9b6afb24b",
  measurementId: "G-WMC2Z0GT0C",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
