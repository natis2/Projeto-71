import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAFvPv4Le6ma37RfJOGGLmz0BUH21Y-kCw",
  authDomain: "projeto-71-f7cd5.firebaseapp.com",
  projectId: "projeto-71-f7cd5",
  storageBucket: "projeto-71-f7cd5.appspot.com",
  messagingSenderId: "643105871374",
  appId: "1:643105871374:web:078ea145e0e9f30eed0e5f"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
