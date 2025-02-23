import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Feed from "./pages/Feed";
import Newsfeed from "./pages/Newsfeed";
import Post from "./component/Post";
import PrivateRoute from "./service/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />

        {/* Private Routes */}
        <Route
          path="/feed"
          element={
            <PrivateRoute>
              <Feed />
            </PrivateRoute>
          }
        />
        <Route
          path="/newsfeed"
          element={
            <PrivateRoute>
              <Newsfeed />
            </PrivateRoute>
          }
        />
        <Route
          path="/post"
          element={
            <PrivateRoute>
              <Post />
            </PrivateRoute>
          }
        />

       
      </Routes>
    </Router>
  );
}

export default App;