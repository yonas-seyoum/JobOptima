import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Jobs from "./pages/jobs/jobs";
import Profile from "./pages/Profile/profile";
import Auth from "./pages/Auth/auth";
import Navigation from "./components/Navigation/navigation";
import ThemeContextProvider from "./Context/ThemeContextProvider";
import useScroll from "./Hooks/useScroll";
import "./App.css";

function App() {
  const { homeRef, aboutRef, contactRef, scrollTo } = useScroll();
  return (
    <BrowserRouter basename="/">
      <ThemeContextProvider>
        <div className="App">
          <Navigation scrollTo={scrollTo} />
          <Routes>
            <Route
              path="/"
              element={<Landing refs={{ homeRef, aboutRef, contactRef }} />}
            />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
