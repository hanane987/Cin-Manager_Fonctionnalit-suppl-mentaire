import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../pages/Home.css';

const FilmDetails = () => {
  const { id } = useParams(); // Get the film ID from the URL
  const [film, setFilm] = useState(null);
  const [seances, setSeances] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the film details
    const fetchFilm = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/films/${id}`);

        // Check if the response is OK
        if (!response.ok) {
          throw new Error('Failed to fetch film');
        }

        const data = await response.json();
        setFilm(data); // Update the film state
      } catch (error) {
        console.error('Error fetching film:', error);
        setError(error.message);
      }
    };

    // Fetch the seances for the film
    const fetchSeances = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/seances/film/${id}`);

        // Check if the response is OK
        if (!response.ok) {
          throw new Error('Failed to fetch seances');
        }

        const data = await response.json();
        setSeances(data); // Update the seances state
      } catch (error) {
        console.error('Error fetching seances:', error);
        setError(error.message);
      }
    };

    // Call both functions to fetch film and seances
    fetchFilm();
    fetchSeances();
  }, [id]); // Dependency on `id` from useParams()

  if (error) return <div>Error: {error}</div>;
  if (!film) return <div>Loading...</div>;

  return (
    <div className="film-details outer-wrap">
      <header className="site-header">
        <div className="site-info">
          <h1 className="site-title">{film.title}</h1>
          <p className="site-description">Sit back | relax | watch</p>
        </div>
      </header>

      <div className="content-area">
        <main className="main-content-area">
          <section className="film-info">
            <img src={film.imageUrl} alt={film.title} />
            <h2 className="film-title">{film.title}</h2>
            <p className="film-description">{film.description}</p>
            <span className="film-detail">Year: {film.year}</span><br />
            <span className="film-detail">Duration: {film.duration} min</span><br />
            <span className="film-detail">Genre: {film.genre}</span>

            {/* Seances Section */}
            <h3>Seances</h3>
            <ul>
              {seances.map((seance) => (
                <li key={seance._id}>
                  <p>Date: {new Date(seance.horaire).toLocaleString()}</p>
                  <p>Salle: {seance.salle.nom}</p>
                  <p>Available Seats: {seance.placesDisponibles}</p>
                  <p>Price: {seance.tarif} USD</p>
                </li>
              ))}
            </ul>
          </section>
        </main>

        <aside className="sidebar-right">
          <div className="widget">
            <h2 className="widget-title">Top Rated Movies</h2>
            <ul>
              <li><a href="#">Avengers: Endgame</a></li>
              <li><a href="#">Fight Club</a></li>
              <li><a href="#">The Dark Knight</a></li>
              <li><a href="#">Pulp Fiction</a></li>
              <li><a href="#">Forrest Gump</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default FilmDetails;
