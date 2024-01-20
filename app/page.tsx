import About from "./component/About";
import Navbar from "./component/navbar/Navbar";
import Hero from "./component/Hero";

const Home = () => {

  return (
    <main> 
        <Navbar /> 
        <Hero />
        <div className="h-screen"></div>
        <About />
        <div className="h-screen"></div>
    </main>
  )
}

export default Home;