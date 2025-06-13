// Admin/EditExam.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditExam = () => {
  const { examId } = useParams();
  const [examData, setExamData] = useState(null);

  useEffect(() => {
    // Fetch exam data by ID
    // fetchExamData(examId).then(data => setExamData(data));
  }, [examId]);

  return (
    <div className="main-content">
      <h2>Edit Exam Details</h2>
      <form>
        <div className="form-group">
          <label>Exam Date</label>
          <input 
            type="date" 
            value={examData?.date || ''}
            onChange={(e) => setExamData({...examData, date: e.target.value})}
          />
        </div>
        
        <div className="form-group">
          <label>Session Type</label>
          <select value={examData?.session || ''}>
            <option>Morning</option>
            <option>Afternoon</option>
          </select>
        </div>

        {/* Add other editable fields */}
        <button type="submit" className="btn-primary">Update Exam</button>
      </form>
    </div>
  );
};
export default EditExam;
