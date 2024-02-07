import './App.css';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Home from './Components/Home.js';
import About from './Components/About.js';
import ContactUs from './Components/ContactUs.js';
import { Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Prediction from './Components/Prediction';
import Dashboard from './Components/Dashboard';
import Implementation from './Components/Implementation';


function App() {
  const headerProps = 'Maatri Shakthi'
  const footerProps1 = '© 2024 Copyright: '
  const footerProps2 = 'MaatriShakthi.com '
  return (
    <div className="App">
      <Header headerProps={headerProps}/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/ContactUS" element={<ContactUs />}/>
        <Route path="/Prediction" element={<Prediction />}/>
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/Implementation" element={<Implementation />}/>
      </Routes>
      <Footer footerProps={{footerProps1, footerProps2}}/>
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
