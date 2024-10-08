// src/pages/HomePage.js

import React from 'react';
import FilmList from '../components/FilmList';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to CinéManager</h1>
      <FilmList />
    </div>
  );
};

export default HomePage;
