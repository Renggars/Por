import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;