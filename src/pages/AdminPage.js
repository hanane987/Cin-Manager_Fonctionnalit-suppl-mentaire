import React from 'react';
import './AdminPage.css'; // Import CSS file for styling

const AdminPage = () => {
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
            <span>Dashboard</span>
          </li>
          <li tabIndex="0" className="icon-customers">
            <span>Customers</span>
          </li>
          <li tabIndex="0" className="icon-users">
            <span>Users</span>
          </li>
          <li tabIndex="0" className="icon-settings">
            <span>Settings</span>
          </li>
        </ul>
      </nav>

      <main>
        <div className="helper">
          <h1>RESIZE THE WINDOW</h1>
          <span>Breakpoints on 900px and 400px</span>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
