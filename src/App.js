import './App.css';
import Navbar from './compnents/Navbar';
import Shop from './compnents/Shop';


function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Shop/>
    </div>
    </>
  );
}

export default App;
