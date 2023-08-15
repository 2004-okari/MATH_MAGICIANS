import './App.css';
import Quote from './components/QuoteApi';
import Calculator from './components/Calculator';
import HomePage from './components/Home';
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (

    <>
    <nav>
      <h2>Math Magicians</h2>
      <ul>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/calculator" >Calculator</Link></li>
        <li><Link to="/quotes" >Quote</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/calculator' element={<Calculator />} />
      <Route path='/quotes' element={<Quote />} />
    </Routes>
      {/* <Calculator />
      <Quote /> */}
    </>
  );
}

export default App;
