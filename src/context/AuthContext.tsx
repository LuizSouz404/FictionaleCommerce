import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Magic } from 'magic-sdk';
import { MAGIC_PUBLIC_KEY } from '../utils/urls';
 
type User = {
  email: string;
}

type SignInCredentials = Pick<User, "email">;

type AuthContextData = {
  user: User | null;

  loginUser: (credentials: SignInCredentials) => Promise<void>;
  logoutUser: () => void;
}

type AuthProviderProps = {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

let magic: any; 

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  async function loginUser({email}: SignInCredentials) {
    try {
      setUser({email});
      router.push('/')
    } catch (error) {
      setUser(null);      
    }    
  }
  
  async function logoutUser() {
    try {
      setUser(null);
      router.push('/')
    } catch (error) {}
  }
  
  
  useEffect(() => {
    magic = new Magic(MAGIC_PUBLIC_KEY)
  }, [])
  
  return (
    <AuthContext.Provider value={{user, loginUser, logoutUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error("useAuth must be used within an AuthProvider");;
  }

  return context;
}

export default AuthContext