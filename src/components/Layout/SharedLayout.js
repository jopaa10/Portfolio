import About from '../../pages/About';
import Home from '../../pages/Home';
import Resume from '../../pages/Resume';
import Skills from '../../pages/Skills';
import Contact from '../../pages/Contact';
import Projects from '../../pages/Projects';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingButton from '../common/FloatingButton';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Resume />
        <Projects />

        <Skills />
        <Contact />
      </main>
      <Footer />
      <FloatingButton />
    </>
  );
};

export default SharedLayout;
