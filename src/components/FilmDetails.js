import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../pages/Home.css';

const FilmDetails = () => {
  const { id } = useParams(); // Get the film ID from the URL
  const [film, setFilm] = useState(null);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the film details
    const fetchFilm = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/films/${id}`);

        // Check if the response is OK
        if (!response.ok) {
          throw new Error(`Failed to fetch film: ${response.statusText}`);
        }

        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          setFilm(data); // Update the film state
        } else {
          throw new Error('Expected JSON, but received something else');
        }
      } catch (error) {
        console.error('Error fetching film:', error);
        setError(error.message);
      } finally {
        setLoading(false); // End loading state
      }
    };

    // Fetch the comments for the film
    const fetchComments = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/comments/film/${id}`);

        // Check if the response is OK
        if (!response.ok) {
          throw new Error(`Failed to fetch comments: ${response.statusText}`);
        }

        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          setComments(data); // Update the comments state
        } else {
          throw new Error('Expected JSON, but received something else');
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
        setError(error.message);
      }
    };

    // Call both functions to fetch film and comments
    fetchFilm();
    fetchComments();
  }, [id]); // Dependency on `id` from useParams()

  // Handle loading and errors
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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

            {/* Comments Section */}
            <h3>Comments</h3>
            <ul>
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <li key={comment._id}>
                    <p><strong>{comment.author}:</strong> {comment.content}</p>
                    <p><em>{new Date(comment.date).toLocaleString()}</em></p>
                  </li>
                ))
              ) : (
                <p>No comments yet.</p>
              )}
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
