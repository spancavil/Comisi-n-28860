import './App.css';
// import Button from './components/Button';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';

function App() {

  const temp = 20;
  // const opcion = "Hogar"
  const opcion = "Decoracion"

  // const spanStyles= {
  //   fontSize: 24,
  //   margin: 12,
  // }

  return (
    <>
      <NavBar temperatura={temp} opcionAdicional={opcion}/>
      <ItemListContainer greeting={"Hola comisión 28860"}/>
    </>
  );
}

export default App;