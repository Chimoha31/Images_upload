import { initializeApp } from "firebase/app";
import {getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAXtoD7e5ZQZwkkltkzgHe2CW09FoHKgcI",
  authDomain: "image-uploader-59c55.firebaseapp.com",
  projectId: "image-uploader-59c55",
  storageBucket: "image-uploader-59c55.appspot.com",
  messagingSenderId: "720025209666",
  appId: "1:720025209666:web:0ac557b2b056007750d6db"
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


export default storage;