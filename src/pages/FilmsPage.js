// src/pages/FilmsPage.js
import React from 'react';
import FilmList from '../components/FilmList'; // Import FilmList component
import SeanceList from '../components/SeanceList'; // Import SeanceList component

function FilmsPage() {
  return (
    <div>
      <h1>Films</h1>
      <FilmList /> {/* Render the FilmList component */}
      <SeanceList /> {/* Render the SeanceList component */}
    </div>
  );
}

export default FilmsPage;
