import logo from './logo.svg'; ///inactivo aun
import './App.css';
import Navbar from './components/Navbar';
import Slide from './components/Slide';
import News from './components/News';
import Logo from './components/Logo';
import Separador1 from './components/Separador';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Logo/>
      <Navbar/>
      <ItemListContainer
      greeting = "Hola"
      />
      <Slide/>
      <News/>
      <Separador1/>
      <Footer/>
      
    </div>
  );
}

export default App;
