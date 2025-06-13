// src/Admin/AddExam.jsx
import { useState } from "react";
import "./AddExam.css";

const courseOptions = {
  "1": ["Mathematics I", "Physics", "Chemistry"],
  "2": ["Mathematics II", "Programming", "Electronics"],
  "3": ["Data Structures", "Discrete Math", "Digital Logic"],
  "4": ["Algorithms", "Database Systems", "Operating Systems"],
  "5": ["AI", "ML", "ICT", "CSE", "DSE"],
  "6": ["Advanced AI", "Big Data", "Cloud Computing"],
  "7": ["Project", "Seminar", "Internship"],
};

const branchOptions = [
  { value: "AIML", label: "AIML" },
  { value: "CSE", label: "CSE" },
  { value: "ICT", label: "ICT" },
  { value: "DSE", label: "DSE" },
];

const sessionOptions = [
  { value: "Timeslot#1", label: "Timeslot#1 (Midterm)" },
  { value: "Timeslot#2", label: "Timeslot#2 (Midterm)" },
  { value: "Timeslot#3", label: "Timeslot#3 (Midterm)" },
  { value: "Timeslot#4", label: "Timeslot#4 (Midterm)" },
  { value: "Morning", label: "Morning (Final)" },
  { value: "Afternoon", label: "Afternoon (Final)" },
];

const departmentOptions = [
  { value: "Our", label: "Our Department" },
  { value: "Other", label: "Other Department" },
];

const AddExam = () => {
  const [formData, setFormData] = useState({
    academicYear: "",
    term: "",
    semester: "",
    branch: "",
    course: "",
    date: "",
    session: "",
    subjectDept: "",
    rooms: "",
    invigilators: "",
    students: "",
    relievers: "",
    squads: "",
    resourceDept: "",
    resourceCount: "",
    resourceRequiredDept: "",
    resourceRequiredCount: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here (API call or state update)
    alert("Exam Created Successfully!");
    setFormData({
      academicYear: "",
      term: "",
      semester: "",
      branch: "",
      course: "",
      date: "",
      session: "",
      subjectDept: "",
      rooms: "",
      invigilators: "",
      students: "",
      relievers: "",
      squads: "",
      resourceDept: "",
      resourceCount: "",
      resourceRequiredDept: "",
      resourceRequiredCount: "",
    });
  };

  // Dynamic course and branch logic
  const showBranch =
    ["5", "6", "7"].includes(formData.semester) && formData.semester !== "";
  const showCourse = formData.semester !== "";

  return (
    <div className="main-content">
      <div className="add-exam-container">
        <h2>Add New Exam</h2>
        <form className="exam-form" onSubmit={handleSubmit}>
          {/* Academic Year */}
          <div className="form-group">
            <label>Academic Year</label>
            <select
              name="academicYear"
              value={formData.academicYear}
              onChange={handleChange}
              required
            >
              <option value="">Select Year</option>
              <option value="2024-25">2024-25</option>
              <option value="2023-24">2023-24</option>
            </select>
          </div>

          {/* Term */}
          <div className="form-group">
            <label>Term</label>
            <select
              name="term"
              value={formData.term}
              onChange={handleChange}
              required
            >
              <option value="">Select Term</option>
              <option value="Mid-term">Mid-term</option>
              <option value="Final Exam">Final Exam</option>
            </select>
          </div>

          {/* Semester */}
          <div className="form-group">
            <label>Semester</label>
            <select
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              required
            >
              <option value="">Select Semester</option>
              {[1, 2, 3, 4, 5, 6, 7].map((sem) => (
                <option key={sem} value={sem}>
                  {sem}
                </option>
              ))}
            </select>
          </div>

          {/* Branch (only for 5/6/7) */}
          {showBranch && (
            <div className="form-group">
              <label>Branch</label>
              <select
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                required
              >
                <option value="">Select Branch</option>
                {branchOptions.map((b) => (
                  <option key={b.value} value={b.value}>
                    {b.label}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Course (dynamic) */}
          {showCourse && (
            <div className="form-group">
              <label>Course</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="">Select Course</option>
                {(courseOptions[formData.semester] || []).map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Date */}
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          {/* Session */}
          <div className="form-group">
            <label>Session</label>
            <select
              name="session"
              value={formData.session}
              onChange={handleChange}
              required
            >
              <option value="">Select Session</option>
              {sessionOptions.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          {/* Subject managed by */}
          <div className="form-group">
            <label>Subject Managed By</label>
            <select
              name="subjectDept"
              value={formData.subjectDept}
              onChange={handleChange}
              required
            >
              <option value="">Select Department</option>
              {departmentOptions.map((d) => (
                <option key={d.value} value={d.value}>
                  {d.label}
                </option>
              ))}
            </select>
          </div>

          {/* If Our Department */}
          {formData.subjectDept === "Our" && (
            <>
              <div className="form-group">
                <label>Number of Rooms Allotted</label>
                <input
                  type="number"
                  name="rooms"
                  min={1}
                  value={formData.rooms}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Number of Invigilators</label>
                <input
                  type="number"
                  name="invigilators"
                  min={1}
                  value={formData.invigilators}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Number of Students Eligible</label>
                <input
                  type="number"
                  name="students"
                  min={1}
                  value={formData.students}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Number of Relievers</label>
                <input
                  type="number"
                  name="relievers"
                  min={0}
                  value={formData.relievers}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Number of Squads</label>
                <input
                  type="number"
                  name="squads"
                  min={0}
                  value={formData.squads}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Resources Requested from Another Department</label>
                <input
                  type="text"
                  name="resourceDept"
                  placeholder="Department Name"
                  value={formData.resourceDept}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="resourceCount"
                  min={0}
                  placeholder="Number of Resources"
                  value={formData.resourceCount}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          {/* If Other Department */}
          {formData.subjectDept === "Other" && (
            <div className="form-group">
              <label>Resources Required from Our Department</label>
              <input
                type="text"
                name="resourceRequiredDept"
                placeholder="Department Name"
                value={formData.resourceRequiredDept}
                onChange={handleChange}
              />
              <input
                type="number"
                name="resourceRequiredCount"
                min={0}
                placeholder="Number of Resources"
                value={formData.resourceRequiredCount}
                onChange={handleChange}
              />
            </div>
          )}

          {/* Submit Button */}
          <button type="submit" className="btn-primary">
            Create Exam
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddExam;
