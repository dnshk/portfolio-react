import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import 'bootstrap';

function App() {
    return (
        <>
          <Header/>
          <Hero/>
          <About/>
          <Work/>
          <Contact/>
          <Footer/>
        </>
    );
}

export default App;
