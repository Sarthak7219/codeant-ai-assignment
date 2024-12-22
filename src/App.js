import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Repositories from "./pages/Repositories/Repositories.jsx";
import SignInPage from "./pages/SignIn/SignInPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </Router>
  );
};

export default App;
