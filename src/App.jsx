import { Route } from "react-router-dom";
import Temp from "./Components/temp";

//HOC
import DefaultHOC from "./HOC/Default.HOC";


//JSX
function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={Temp}/>
    </>
  );
}

export default App;
