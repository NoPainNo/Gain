import './assets/css/App.css';
import axios from "axios";
import React, { useState, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main';
import MainPage2 from './pages/Main_';
import CreatePage from './pages/Create';
import { useMediaQuery } from 'react-responsive'

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

  const isMobileDevice = useMediaQuery({
    query: "(minWidth: 900px)",
  });

  return (
    <div className="App">
      {/* <h2>Hi NoPainNo</h2>
      {loading?applicantData.title:""} */}
      {/* <MainPage/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/main" element={<MainPage2/>}/>
          <Route path="/create" element={<CreatePage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
