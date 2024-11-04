
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Pages/home/Home';
import Skills from './Pages/skills/Skills';
import About from './Pages/About/About';
import Footer from './Component/Footer/Footer';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import { Element } from 'react-scroll';



function App() {
  

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <main>
        <Element name="home"><Home /></Element>
        <Element name="about"><About /></Element>
        <Element name="skills"><Skills /></Element>
        <Element name="projects"><Projects /></Element>
        <Element name="contact"><Contact /></Element>
      </main>
     <Footer/>
    </BrowserRouter>
   
    </>
  );
}

export default App;
