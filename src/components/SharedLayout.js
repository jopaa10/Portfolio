import Navbar from '../components/Navbar';
import About from '../pages/About';
import Home from '../pages/Home';
import Resume from '../pages/Resume';
import Skills from '../pages/Skills';
import Portfolio from '../pages/Portfolio';
import { PositionProvider } from '../context/context';

const SharedLayout = () => {
  return (
    <>
      <PositionProvider>
        <Navbar />
        <main>
          <Home />
          <About />
          <Resume />
          <Portfolio />
          <Skills />
        </main>
      </PositionProvider>
    </>
  );
};

export default SharedLayout;
