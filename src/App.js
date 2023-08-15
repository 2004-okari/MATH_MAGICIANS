import './App.css';
import {
  Routes, Route, Link,
} from 'react-router-dom';
import Quote from './components/QuoteApi';
import Calculator from './components/Calculator';
import HomePage from './components/Home';

function App() {
  return (

    <>
      <nav className="navbar">
        <h2 className="nav-text">Math Magicians</h2>
        <ul className="list-cover">
          <li className="list"><Link className="link-tag" to="/">Home</Link></li>
          <li className="list"><Link className="link-tag" to="/calculator">Calculator</Link></li>
          <li className="list"><Link className="link-tag" to="/quotes">Quote</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
