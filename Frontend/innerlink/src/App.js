
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from './pages/Home';
import Feed from "./pages/Feed";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home/>} />
      <Route path="/feed" element={<Feed/>} />
    </Routes>
  </Router>

  
  );
}

export default App;
