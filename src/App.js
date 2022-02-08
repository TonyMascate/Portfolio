import Contact from './composants/Contact';
import Footer from './composants/Footer';
import Hero from './composants/Hero';
import Moi from './composants/Moi';
import Projets from './composants/Projets';
import Services from './composants/Services';
import Skills from './composants/Skills';
import './main.scss'

function App() {
  return (
    <>
      <Hero />
      <Moi />
      <Services />
      <Skills />
      <Projets />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
