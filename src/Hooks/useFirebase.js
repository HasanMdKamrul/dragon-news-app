import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ** sign in with pop up

  const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //   * signout

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   ** signin

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   ** on auth state change

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  //   ** register

  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { providerLogin, user, loading, logOut, register, logIn };

  return authInfo;
};

export default useFirebase;
