import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { createUserWithEmailAndPassword,GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase.config";

const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
const [loading, setLoading] = useState(true);
  const registerUser = async (email, password) => {
    // Add your registration logic here
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmail = async (email, password) => {
    // Add your sign-in logic here
    return await signInWithEmailAndPassword(auth, email, password);
  }

  const signInWithGoogle = async () => {
    return await signInWithPopup(auth, googleProvider);
  }

  const logout = async () => {
    return await signOut(auth);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>{
      setCurrentUser(user);
      setLoading(false);
      if(user){
        const {email, photoURL, displayName} = user;
        const userDate = {
          email,
          photoURL,
          name: displayName,
        }
      }
    });
    return () => unsubscribe();
  },[]);
  const value = {
    currentUser,
    loading,
    registerUser,
    signInWithGoogle,
    signInWithEmail,
    logout,
  }; // Add your authentication logic here

  return (<AuthContext.Provider value={value}>{children}</AuthContext.Provider>);
};
