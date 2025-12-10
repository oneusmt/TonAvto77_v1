import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Process from './components/Process';
import CarTypes from './components/CarTypes';
import Reviews from './components/Reviews';
import Contacts from './components/Contacts';
import FinalCTA from './components/FinalCTA';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Benefits />
      <Process />
      <CarTypes />
      <Reviews />
      <Contacts />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
