import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import SignUp from "./components/login/SignUp";
import ForgotPassword from "./components/login/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Use JSX literals for the 'element' prop */}
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reset" element={<ForgotPassword/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
