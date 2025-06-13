// src/Admin/SlotGeneration.jsx
import { useState } from 'react';
import './SlotGeneration.css';

const initialExams = [
  {
    id: 1,
    name: "Mathematics I - Midterm",
    date: "2025-03-15",
    semester: "Semester 1",
    slotsGenerated: true,
    slots: [
      { time: "09:00-11:00", room: "Block A-101", capacity: 30 },
      { time: "11:30-13:30", room: "Block B-202", capacity: 45 }
    ]
  },
  {
    id: 2,
    name: "Programming - Final Exam",
    date: "2025-04-20",
    semester: "Semester 2",
    slotsGenerated: false,
    slots: []
  }
];

const SlotGeneration = () => {
  const [exams, setExams] = useState(initialExams);

  const handleGenerateSlots = (examId) => {
    setExams(exams.map(exam =>
      exam.id === examId ? { ...exam, slotsGenerated: true } : exam
    ));
  };

  return (
    <div className="slot-generation-container">
      <h2 className="slot-generation-title">Exam Slot Management</h2>

      <div className="exam-list">
        <div className="responsive-table">
          <table className="slot-table">
            <thead>
              <tr>
                <th>Exam Name</th>
                <th>Date</th>
                <th>Semester</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {exams.map(exam => (
                <tr key={exam.id}>
                  <td data-label="Exam Name">{exam.name}</td>
                  <td data-label="Date">{new Date(exam.date).toLocaleDateString()}</td>
                  <td data-label="Semester">{exam.semester}</td>
                  <td data-label="Status">
                    <span className={`status-badge ${exam.slotsGenerated ? 'generated' : 'pending'}`}>
                      {exam.slotsGenerated ? 'Generated' : 'Pending'}
                    </span>
                  </td>
                  <td data-label="Action">
                    {!exam.slotsGenerated && (
                      <button
                        className="generate-btn"
                        onClick={() => handleGenerateSlots(exam.id)}
                      >
                        Generate Slots
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="generated-slots">
        <h3>Recently Generated Slots</h3>
        {exams.filter(e => e.slotsGenerated).map(exam => (
          <div key={exam.id} className="exam-slots">
            <h4>{exam.name}</h4>
            <div className="responsive-table">
              <table className="slot-details">
                <thead>
                  <tr>
                    <th>Time Slot</th>
                    <th>Room</th>
                    <th>Capacity</th>
                  </tr>
                </thead>
                <tbody>
                  {exam.slots.map((slot, index) => (
                    <tr key={index}>
                      <td data-label="Time Slot">{slot.time}</td>
                      <td data-label="Room">{slot.room}</td>
                      <td data-label="Capacity">{slot.capacity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlotGeneration;
