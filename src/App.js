import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FilmDetails from './components/FilmDetails';
import AdminPage from './pages/AdminPage';
import UserList from './components/BanUnbanUser';
 // Import the AdminPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/film/:id" element={<FilmDetails />} />
      
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/ban-unban" element={<UserList />} /> {/* Fixed self-closing tag */}
        <Route path="*" element={<h1>404 - Route not found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
