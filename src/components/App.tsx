import { HelmetProvider } from "react-helmet-async";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Tools from "./Tools";
import Works from "./Works";
import SEO from "./SEO";
import "../assets/style.css";

function App() {
  return (
    <HelmetProvider>
      <SEO />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:border focus:rounded">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Works />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </HelmetProvider>
  );
}

export default App;

