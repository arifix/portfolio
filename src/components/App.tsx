import { useState } from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Tools from "./Tools";
import Works from "./Works";
import "../assets/style.css";

function App() {
  const [isDark, setDark] = useState(false);

  return (
    <main className={`${isDark ? "dark " : ""}`}>
      <Header isDark={isDark} setDark={setDark} />
      <Hero />
      <Works />
      <Tools />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
