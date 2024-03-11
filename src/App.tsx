import "./App.css";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { Dashboard } from "./pages/Dashboard";
import { Register } from "./pages/Register"
import { Login } from "./pages/Login";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<RequireAuth><Login /></RequireAuth>}></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  )
}

export default App
