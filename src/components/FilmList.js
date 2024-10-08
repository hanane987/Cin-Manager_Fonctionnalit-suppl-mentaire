// src/components/FilmList.js

import React, { useEffect, useState } from 'react';
import { fetchFilms } from '../services/filmService';
import FilmCard from './FilmCard';  // Import FilmCard component

const FilmList = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFilms = async () => {
      try {
        const data = await fetchFilms();
        setFilms(data); // Store the films in state
      } catch (error) {
        setError("Failed to load films");
      } finally {
        setLoading(false);
      }
    };
    
    getFilms(); // Fetch films on component mount
  }, []);

  if (loading) return <p>Loading films...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Available Films</h1>
      <div className="film-list">
        {films.map((film) => (
          <FilmCard key={film._id} film={film} />
        ))}
      </div>
    </div>
  );
};

export default FilmList;
