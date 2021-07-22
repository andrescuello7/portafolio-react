import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Components
import Navbar from "../src/components/Navbar/Navbar";
import Home from "../src/pages/home";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;
