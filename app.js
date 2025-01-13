// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgK5Y0t7jzPb8uxpIJbooQM51QVbq7ShA",
  authDomain: "secu1-ec083.firebaseapp.com",
  projectId: "secu1-ec083",
  storageBucket: "secu1-ec083.firebasestorage.app",
  messagingSenderId: "875810048443",
  appId: "1:875810048443:web:dee830fab1cce703cd9c9e",
  measurementId: "G-4BRYKYJ83X"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");
const userSection = document.getElementById("user-section");
const authSection = document.getElementById("auth-section");
const userEmail = document.getElementById("user-email");
const logoutBtn = document.getElementById("logout-btn");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Inscription réussie !");
      signupForm.reset();
    })
    .catch((error) => {
      alert(`Erreur : ${error.message}`);
    });
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Connexion réussie !");
      loginForm.reset();
    })
    .catch((error) => {
      alert(`Erreur : ${error.message}`);
    });
});

logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("Déconnexion réussie !");
    })
    .catch((error) => {
      alert(`Erreur : ${error.message}`);
    });
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    authSection.style.display = "none";
    userSection.style.display = "block";
    userEmail.textContent = user.email;
  } else {
    authSection.style.display = "block";
    userSection.style.display = "none";
  }
});