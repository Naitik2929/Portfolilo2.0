import "./App.css";
import Header from "./Components/header/Header";
import About from "./Components/about/About";
import Footer from "./Components/footer/Footer";
import Contact from "./Components/contact/Contact";
import Project from "./Components/projects/Project";
import Experience from "./Components/experience/Experience";
import Nav from "./Components/navbar/nav";
function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
