import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"
import './App.css';

//Components
import Navbar from "../src/components/Navbar/Navbar";
import Home from "../src/pages/home";

function App() {
  const [navbar, setNavbar] = useState("home");
  console.log(navbar)
  return (
    <>
      <div className="navbarHome sticky-top">
        <Navbar setNavbar={setNavbar}/>
      </div>
      <div>
        <Home navbar={navbar}/>
      </div>
    </>
  );
}

export default App;
