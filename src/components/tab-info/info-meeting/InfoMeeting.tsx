import "./info-meeting.css";
import { useState } from "react";

export default function () {
  const [nextMeeting] = useState({
    date: "25/09/2025 às 15:00",
    department: "Comercial",
  });

  const [lestedMeeting] = useState({
    date: "20/09/2025 às 15:00",
    department: "Marketing",
  });
  return (
    <div className="info-meeting">
      <section className="meeting-section">
        <div className="title-meeting">
          <img
            className="icon"
            id="calendar-icon"
            src="./icons/calendar.png"
            alt="calendar icon"
          />
          <h3>Ultima Reunião</h3>
        </div>
        <p>
          <strong>Data:</strong> {lestedMeeting.date}
        </p>
        <p>
          <strong>Departamento:</strong> {lestedMeeting.department}
        </p>
      </section>

      <section className="meeting-section">
        <div className="title-meeting">
          <img
            id="calendar-icon"
            src="./icons/calendar.png"
            alt="calendar icon"
          />
          <h3>Próxima Reunião</h3>
        </div>
        <p>
          <strong>Data:</strong> {nextMeeting.date}
        </p>
        <p>
          <strong>Departamento:</strong> {nextMeeting.department}
        </p>
      </section>
    </div>
  );
}
