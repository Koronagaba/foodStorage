import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_API_AUTH_DOMAIN,
  projectId: 'foodstorage-2f9df',
  storageBucket: process.env.REACT_APP_API_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_API_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_API_APP_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDNU3vZxxB8Np5OJnyh4zkwZ1nxSvFs26s",
//   authDomain: "foodstorage-2f9df.firebaseapp.com",
//   projectId: "foodstorage-2f9df",
//   storageBucket: "foodstorage-2f9df.appspot.com",
//   messagingSenderId: "216365345472",
//   appId: "1:216365345472:web:843971d3c66acdbac61b25"
// };

// init firebase
const app = initializeApp(firebaseConfig);

// init firestore
const db = getFirestore(app);

export { db };
