import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import FormDetails from './pages/FormDetails';
import APIPage from './pages/APIPage';

const App = () => (
  <Router>
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/form-details" element={<FormDetails />} />
        <Route path="/api" element={<APIPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
