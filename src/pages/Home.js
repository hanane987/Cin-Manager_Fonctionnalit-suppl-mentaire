import React from "react";
import "./Home.css";

const Home = () => {
  return (

    
    <div className="container">
      <h1>Welcome to CineManager</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="post">
        
            <div>
              <img src="images/img_1.jpg" alt="fight club" />
            </div>
            <div className="post-content">
              <h2>Fight Club</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio aut qui, ad voluptas molestiae ratione, cumque earum nihil laborum quidem labore. Eligendi neque culpa pariatur ullam rem corrupti doloribus illo amet nisi, assumenda dolores expedita magnam, perferendis velit eos aut?</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
        <div className="post">
          <div>
            <img src="images/img_1.jpg" alt="fight club" />
          </div>
          <div className="post-content">
            <h2>Fight Club</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio aut qui, ad voluptas molestiae ratione, cumque earum nihil laborum quidem labore. Eligendi neque culpa pariatur ullam rem corrupti doloribus illo amet nisi, assumenda dolores expedita magnam, perferendis velit eos aut?</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
      <div className="post">
        <div>
          <img src="images/img_1.jpg" alt="fight club" />
        </div>
        <div className="post-content">
          <h2>Fight Club</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio aut qui, ad voluptas molestiae ratione, cumque earum nihil laborum quidem labore. Eligendi neque culpa pariatur ullam rem corrupti doloribus illo amet nisi, assumenda dolores expedita magnam, perferendis velit eos aut?</p>
        </div>
      </div>
    </div>

        <div className="col-md-6">
          <div className="post">
            <div>
              <img src="images/img_2.jpg" alt="inception" />
            </div>
            <div className="post-content">
              <h2>Inception</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quidem voluptates assumenda harum. Quis eveniet, officia debitis rerum eligendi nemo itaque modi? Dolorem iure commodi ipsa saepe. Id, enim. Tenetur.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
  );
};

export default Home;
