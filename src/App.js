import './assets/css/style.css';
//import "./assets/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Index from './pages/index'
import About from "./pages/About"
import Jobs from "./pages/Jobs"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Contact from './pages/Contact';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="about" element={<About/>} />
        <Route path="jobs" element={<Jobs/>} />
        <Route path="login" element={<Login/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="register" element={<Register/>} />
        <Route path="forgotPassword" element={<ForgotPassword/>} />
        <Route path="resetpassword" element={<ResetPassword/>} />
      </Routes>
    </div>
  );
}

export default App;
