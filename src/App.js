import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer'
import Carousel  from "./components/Carousel/Carousel";
// import Raiting from "./components/raiting/Raiting"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel/>
      {/* <Raiting/> */}
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;