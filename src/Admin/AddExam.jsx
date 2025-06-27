import { useState, useRef, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Typography,
  Box
} from '@mui/material';
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

  const formContainerRef = useRef(null);

  useEffect(() => {
    if (formContainerRef.current) {
      formContainerRef.current.scrollTop = formContainerRef.current.scrollHeight;
    }
  }, [formData.subjectDept]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

  const showBranch = ["5", "6", "7"].includes(formData.semester);
  const showCourse = formData.semester !== "";

  return (
    <div className="main-content">
      <div className="add-exam-container" ref={formContainerRef}>
        <Typography variant="h4" component="h2" className="add-exam-heading">
          Add New Exam
        </Typography>

        <Box component="form" className="exam-form" onSubmit={handleSubmit}>
          {/* Academic Year */}
          <FormControl fullWidth required sx={{ marginBottom: '1.2rem' }}>
            <InputLabel id="academicYear-label">Academic Year</InputLabel>
            <Select
              labelId="academicYear-label"
              name="academicYear"
              value={formData.academicYear}
              onChange={handleChange}
              label="Academic Year"
              sx={{
                borderRadius: '8px',
                background: '#f8fafc',
                fontSize: '1rem',
              }}
            >
              <MenuItem value=""><em>Select Year</em></MenuItem>
              <MenuItem value="2024-25">2024-25</MenuItem>
              <MenuItem value="2023-24">2023-24</MenuItem>
            </Select>
          </FormControl>

          {/* Term */}
          <FormControl fullWidth required sx={{ marginBottom: '1.2rem' }}>
            <InputLabel id="term-label">Term</InputLabel>
            <Select
              labelId="term-label"
              name="term"
              value={formData.term}
              onChange={handleChange}
              label="Term"
              sx={{
                borderRadius: '8px',
                background: '#f8fafc',
                fontSize: '1rem',
              }}
            >
              <MenuItem value=""><em>Select Term</em></MenuItem>
              <MenuItem value="Mid-term">Mid-term</MenuItem>
              <MenuItem value="Final Exam">Final Exam</MenuItem>
            </Select>
          </FormControl>

          {/* Semester */}
          <FormControl fullWidth required sx={{ marginBottom: '1.2rem' }}>
            <InputLabel id="semester-label">Semester</InputLabel>
            <Select
              labelId="semester-label"
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              label="Semester"
              sx={{
                borderRadius: '8px',
                background: '#f8fafc',
                fontSize: '1rem',
              }}
            >
              <MenuItem value=""><em>Select Semester</em></MenuItem>
              {[1, 2, 3, 4, 5, 6, 7].map((sem) => (
                <MenuItem key={sem} value={sem}>{sem}</MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Branch (only for 5/6/7) */}
          {showBranch && (
            <FormControl fullWidth required sx={{ marginBottom: '1.2rem' }}>
              <InputLabel id="branch-label">Branch</InputLabel>
              <Select
                labelId="branch-label"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                label="Branch"
                sx={{
                  borderRadius: '8px',
                  background: '#f8fafc',
                  fontSize: '1rem',
                }}
              >
                <MenuItem value=""><em>Select Branch</em></MenuItem>
                {branchOptions.map((b) => (
                  <MenuItem key={b.value} value={b.value}>{b.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          {/* Course (dynamic) */}
          {showCourse && (
            <FormControl fullWidth required sx={{ marginBottom: '1.2rem' }}>
              <InputLabel id="course-label">Course</InputLabel>
              <Select
                labelId="course-label"
                name="course"
                value={formData.course}
                onChange={handleChange}
                label="Course"
                sx={{
                  borderRadius: '8px',
                  background: '#f8fafc',
                  fontSize: '1rem',
                }}
              >
                <MenuItem value=""><em>Select Course</em></MenuItem>
                {(courseOptions[formData.semester] || []).map((course) => (
                  <MenuItem key={course} value={course}>{course}</MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          {/* Date */}
          <TextField
            label="Date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            fullWidth
            InputLabelProps={{ shrink: true }}
            sx={{
              marginBottom: '1.2rem',
              '& .MuiInputBase-root': {
                borderRadius: '8px',
                background: '#f8fafc',
                fontSize: '1rem',
              },
            }}
          />

          {/* Session */}
          <FormControl fullWidth required sx={{ marginBottom: '1.2rem' }}>
            <InputLabel id="session-label">Session</InputLabel>
            <Select
              labelId="session-label"
              name="session"
              value={formData.session}
              onChange={handleChange}
              label="Session"
              sx={{
                borderRadius: '8px',
                background: '#f8fafc',
                fontSize: '1rem',
              }}
            >
              <MenuItem value=""><em>Select Session</em></MenuItem>
              {sessionOptions.map((s) => (
                <MenuItem key={s.value} value={s.value}>{s.label}</MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Subject managed by */}
          <FormControl fullWidth required sx={{ marginBottom: '1.2rem' }}>
            <InputLabel id="subjectDept-label">Subject Managed By</InputLabel>
            <Select
              labelId="subjectDept-label"
              name="subjectDept"
              value={formData.subjectDept}
              onChange={handleChange}
              label="Subject Managed By"
              sx={{
                borderRadius: '8px',
                background: '#f8fafc',
                fontSize: '1rem',
              }}
            >
              <MenuItem value=""><em>Select Department</em></MenuItem>
              {departmentOptions.map((d) => (
                <MenuItem key={d.value} value={d.value}>{d.label}</MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* If Our Department */}
          {formData.subjectDept === "Our" && (
            <>
              <TextField
                label="Number of Rooms Allotted"
                type="number"
                name="rooms"
                value={formData.rooms}
                onChange={handleChange}
                required
                fullWidth
                InputProps={{ inputProps: { min: 1 } }}
                sx={{
                  marginBottom: '1.2rem',
                  '& .MuiInputBase-root': {
                    borderRadius: '8px',
                    background: '#f8fafc',
                    fontSize: '1rem',
                  },
                }}
              />

              <TextField
                label="Number of Invigilators"
                type="number"
                name="invigilators"
                value={formData.invigilators}
                onChange={handleChange}
                required
                fullWidth
                InputProps={{ inputProps: { min: 1 } }}
                sx={{
                  marginBottom: '1.2rem',
                  '& .MuiInputBase-root': {
                    borderRadius: '8px',
                    background: '#f8fafc',
                    fontSize: '1rem',
                  },
                }}
              />

              <TextField
                label="Number of Students Eligible"
                type="number"
                name="students"
                value={formData.students}
                onChange={handleChange}
                required
                fullWidth
                InputProps={{ inputProps: { min: 1 } }}
                sx={{
                  marginBottom: '1.2rem',
                  '& .MuiInputBase-root': {
                    borderRadius: '8px',
                    background: '#f8fafc',
                    fontSize: '1rem',
                  },
                }}
              />

              <TextField
                label="Number of Relievers"
                type="number"
                name="relievers"
                value={formData.relievers}
                onChange={handleChange}
                fullWidth
                InputProps={{ inputProps: { min: 0 } }}
                sx={{
                  marginBottom: '1.2rem',
                  '& .MuiInputBase-root': {
                    borderRadius: '8px',
                    background: '#f8fafc',
                    fontSize: '1rem',
                  },
                }}
              />

              <TextField
                label="Number of Squads"
                type="number"
                name="squads"
                value={formData.squads}
                onChange={handleChange}
                fullWidth
                InputProps={{ inputProps: { min: 0 } }}
                sx={{
                  marginBottom: '1.2rem',
                  '& .MuiInputBase-root': {
                    borderRadius: '8px',
                    background: '#f8fafc',
                    fontSize: '1rem',
                  },
                }}
              />

              <TextField
                label="Resources Requested from Another Department (Department Name)"
                name="resourceDept"
                value={formData.resourceDept}
                onChange={handleChange}
                fullWidth
                sx={{
                  marginBottom: '1.2rem',
                  '& .MuiInputBase-root': {
                    borderRadius: '8px',
                    background: '#f8fafc',
                    fontSize: '1rem',
                  },
                }}
              />

              <TextField
                label="Number of Resources Requested"
                type="number"
                name="resourceCount"
                value={formData.resourceCount}
                onChange={handleChange}
                fullWidth
                InputProps={{ inputProps: { min: 0 } }}
                sx={{
                  marginBottom: '1.2rem',
                  '& .MuiInputBase-root': {
                    borderRadius: '8px',
                    background: '#f8fafc',
                    fontSize: '1rem',
                  },
                }}
              />
            </>
          )}

          {/* If Other Department */}
          {formData.subjectDept === "Other" && (
            <>
              <TextField
                label="Resources Required from Our Department (Department Name)"
                name="resourceRequiredDept"
                value={formData.resourceRequiredDept}
                onChange={handleChange}
                fullWidth
                sx={{
                  marginBottom: '1.2rem',
                  '& .MuiInputBase-root': {
                    borderRadius: '8px',
                    background: '#f8fafc',
                    fontSize: '1rem',
                  },
                }}
              />

              <TextField
                label="Number of Resources Required"
                type="number"
                name="resourceRequiredCount"
                value={formData.resourceRequiredCount}
                onChange={handleChange}
                fullWidth
                InputProps={{ inputProps: { min: 0 } }}
                sx={{
                  marginBottom: '1.2rem',
                  '& .MuiInputBase-root': {
                    borderRadius: '8px',
                    background: '#f8fafc',
                    fontSize: '1rem',
                  },
                }}
              />
            </>
          )}

          {/* Submit Button */}
          <div className="submit-button-container">
            <Button
              type="submit"
              variant="contained"
              sx={{
                  backgroundColor: '#1976d2',
                  color: 'white',
                  padding: '0.5rem 1.2rem',  
                  borderRadius: '8px',
                  width: 'auto',
                  fontSize: '1rem',
                  fontWeight: 500,
                  boxShadow: '0 4px 12px rgba(52, 152, 219, 0.25)',
                '&:hover': {
                  backgroundColor: '#1565c0',
                  transform: 'translateY(-1px)',
                },
              }}
            >
              Create Exam
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default AddExam;
