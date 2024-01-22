import About from "./component/About";
import Navbar from "./component/navbar/Navbar";
import Projects from "./component/Projects";
import Hero from "./component/Hero";

const Home = () => {
  return (
    <main> 
        <Navbar /> 
        <Hero />
        <div className="h-screen"></div>
        <About />
        <div className="h-screen"></div>
        <Projects />
    </main>
  )
}

export default Home;