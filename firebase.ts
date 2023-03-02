import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA@wBKUy4j4r60TCAAKSW-KCOKYKqXajfM",
  authDomain: "chatgpt-messenger.firebaseapp.com",
  projectid: "chatgpt-messenger",
  storageBucket: "chatgpt-messenger.appspot.com",
  messagingSenderId: "161076747981",
  appId: "1:161076747981:web: 0f7a6139e1c61ab3ce5384",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
