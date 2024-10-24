import React, { useEffect, useState } from 'react';
import './UserList.css';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/auth/users');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
            setMessage('An error occurred while fetching users.');
        }
    };

    const toggleBan = async (userId) => {
        try {
            const userToUpdate = users.find(user => user._id === userId);
            const action = userToUpdate.banned ? 'unban' : 'ban';

            const response = await fetch(`http://localhost:3000/api/auth/users/${userId}/ban`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const result = await response.json();
            setMessage(result.message);
            fetchUsers(); // Refresh the user list after banning/unbanning
        } catch (error) {
            console.error('Error toggling ban:', error);
            setMessage('An error occurred while toggling the ban status.');
        }
    };

    return (
        <div className="outer-wrap">
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
                        <span>Statistics</span>
                    </li>
                    <li tabIndex="0" className="icon-customers">
                        <span>Films & Users</span>
                    </li>
                    <li tabIndex="0" className="icon-users">
                        <span>Users</span>
                    </li>
                    <li tabIndex="0" className="icon-settings">
                        <span>Settings</span>
                    </li>
                </ul>
            </nav>

            <div className="content">
                
                <div>
                    {message && <p>{message}</p>}
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Banned</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user._id}>
                                    <td>{user.nom}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>{user.banned ? 'Yes' : 'No'}</td>
                                    <td>
                                        {user.banned ? (
                                            <button className="unban" onClick={() => toggleBan(user._id)}>Unban</button>
                                        ) : (
                                            <button className="ban" onClick={() => toggleBan(user._id)}>Ban</button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserList;
