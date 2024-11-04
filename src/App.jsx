
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Pages/home/Home';
import Skills from './Pages/skills/Skills';
import About from './Pages/About/About';
import Footer from './Component/Footer/Footer';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';


function App() {
  
  
 

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Home/>
     
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
    </BrowserRouter>
   
    </>
  );
}

export default App;
