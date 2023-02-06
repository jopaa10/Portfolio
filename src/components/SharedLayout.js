import Navbar from '../components/Navbar';
import About from '../pages/About';
import Home from '../pages/Home';
import Resume from '../pages/Resume';
import Skills from '../pages/Skills';
import Portfolio from '../pages/Portfolio';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Skills />
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </>
  );
};

export default SharedLayout;
