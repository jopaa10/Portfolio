import { useEffect } from 'react';
import SharedLayout from './components/Layout/SharedLayout';
import './styles/index.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <div className="App">
      <div className="bg-animation">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      <SharedLayout />
    </div>
  );
}

export default App;
