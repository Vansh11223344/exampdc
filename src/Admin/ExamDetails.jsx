// src/Admin/ExamDetails.jsx
import { useParams } from "react-router-dom";

const ExamDetails = () => {
  const { id } = useParams();
  // Fetch exam details using id
  return (
    <div>
      <h2>Exam Details</h2>
      <p><strong>Exam ID:</strong> {id}</p>
      {/* Display all exam details here */}
      <button className="btn-primary">Create/Publish Slots</button>
    </div>
  );
};

export default ExamDetails;
