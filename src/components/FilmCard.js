// src/components/FilmCard.js

import React from 'react';

const FilmCard = ({ film }) => {
  return (
    <div className="film-card">
      <h2>{film.title}</h2>
      <p>Genre: {film.genre}</p>
      <p>Release Date: {film.releaseDate}</p>
      <p>Description: {film.description}</p>
      {/* Add more film details as needed */}
    </div>
  );
};

export default FilmCard;
