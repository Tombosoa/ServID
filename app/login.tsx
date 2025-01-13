"use client"
import React from "react";
import { OAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../lib/firebase-client";

const Login = () => {
  const handleLogin = async () => {
    const oidcProvider = new OAuthProvider("oidc.example");

    try {
      const result = await signInWithPopup(auth, oidcProvider);
      const user = result.user;

      console.log("Utilisateur connecté :", user);

      // Récupérer le token ID
      const token = await user.getIdToken();
      console.log("Token utilisateur :", token);
    } catch (error) {
      console.error("Erreur d'authentification :", error);
    }
  };

  return <button onClick={handleLogin}>Se connecter</button>;
};

export default Login;
