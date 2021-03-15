import firebase from "firebase";
import "@firebase/firestore";

const config = {
  apiKey: "AIzaSyA1yUL7_RABcOrmTTPIeUZdEK7HOBCadTA",
  authDomain: "todo-database-69b56.firebaseapp.com",
  projectId: "todo-database-69b56",
  storageBucket: "todo-database-69b56.appspot.com",
  messagingSenderId: "222142195198",
  appId: "1:222142195198:web:356037ea26b70c9b884caf",
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
