import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: 'AIzaSyCJT6UOKQvN57BdtiODOpMcJ3Z8dp-75ZQ',
  authDomain: 'queuing-system-12d39.firebaseapp.com',
  projectId: 'queuing-system-12d39',
  storageBucket: 'queuing-system-12d39.appspot.com',
  messagingSenderId: '298093933664',
  appId: '1:298093933664:web:39e2413a9a863dedb23f05',
  measurementId: 'G-H3K0KFKE83',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
// const analytics = getAnalytics(app);
