import Navbar from '../components/Navbar';
import About from '../pages/About';
import Home from '../pages/Home';
import Resume from '../pages/Resume';
import Skills from '../pages/Skills';
import Portfolio from '../pages/Portfolio';
import Footer from '../components/Footer';
import Cursor from './Cursor';

const SharedLayout = () => {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Skills />
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
