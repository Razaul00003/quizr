import "./custom.scss";
import Header from "./components/Header";
import Dashboard from "./screens/Dashboard";
import Footer from "./components/Footer";
import Login from "./screens/Login";
import Registration from "./screens/Register";
import LeadershipBoard from "./screens/LeadershipBoard";
import Quiz from "./screens/Quiz";
import Profile from "./screens/Profile";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/rank" element={<LeadershipBoard />} />
          <Route path="/quiz/:category" element={<Quiz />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
