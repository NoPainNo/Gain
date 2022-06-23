import './assets/css/App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main';
import MainPage_ from './pages/Main_';
import CreatePage from './pages/Create';
import Test from './pages/Test';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/main" element={<MainPage_/>}/>
          <Route path="/create" element={<CreatePage />}/>
          <Route path="/test" element={<Test />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
