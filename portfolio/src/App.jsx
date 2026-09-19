import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MouseSparkles from "./components/MouseSparkles";
import SecretTerminal from "./components/SecretTerminal";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <MouseSparkles />
      <SecretTerminal />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
