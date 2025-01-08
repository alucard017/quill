import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blog } from "./pages/Blog";
import Dashboard from "./pages/Dashboard";

const App:React.FC=()=>{
  return (
    <div className="min-h-screen bg-blue-100">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/blog/:id" element={<Blog />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
