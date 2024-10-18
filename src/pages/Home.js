// // src/pages/Home.js
// import { Link } from 'react-router-dom';

// function Home() {
//   return (
//     <div>
//       <h1>Welcome to CinéManager</h1>
//       <Link to="/films">View Films</Link>
//     </div>
//   );
// }

// export default Home;
import React from 'react';
import './Home.css';

const App = () => {
  return (
    <div className="outer-wrap">
      <header className="site-header">
        <div className="site-info">
          <h1 className="site-title">THE MOVIE BOX</h1>
          <p className="site-description">Sit back | relax | watch</p>
        </div>
        <nav className="main-menu">
          <ul>
           
          </ul>
        </nav>
      </header>

      <div className="content-area">
        <main className="main-content-area">
          <section className="posts">
            <article className="post post-half">
              <a href="#">
                <div>
                  <img src="images/img_1.jpg" alt="fight club" />
                </div>
                <div className="post-content">
                  <h2>Fight Club</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio aut qui, ad voluptas molestiae ratione, cumque earum nihil laborum quidem labore...</p>
                </div>
              </a>
            </article>

            <article className="post post-half">
              <a href="#">
                <div>
                  <img src="images/img_2.jpg" alt="captain jack sparrow" />
                </div>
                <div className="post-content">
                  <h2>Captain Jack Sparrow</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio aut qui, ad voluptas molestiae ratione...</p>
                </div>
              </a>
            </article>

            <article className="post post-one-third">
              <a href="#">
                <div>
                  <img src="images/img_3.jpg" alt="the good the bad and the ugly" />
                </div>
                <div className="post-content">
                  <h2>The Good, The Bad, and The Ugly</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio aut qui, ad voluptas molestiae ratione...</p>
                </div>
              </a>
            </article>

            <article className="post post-one-third">
              <a href="#">
                <div>
                  <img src="images/img_4.jpg" alt="sherlock holmes" />
                </div>
                <div className="post-content">
                  <h2>Sherlock Holmes</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio aut qui, ad voluptas molestiae ratione...</p>
                </div>
              </a>
            </article>

            <article className="post post-one-third">
              <a href="#">
                <div>
                  <img src="images/img_6.jpg" alt="the joker" />
                </div>
                <div className="post-content">
                  <h2>The Joker</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio aut qui, ad voluptas molestiae ratione...</p>
                </div>
              </a>
            </article>

            <article className="post post-full">
              <a href="#">
                <div>
                  <img src="images/img_7.jpg" alt="mission impossible" />
                </div>
                <div className="post-content">
                  <h2>Mission Impossible</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio aut qui, ad voluptas molestiae ratione...</p>
                </div>
              </a>
            </article>
          </section>

          <section className="watch">
            <h2 className="section-header">Watch Today</h2>
            <div className="watch-card">
              <div className="watch-img">
                <img src="images/img_8.jpg" alt="" />
              </div>
              <div className="watch-content">
                <h2>Baby Driver</h2>
                <div className="movie-info">
                  <span>2017</span>
                  <span>121 min</span>
                  <span>Action</span>
                  <span>7.78</span>
                  <span>8:30 pm</span>
                  <p className="movie-story">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="watch-card">
              <div className="watch-img img-right">
                <img src="images/img_9.jpg" alt="" />
              </div>
              <div className="watch-content">
                <h2>Baby Driver</h2>
                <div className="movie-info">
                  <span>2017</span>
                  <span>121 min</span>
                  <span>Action</span>
                  <span>7.78</span>
                  <span>8:30 pm</span>
                  <p className="movie-story">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </section>

         

          <section className="gallery">
            <h2 className="section-header">Movies Gallery</h2>
            <div className="gallery-imgs">
              <div className="gallery-img">
                <a href="images/gallery_1.jpg" data-lightbox="gallery">
                  <img src="images/gallery_1.jpg" alt="" />
                </a>
              </div>
              <div className="gallery-img">
                <a href="images/gallery_2.jpg" data-lightbox="gallery">
                  <img src="images/gallery_2.jpg" alt="" />
                </a>
              </div>
              <div className="gallery-img">
                <a href="images/gallery_3.jpg" data-lightbox="gallery">
                  <img src="images/gallery_3.jpg" alt="" />
                </a>
              </div>
              <div className="gallery-img">
                <a href="images/gallery_4.jpg" data-lightbox="gallery">
                  <img src="images/gallery_4.jpg" alt="" />
                </a>
              </div>
              <div className="gallery-img">
                <a href="images/gallery_5.jpg" data-lightbox="gallery">
                  <img src="images/gallery_5.jpg" alt="" />
                </a>
              </div>
              <div className="gallery-img">
                <a href="images/gallery_6.jpg" data-lightbox="gallery">
                  <img src="images/gallery_6.jpg" alt="" />
                </a>
              </div>
              <div className="gallery-img">
                <a href="images/gallery_7.jpg" data-lightbox="gallery">
                  <img src="images/gallery_7.jpg" alt="" />
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
          <div className="widget">
            <h2 className="widget-title">Most Popular Movies</h2>
            <ul>
              <li><a href="#">Joker</a></li>
              <li><a href="#">Titanic</a></li>
              <li><a href="#">Inception</a></li>
              <li><a href="#">The Matrix</a></li>
              <li><a href="#">Gladiator</a></li>
            </ul>
          </div>
          <div className="widget">
            <h2 className="widget-title">Top Box Office</h2>
            <ul>
              <li><a href="#">Jurassic World</a></li>
              <li><a href="#">Black Panther</a></li>
              <li><a href="#">Avatar</a></li>
              <li><a href="#">Star Wars: The Force Awakens</a></li>
              <li><a href="#">Avengers: Infinity War</a></li>
            </ul>
          </div>
          <div className="widget">
            <h2 className="widget-title">Coming Soon</h2>
            <ul>
              <li><a href="#">Dune: Part Two</a></li>
              <li><a href="#">The Flash</a></li>
              <li><a href="#">Mission: Impossible - Dead Reckoning</a></li>
              <li><a href="#">Spider-Man: Beyond the Spider-Verse</a></li>
              <li><a href="#">Aquaman and the Lost Kingdom</a></li>
            </ul>
          </div>
          <div className="widget">
            <h2 className="widget-title">Best Directors</h2>
            <ul>
              <li><a href="#">Christopher Nolan</a></li>
              <li><a href="#">Quentin Tarantino</a></li>
              <li><a href="#">Steven Spielberg</a></li>
              <li><a href="#">Martin Scorsese</a></li>
              <li><a href="#">James Cameron</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;