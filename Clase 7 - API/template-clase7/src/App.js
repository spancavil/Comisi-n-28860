import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './container/ItemDetailContainer';
import ItemListContainer from './container/ItemListContainer';

function App() {

  const temp = 20;
  // const opcion = "Hogar"
  const opcion = "Decoracion"

  return (
    <>
      <NavBar temperatura={temp} opcionAdicional={opcion}/>
      {/* <ItemListContainer greeting={"Hola comisión 28860"}/> */}
      <ItemDetailContainer />
    </>
  );
}

export default App;