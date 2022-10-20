import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
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

  //   ** on auth state change

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = { providerLogin, user, loading };

  return authInfo;
};

export default useFirebase;
