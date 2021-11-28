// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Section from "./components/Section/Section";
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import { Routes, Route} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function App() {
  const navigate = useNavigate();

  const handleRoute = (page) => {
    navigate('/pages/aboutUs');
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Button onClick={handleRoute}>About Us</Button>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/pages/contactUs" element={<ContactUs />} />
        <Route path="/pages/aboutUs" element={<AboutUs />} />
        <Route path="/Section/Section" element={<Section />} />
        <Route path="/Footer/Footer" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
