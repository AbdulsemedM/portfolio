import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlutterDev from './components/FlutterDev';
import WebDev from './components/WebDev';
import UiUx from './components/UiUx';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="relative z-0 bg-primary w-full overflow-x-hidden">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <FlutterDev />
        <WebDev />
        <UiUx />
        <Projects />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
