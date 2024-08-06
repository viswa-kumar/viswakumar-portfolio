
import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { themeContext } from "./context";
import { useContext } from "react";
import About from "./components/About/About";



function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{
        background: darkMode ? 'var(--black)' : '',
        color: darkMode ? 'white' : ''
      }}>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />


    </div>
  );
}

export default App;
