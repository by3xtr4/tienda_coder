import logo from './logo.svg'; ///inactivo aun
import './App.css';
import Navbar from './components/Navbar';
import Slide from './components/Slide';
import News from './components/News';
import Logo from './components/Logo';
import Separador1 from './components/Separador';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ContenidoProductos from './components/contenidoProductos';
import { BrowserRouter, Routes, Route } from "react-router-dom" ; 
import ContenidoInicio from './components/contenidoInicio';
import ContenidoContacto from './components/contenidoContacto';
import ContenidoNosotros from './components/contenidoNosotros';
import ContenidoMensajes from './components/contenidoMensajes';
import ContenidoNoticias from './components/contenidoNoticias';
import CategoryContainer from './components/productos_categoria'
import ItemContainer from './components/itemConteiner';
import ProductosContainer from './components/contenidoProductos';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Logo/>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<ContenidoInicio />} />
          <Route exact path='/Contacto' element={<ContenidoContacto />} />
          <Route exact path='/Nosotros' element={<ContenidoNosotros />} />
          <Route exact path='/Mensajes' element={<ContenidoMensajes/>} />
          <Route exact path='/Noticias' element={<ContenidoNoticias/>} />
          
          <Route exact path='/Productos' element={<ContenidoProductos/>} />
          <Route exact path='category/:categoryName' element={<CategoryContainer />} />
          <Route  exact path='/item/:itemID' element={<ItemContainer />} />
        
        </Routes>
      </div>
    </BrowserRouter>

      
      
      <ItemListContainer
      greeting = {"Bienvenidos a Paiball"}
      />


      
      <Separador1/>
      <Footer/>
      
    </div>
  );
}

export default App;
