import "./DutySummary.css";

const duties = [
  {
    date: "12/07/2025",
    type: "Invigilation",
    room: "Room 101 (09:00-11:00)",
    subject: "Mathematics",
  },
  {
    date: "14/07/2025",
    type: "Reliever",
    room: "Room 202 (11:30-13:30)",
    subject: "Physics",
  },
  {
    date: "16/07/2025",
    type: "Squad",
    room: "Room 203 (14:00-16:00)",
    subject: "Programming",
  },
];

const typeColors = {
  Invigilation: "duty-invigilation",
  Reliever: "duty-reliever",
  Squad: "duty-squad",
};

const DutySummary = () => (
  <div className="duty-summary-container">
    <h2 className="duty-summary-title">Your Duty Summary</h2>
    <div className="duty-table-wrapper">
      <table className="duty-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Duty Type</th>
            <th>Room/Slot</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {duties.map((duty, idx) => (
            <tr key={idx}>
              <td>{duty.date}</td>
              <td>
                <span className={`duty-badge ${typeColors[duty.type]}`}>
                  {duty.type}
                </span>
              </td>
              <td>{duty.room}</td>
              <td>{duty.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default DutySummary;
