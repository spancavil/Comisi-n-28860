import './App.css';
import Button from './components/Button';
import NavBar from './components/NavBar';

function App() {

  const temp = 20;
  // const opcion = "Hogar"
  const opcion = ""

  const spanStyles= {
    fontSize: 24,
    margin: 12,
  }

  return (
    <>
      <NavBar temperatura={temp} opcionAdicional={opcion}/>
      <div className="container">
        <Button styles={{
          padding: 10
        }} />
        {/* Elementos autocloseables */}
        <input className="app-input" placeholder="Ingrese su edad"/>
        <img src={'/assets/capuccino.jpg'} alt="capuccino" className="capu-img"/>
        <hr/>
        <Button/>
        <Button/>
        <span style={spanStyles}>Valor de la variable temperatura es: {temp}</span>
      </div>
    </>
  );
}

export default App;