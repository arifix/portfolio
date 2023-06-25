import "../assets/css/style.css";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Header from "./Header";
import Background from "./Background";
import Skills from "./Skills";
import Works from "./Works";
import Footer from "./Footer";
import { useEffect, useState } from "react";

function App() {
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (prefersDark) {
      setDark(true);
    }

    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDark(true);
    }
  }, []);

  return (
    <>
      <div className={`${isDark ? "dark " : ""}`}>
        <Background isDark={isDark} />
        <Header isDark={isDark} setDark={setDark} />
        <Hero />
        <About />
        <Works />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
