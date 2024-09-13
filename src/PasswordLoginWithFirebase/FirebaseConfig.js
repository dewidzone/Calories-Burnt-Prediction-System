
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAgeBoXfRQyNwGXWbXeWSvRwqOpBSIUKiE",
  authDomain: "calories-burnt-predictio-83757.firebaseapp.com",
  projectId: "calories-burnt-predictio-83757",
  storageBucket: "calories-burnt-predictio-83757.appspot.com",
  messagingSenderId: "124228287645",
  appId: "1:124228287645:web:1777dfd3554ba615d72874"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)
