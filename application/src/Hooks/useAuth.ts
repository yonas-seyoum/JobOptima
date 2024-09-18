import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import useInputValidation from "./useInputValidation";
import { useEffect, useState } from "react";

export default function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  const { isEmail, isValidPassword } = useInputValidation();
  const googleProvider = new GoogleAuthProvider();

  const login = async (email: string, password: string) => {
    const emailIsValid = isEmail(email);
    const passwordIsValid = isValidPassword(password);

    if (emailIsValid && passwordIsValid) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch {
        throw new Error("");
      }
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const signUp = async (email: string, password: string) => {
    if (isEmail(email)) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error: any) {
        throw new Error(error);
      }
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return {
    currentUser,
    login,
    logout,
    signUp,
    signInWithGoogle,
  };
}
