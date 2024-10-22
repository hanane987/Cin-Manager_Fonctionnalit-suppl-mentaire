// src/components/Films.js

import React, { useEffect, useState } from 'react';
import '../pages/Home.css'; // Optional: Add CSS for styling
import { Link } from 'react-router-dom';
const Films = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/films'); // Ensure backend route is correct
        if (!response.ok) {
          throw new Error('Failed to fetch films');
        }
        const data = await response.json();
        setFilms(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchFilms();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <section className="watch">
      <h2 className="section-header">Watch Today</h2>
      {films.length === 0 ? (
        <p>No films available</p>
      ) : (
        films.map((film) => (
          <div className="watch-card" key={film._id}>
            <div className="watch-img">
              <img src={film.imageUrl} alt={film.title} />
            </div>
            <div className="watch-content">
              <h2>{film.title}</h2>
              <div className="movie-info">
                <span>{film.year}</span>
                <span>{film.duration} min</span>
                <span>{film.genre}</span>
                <p className="movie-story">{film.description}</p>
                <Link to={`/film/${film._id}`}>Read More</Link> {/* Update this line */}
              </div>
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default Films;
