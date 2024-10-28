// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, get, child } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIDJB9LfKxMf8vS1DMaDpw0i3uzsAPHW8",
  authDomain: "learnlingo-93d9a.firebaseapp.com",
  projectId: "learnlingo-93d9a",
  storageBucket: "learnlingo-93d9a.appspot.com",
  messagingSenderId: "47154520752",
  appId: "1:47154520752:web:6bdbafe2909e20a83c1175",
  databaseURL:
    "https://learnlingo-93d9a-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//methods of auth

export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("User registered:", user);
    return user;
  } catch (error) {
    console.error("Error registering user:", error.message);
  }
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("User logged in:", user);
    return user;
  } catch (error) {
    console.error("Error logging in:", error.message);
  }
};

export const getCurrentUser = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Current user:", user);
    } else {
      console.log("No user is logged in");
    }
  });
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Error logging out:", error.message);
  }
};

//---- initial Realtime Database ----//

const db = getDatabase(app);

export const getTeachers = async () => {
  const dbRef = ref(db);
  try {
    const snapshot = await get(child(dbRef, "/teachers"));
    if (snapshot.exists()) {
      const data = snapshot.val();
      return data;
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error(error);
  }
};

export const getTeacherById = async (teacherId) => {
  const dbRef = ref(db);
  try {
    const snapshot = await get(child(dbRef, `teachers/${teacherId}`));
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error(error);
  }
};
