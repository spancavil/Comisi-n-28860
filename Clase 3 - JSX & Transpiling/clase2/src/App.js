import './App.css';
import NavBar from './components/NavBar';

function App() {

  const temp = 20;

  const spanStyles= {
    fontSize: 24,
    margin: 12,
  }

  return (
    <>
      <NavBar/>
      <div className="container">
        <button 
          style={{
            width: 100,
            borderRadius: 10,
            backgroundColor: 'green'
          }}
        >Presione aquí</button>
        {/* Elementos autocloseables */}
        <input className="app-input" placeholder="Ingrese su edad"/>
        <img src={'/assets/capuccino.jpg'} alt="capuccino" className="capu-img"/>
        <hr/>
        <span style={spanStyles}>Valor de la variable temperatura es: {temp}</span>
      </div>
    </>
  );
}

export default App;