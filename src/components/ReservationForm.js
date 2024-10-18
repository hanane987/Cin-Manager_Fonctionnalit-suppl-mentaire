// src/components/ReservationForm.js
import { useState } from 'react';
import axios from 'axios';

function ReservationForm() {
  const [seanceId, setSeanceId] = useState('');
  const [nombreDePlaces, setNombreDePlaces] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/reservations', { seance: seanceId, nombreDePlaces });
      alert('Reservation successful!');
    } catch (error) {
      alert('Reservation failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={seanceId} onChange={(e) => setSeanceId(e.target.value)} placeholder="Seance ID" required />
      <input type="number" value={nombreDePlaces} onChange={(e) => setNombreDePlaces(e.target.value)} placeholder="Number of Seats" required />
      <button type="submit">Reserve</button>
    </form>
  );
}

export default ReservationForm;
