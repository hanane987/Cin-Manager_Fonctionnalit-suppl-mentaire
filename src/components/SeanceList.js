import React, { useEffect, useState } from 'react';

const Seances = () => {
  const [seances, setSeances] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSeances = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/seances'); // Adjusted URL
        if (!response.ok) {
          throw new Error('Failed to fetch seances');
        }
        const data = await response.json();
        setSeances(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchSeances();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Seances</h1>
      <ul>
        {seances.map(seance => (
          <li key={seance._id}>{seance.title} - {seance.date}</li> // Use appropriate properties
        ))}
      </ul>
    </div>
  );
};

export default Seances;
