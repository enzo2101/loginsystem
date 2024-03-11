import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { User } from "../../types/User";
import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      const localToken = localStorage.getItem("authToken");
      if(localToken) {
        const data = await api.validateToken(localToken);
        if(data.user) {
          setUser(data.user);
        }
      }
    }
    validateToken();
  }, []);

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);
    if (data.user && data.token) {
        setUser(data.user);
        setToken(data.token);
        return true;
    }
    return false;
}

  const signout = async () => {
    await api.signout();
    setUser(null);
    setToken("");
  }

  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  }

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  )
} 