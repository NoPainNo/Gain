import './assets/css/App.css';
import axios from "axios";
import React, { useState, useLayoutEffect } from "react";
import MainPage from './pages/Main';

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
      {/* <h2>Hi NoPainNo</h2>
      {loading?applicantData.title:""} */}
      <MainPage/>
    </div>
  )
}

export default App;
