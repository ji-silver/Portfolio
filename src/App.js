import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skils from "./components/Skils";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Banner />
      <About />
      <Skils />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
