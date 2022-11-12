// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";
import { getFirestore, collection, addDoc, setDoc, doc, getDocs, getDoc, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqYi9fQoHtibLdo_qH_MIcK06DXPSsj_U",
  authDomain: "smit-attendance-a2f3e.firebaseapp.com",
  projectId: "smit-attendance-a2f3e",
  storageBucket: "smit-attendance-a2f3e.appspot.com",
  messagingSenderId: "172620297031",
  appId: "1:172620297031:web:720d88dcba57d383d59262"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



//   sign in admin to the firebase

function signinFirebase(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}


function logoutfromfirebase() {
  return signOut(auth);
}



function addClassToDb(classSchedule, classTiming, teacherName, sectionName, courseName, batchNumber) {
  return addDoc(collection(db, "Classes"), {
    classSchedule,
    classTiming,
    teacherName,
    sectionName,
    courseName,
    batchNumber,
  });
}


export {
  signinFirebase,
  logoutfromfirebase,
  addClassToDb
}
