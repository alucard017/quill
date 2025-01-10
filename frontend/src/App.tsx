import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Editor from "./components/Editor";
import Blogs from "./components/Blogs";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import BlogPost from "./components/BlogPost";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Router>
      <div className={`flex min-h-screen ${isDarkMode ? "dark" : ""}`}>
        <Sidebar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <main className="flex-1 transition-colors duration-200 dark:bg-gray-900">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/editor/:id" element={<Editor />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogPost />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
