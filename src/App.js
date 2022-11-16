import logo from './logo.svg';
import './App.css';

//el codigo usado, aca dentro de la función es jsx
////código html dentro del js, tremendo.
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>

        <div id="saludo">
          <h1>Hola alumnos!</h1>
          <h2>Como dicen que les va?</h2>
          <p>contenido del curso, enlace: <a href='https://google.com.ar' target="_black"> link</a>.</p>
        </div>
      </header>


    </div>
  );
}


export default App;
