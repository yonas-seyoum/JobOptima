import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWQ2lCSUDPwlAZssgwQ93upK_ncUHRDnU",
  authDomain: "job-optima.firebaseapp.com",
  projectId: "job-optima",
  storageBucket: "job-optima.appspot.com",
  messagingSenderId: "983518179650",
  appId: "1:983518179650:web:119c579050e5f1a80958db",
  measurementId: "G-J02H6QDT1P",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
