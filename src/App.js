import './assets/css/App.css';
import axios from "axios";
import React, { useState, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main';
import CreatePage from './pages/Create';


function App() {
  const [applicantData, setapplicantData] = useState();
  const [loading, setLoading] = useState(false);
  useLayoutEffect(() => {
    readApplicantData();
  }, []);

  const readApplicantData = async (programID, userID) => {
    const response = await axios.get("http://localhost:8000/api/gains/");
    console.log(response.data[0]);
    setapplicantData(response.data[0]);
    setLoading(true);
  };

  return (
    <div className="App">
      {/* <h2>Hi NoPainNo</h2> */}
      {/* {loading?applicantData.description:""} */}
      {/* <MainPage/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/main" element={<MainPage />}/>
          <Route path="/create" element={<CreatePage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
