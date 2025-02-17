
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from './pages/Home';
import Signup from "./pages/Signup";
import Feed from "./pages/Feed";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/feed" element={<Feed/>} />
    </Routes>
  </Router>

  
  );
}

export default App;
