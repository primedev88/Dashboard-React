import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD9CtCtA2Dl6cf8FThKR2nrzAi_W6SQOsA",
  authDomain: "dashboard-324d9.firebaseapp.com",
  projectId: "dashboard-324d9",
  storageBucket: "dashboard-324d9.appspot.com",
  messagingSenderId: "879566393722",
  appId: "1:879566393722:web:632bf60e0d9ceda86dc6c3"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth();