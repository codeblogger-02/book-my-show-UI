import { Route } from "react-router-dom";




//pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";


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
      <DefaultHOC path="/" exact component={Movie}/>
    </>
  );
}

export default App;
