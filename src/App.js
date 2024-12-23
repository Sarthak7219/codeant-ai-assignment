import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Repositories from "./pages/Repositories/Repositories.jsx";
import SignInPage from "./pages/SignIn/SignInPage";
import HomePage from "./pages/HomePage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/signin" element={<SignInPage />} />

        {/* Any other URL */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
