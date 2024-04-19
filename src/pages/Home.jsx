import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <Hero />
        <About />
        <Experiences />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
