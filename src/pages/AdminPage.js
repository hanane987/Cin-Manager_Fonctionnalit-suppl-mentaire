import React, { useState, useEffect } from 'react';
import './AdminPage.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';
const AdminPage = () => {
  // State to store the statistics
  const [stats, setStats] = useState({
    totalFilms: 0,
    totalUsers: 0,
  });

  // Fetch statistics from the backend API
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/stats'); // Adjust the URL if needed
        const data = await response.json();
        setStats(data); // Set the fetched data into the state
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };

    fetchStats(); // Call the fetch function when the component mounts
  }, []);

  return (
    <div>
      <nav className="menu" tabIndex="0">
        <div className="smartphone-menu-trigger"></div>
        <header className="avatar">
          <img
            src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg"
            alt="Avatar"
          />
          <h2>John D.</h2>
        </header>
        <ul>
        <li tabIndex="0" className="icon-dashboard">
          <a href="/statistics">Statistics</a> {/* Link to Statistics */}
        </li>
        <li tabIndex="0" className="icon-customers">
          <a href="/films-users">Films & Users</a> {/* Link to Films & Users */}
        </li>
        <li tabIndex="0" className="icon-users">
          <a href="/ban-unban">Users</a> {/* Link to Users */}
        </li>
        <li tabIndex="0" className="icon-settings">
          <a href="/admin">Settings</a> {/* Link to Admin Page */}
        </li>
      </ul>
      </nav>

      <main>
        <div className="helper">
          <h1>statistics</h1>
          <p>Total Films: {stats.totalFilms}</p>
          <p>Total Users: {stats.totalUsers}</p>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
