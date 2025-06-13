import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ExamList.css';

const ExamList = () => {
  const allExams = [
    { id: 1, date: '2023-05-15', semester: 'Spring 2023', course: 'Introduction to Computer Science' },
    { id: 2, date: '2023-05-18', semester: 'Spring 2023', course: 'Data Structures and Algorithms' },
    { id: 3, date: '2023-05-20', semester: 'Spring 2023', course: 'Database Systems' },
    { id: 4, date: '2023-12-10', semester: 'Fall 2023', course: 'Operating Systems' },
    { id: 5, date: '2023-12-15', semester: 'Fall 2023', course: 'Computer Networks' },
    { id: 6, date: '2024-05-12', semester: 'Spring 2024', course: 'Artificial Intelligence' },
    { id: 7, date: '2024-05-14', semester: 'Spring 2024', course: 'Machine Learning' },
    { id: 8, date: '2024-05-16', semester: 'Spring 2024', course: 'Web Development' },
    { id: 9, date: '2024-12-08', semester: 'Fall 2024', course: 'Cloud Computing' },
    { id: 10, date: '2024-12-12', semester: 'Fall 2024', course: 'Cybersecurity Fundamentals' },
    { id: 11, date: '2025-05-10', semester: 'Spring 2025', course: 'Advanced Algorithms' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('All Semesters');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredExams = allExams.filter(exam => {
    const matchesSearch = exam.course.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          exam.semester.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          exam.date.includes(searchTerm);
    const matchesSemester = selectedSemester === 'All Semesters' || exam.semester === selectedSemester;
    return matchesSearch && matchesSemester;
  });

  const currentExams = filteredExams.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const semesters = ['All Semesters', ...new Set(allExams.map(exam => exam.semester))];

  const handlePageChange = (page) => setCurrentPage(page);
  const handleFilterChange = () => setCurrentPage(1);

  return (
    <div className="exam-list-container">
      <header className="exam-list-header">
        <h1 className="exam-title">Exam Records</h1>
      </header>

      <section className="exam-controls">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search exams..." 
            className="search-input"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              handleFilterChange();
            }}
          />
        </div>
        <div className="filter-container">
          <select 
            className="filter-select"
            value={selectedSemester}
            onChange={(e) => {
              setSelectedSemester(e.target.value);
              handleFilterChange();
            }}
          >
            {semesters.map(semester => (
              <option key={semester} value={semester}>{semester}</option>
            ))}
          </select>
        </div>
      </section>

      <section className="exam-data">
        <div className="table-wrapper">
          <table className="exam-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Semester</th>
                <th>Course</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentExams.length === 0 ? (
                <tr>
                  <td colSpan={4} className="no-data">No exams found.</td>
                </tr>
              ) : (
                currentExams.map(exam => (
                  <tr key={exam.id}>
                    <td data-label="Date">{exam.date}</td>
                    <td data-label="Semester">{exam.semester}</td>
                    <td data-label="Course">{exam.course}</td>
                    <td data-label="Actions">
                      <Link to={`/admin/exams/${exam.id}`} className="btn-table btn-edit">Edit</Link>
                      <button className="btn-table btn-danger">Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {filteredExams.length > itemsPerPage && (
          <div className="pagination-container">
            <div className="pagination">
              {Array(Math.ceil(filteredExams.length / itemsPerPage)).fill().map((_, i) => (
                <button
                  key={i + 1}
                  className={`pagination-btn${currentPage === i + 1 ? ' active' : ''}`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default ExamList;