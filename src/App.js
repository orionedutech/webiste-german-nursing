import "./App.css";
import { useState, useEffect } from "react";
import { FAQPage, Home } from "./Pages";
import { Footer, NavBar, MobileNavbar } from "./Components";
import { Route, Routes, useLocation } from "react-router-dom";
import ThankyouPage from "./Pages/ThankyouPage/ThankyouPage";

function App() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const { pathname } = useLocation();

  function handleMobileMenuActive() {
    setMobileMenuActive(!mobileMenuActive);
  }
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  


  return (
    <div className="App">
      <NavBar
        mobileMenuActive={mobileMenuActive}
        handleMobileMenuActive={handleMobileMenuActive}
      />
      <MobileNavbar
        mobileMenuActive={mobileMenuActive}
        handleMobileMenuActive={handleMobileMenuActive}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thankyou" element={<ThankyouPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
