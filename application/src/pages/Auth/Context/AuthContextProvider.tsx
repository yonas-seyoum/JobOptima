import { createContext, ReactNode, useContext } from "react";
import useAuth from "../hooks/useAuth";

type AuthContextType = {
  currentUser: any
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = () => {
  const auth = useContext(AuthContext);
  if (auth === undefined) {
    throw new Error("Auth problem go fix it");
  }
  return auth;
};

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
