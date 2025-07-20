import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth'; // Removed signInWithCustomToken as it's not typically used for local MVP
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// For local development, paste your firebaseConfig object directly here.
// This is the object you copied from the Firebase Console.
const firebaseConfig = {
  apiKey: "AIzaSyAYSvltuwnTwOafrKGNgYttyKohQ2_1eJg",
  authDomain: "relictronics-app.firebaseapp.com",
  projectId: "relictronics-app",
  storageBucket: "relictronics-app.firebasestorage.app",
  messagingSenderId: "386699928040",
  appId: "1:386699928040:web:1f5ca58e8337e4aea6c45d",
  measurementId: "G-GHMNCEKCW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// For local development, we can sign in anonymously by default for convenience,
// or rely solely on explicit email/password login via the Auth component.
// For this MVP, let's sign in anonymously on app load if no user is present.
const initializeAnonymousAuth = async () => {
    try {
        // Check if a user is already signed in (e.g., from a previous session)
        if (!auth.currentUser) {
            await signInAnonymously(auth);
            console.log("Signed in anonymously for initial access.");
        }
    } catch (error) {
        console.error("Firebase anonymous authentication error during initialization:", error);
    }
};

// Call the initialization function
initializeAnonymousAuth();

// Export the Firebase instances for use in other components
export { app, auth, db, storage, onAuthStateChanged };
