import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import ContactUs from './components/ContactUs.jsx';
import { Routes, Route} from "react-router-dom";
import PredictionCSV from './components/PredictionCSV.jsx';
import PredictionValues from './components/PredictionValues.jsx';
import DLogin from './components/DLogin.jsx';
import DRegister from './components/DRegister.jsx';
import ULogin from './components/ULogin.jsx';
import URegister from './components/URegister.jsx';



function App() {
  const headerProps = 'Maatri Shakthi'
  return (
    <div className="App">
      <Header headerProps={headerProps} />
      <Routes> 
        <Route path="/" element={<Home />}/> 
        <Route path="/ContactUS" element={<ContactUs />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/predictionCsv" element={<PredictionCSV />}/>
        <Route path="/predictionValues" element={<PredictionValues />}/>
        <Route path="/DLogin" element={<DLogin />}/>
        <Route path="/DRegister" element={<DRegister />}/>
        <Route path="/ULogin" element={<ULogin />}/>
        <Route path="/URegister" element={<URegister />}/>
        {/*
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/Implementation" element={<Implementation />}/> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
