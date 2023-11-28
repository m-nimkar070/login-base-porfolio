import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Portfolio from './components/Portfolio/Portfolio';
import { AppProvider ,useAppContext } from './components/Context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

const AppContent = () => {
  const { loggedIn } = useAppContext();
  return (
    <Router>
      <Routes>
        <Route path="/login" element={loggedIn ? <Navigate to="/portfolio" /> : <Login />} />
        <Route path="/portfolio" element={!loggedIn ? <Navigate to='/login' /> : <Portfolio />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
