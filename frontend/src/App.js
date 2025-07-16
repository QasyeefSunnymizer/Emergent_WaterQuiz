import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenu from "./components/MainMenu";
import LevelSelect from "./components/LevelSelect";
import Tutorial from "./components/Tutorial";
import DiveGame from "./components/DiveGame";
import LocationTrivia from "./components/LocationTrivia";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/level-select" element={<LevelSelect />} />
          <Route path="/tutorial/:locationId" element={<Tutorial />} />
          <Route path="/dive-game/:locationId" element={<DiveGame />} />
          <Route path="/location-trivia/:locationId" element={<LocationTrivia />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;