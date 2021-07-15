import { Route } from "react-router-dom";




//pages
import HomePage from "./pages/Home.page";

//HOC
import DefaultHOC from "./HOC/Default.HOC";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



//JSX
function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage}/>
    </>
  );
}

export default App;
