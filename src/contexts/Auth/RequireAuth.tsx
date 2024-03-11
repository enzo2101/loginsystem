import { useContext, useEffect } from "react"
import { AuthContext } from "./AuthContext"
import { Login } from "../../pages/Login";
import { Dashboard } from "../../pages/Dashboard";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {

  const auth = useContext(AuthContext);

  useEffect(() => {
    if(auth.user && window.location.pathname === "/"){
      alert("Você ja está logado!");
    }
  }, [auth.user])

  if (auth.user) {
    return <Dashboard />
  }
  else {
    return <Login />
  }

  return children;
}