// import BinaryOperator from "./components/BinaryOperator";
// import ClasseWithOrOperator from "./components/ClassesWithOrOperator";
// import InLineClasses from "./components/InLineClasses";
// import InLineStyle from "./components/InLineStyles";
// import InLineTernary from "./components/InLineTernary";
// import ReturnTemprano from "./components/ReturnTemprano";
// import SpreadProperties from "./components/SpreadProperties";

import CounterContainer from "./CounterContainer";

function App() {
  // console.log("Render app");

  return (
    <div>
      {/* <ReturnTemprano condition={true}/> */}
      {/* <BinaryOperator condition={"Algo"}/> */}
      {/* <InLineTernary number={"10"}/> */}
      {/* <InLineStyle condition={false}/> */}
      {/* <InLineClasses condition={true}/> */}
      {/* <ClasseWithOrOperator/> */}
      {/* <SpreadProperties additionalStyles={{
        fontSize: '40px',
        color: 'blue',
      }}/> */}
      <CounterContainer/>
    </div>
  );
}

export default App;
