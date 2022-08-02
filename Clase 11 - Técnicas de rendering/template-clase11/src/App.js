import BinaryOperator from "./components/BinaryOperator";
import InLineTernary from "./components/InLineTernary";
import ReturnTemprano from "./components/ReturnTemprano";

function App() {
  console.log("Render app");

  return (
    <div>
      {/* <ReturnTemprano condition={true}/> */}
      {/* <BinaryOperator condition={"Algo"}/> */}
      <InLineTernary number={"10"}/>
    </div>
  );
}

export default App;
