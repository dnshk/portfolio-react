import logo from './img/icon.png';
import './App.css';
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Work from './components/Work'

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
