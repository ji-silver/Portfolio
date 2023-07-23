import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Projects />
      <Contact />
      <div className="h-[4000px]"></div>
    </div>
  );
}

export default App;
