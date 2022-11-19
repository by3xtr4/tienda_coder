import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Slide from './components/Slide';
import News from './components/News';
import Logo from './components/Logo';
import Separador1 from './components/Separador';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Logo/>
      <Menu/>
      <Slide/>
      <News/>
      <Separador1/>
      <Footer/>
      
    </div>
  );
}

export default App;
