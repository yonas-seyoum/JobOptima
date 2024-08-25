import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Jobs from "./pages/jobs/jobs";
import ContactUs from "./components/ContactUs/contactUs";
import Profile from "./pages/Profile/profile";
import Auth from "./pages/Auth/auth";
import AboutUs from "./components/AboutUs/aboutUs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
