import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import Error404 from './pages/Error404'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route exact path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
