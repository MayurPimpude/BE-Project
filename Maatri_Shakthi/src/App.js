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
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Dashboard from './Components/Dashboard';
// import Implementation from './Components/Implementation';


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

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//     const [data, setData] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             setIsLoading(true);
//             try {
//                 const response = await axios.get('http://localhost:5000/get-data');
//                 setData(response.data);
//             } catch (error) {
//                 setError(error);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div>
//             {isLoading && <p>Loading data...</p>}
//             {error && <p>Error: {error.message}</p>}
//             {data && <p>Data from Flask: {JSON.stringify(data)}</p>}
//         </div>
//     );
// }

// export default App;
