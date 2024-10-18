// src/pages/ReservationsPage.js
import SeanceList from '../components/SeanceList';
import ReservationForm from '../components/ReservationForm';

function ReservationsPage() {
  return (
    <div>
      <h1>Reservations</h1>
      <SeanceList />
      <ReservationForm />
    </div>
  );
}

export default ReservationsPage;
