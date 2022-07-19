import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';

function App() {

  const temp = 20;
  // const opcion = "Hogar"
  const opcion = "Decoracion"

  return (
    <>
      <NavBar temperatura={temp} opcionAdicional={opcion}/>
      <ItemListContainer greeting={"Hola comisión 28860"}/>
    </>
  );
}

export default App;