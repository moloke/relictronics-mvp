import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAYSvltuwnTwOafrKGNgYttyKohQ2_1eJg",
  authDomain: "relictronics-app.firebaseapp.com",
  projectId: "relictronics-app",
  storageBucket: "relictronics-app.appspot.com",
  messagingSenderId: "386699928040",
  appId: "1:386699928040:web:1f5ca58e8337e4aea6c45d",
  measurementId: "G-GHMNCEKCW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export the Firebase instances for use in other components
export { app, auth, db, storage };
