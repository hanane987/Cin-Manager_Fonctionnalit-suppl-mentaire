// src/pages/HomePage.js

import React from 'react';
import FilmList from '../components/FilmList';
import './Home.css'; // Ensure this path is correct

const HomePage = () => {
  return (
    <div className="outer-wrap">
      <header className="site-header">
        <div className="site-info">
          <h1 className="site-title">THE MOVIE BOX</h1>
          <p className="site-description">Sit back | relax | watch</p>
        </div>
        <nav className="main-menu">
          <ul></ul>
        </nav>
      </header>

      <div className="content-area">
        <main className="main-content-area">
          <section className="posts">
            <h2 className="section-header">Now Showing</h2>
            <FilmList />
          </section>

          <section className="watch">
            <h2 className="section-header">Watch Today</h2>
            {/* ... insert film cards here ... */}
          </section>

          <section className="gallery">
            <h2 className="section-header">Movies Gallery</h2>
            <div className="gallery-imgs">
              {/* Example Gallery Items */}
              <div className="gallery-img">
                <a href="images/gallery_1.jpg" data-lightbox="gallery">
                  <img src="images/gallery_1.jpg" alt="Gallery Image" />
                </a>
              </div>
            </div>
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
          {/* Additional Widgets */}
        </aside>
      </div>
    </div>
  );
};

export default HomePage;
