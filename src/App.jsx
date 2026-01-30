import ScrollToTop from './components/common/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Studio from './components/Studio/Studio';
import Music from './components/Music/Music';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <Services />
        <Studio />
        <Music />
        <About />
        <Contact />
        <Location />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
