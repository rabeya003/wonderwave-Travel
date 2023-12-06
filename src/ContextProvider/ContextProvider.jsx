import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
const googleprovider = new GoogleAuthProvider();

export const ApiProvider = createContext(null);
const auth = getAuth(app);
const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const google = () => {
    return signInWithPopup(auth, googleprovider);
  };
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unSuscribe();
    };
  }, []);
  const authInfo = { user, createUser, signIn, loading, logout, google };
  return (
    <ApiProvider.Provider value={authInfo}>{children}</ApiProvider.Provider>
  );
};

export default ContextProvider;
