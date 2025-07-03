// src/Admin/ExamList.jsx
import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  TextField,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Grid,
  Box,
  Pagination,
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
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
  const itemsPerPage = 6;

  const semesters = ['All Semesters', ...new Set(allExams.map(exam => exam.semester))];

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

  const handlePageChange = (_, value) => setCurrentPage(value);
  const handleFilterChange = () => setCurrentPage(1);

  useEffect(() => {
    const underline = document.querySelector('.animated-underline');
    if (underline) underline.classList.add('show-line');
  }, []);

  return (
    <Container
  maxWidth="lg"
  disableGutters
  sx={{
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  }}
>

      <Box className="exam-header-box">
        <Typography variant="h4" className="exam-heading">
          Exam Records
        </Typography>
      </Box>

      <Grid container spacing={2} alignItems="center" sx={{ mb: 2, px: 2 }}>
        <Grid item xs={12} md={6}>
          <TextField
            placeholder="Search exams"
            fullWidth
            variant="outlined"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              handleFilterChange();
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#1565c0' }} />
                </InputAdornment>
              ),
              className: 'search-bar'
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Select
            fullWidth
            displayEmpty
            value={selectedSemester}
            onChange={(e) => {
              setSelectedSemester(e.target.value);
              handleFilterChange();
            }}
            className="filter-select"
            IconComponent={ArrowDropDownIcon}
            inputProps={{ className: 'filter-input' }}
            MenuProps={{
              PaperProps: {
                sx: {
                  mt: 1,
                  borderRadius: '10px',
                },
              },
            }}
          >
            {semesters.map(semester => (
              <MenuItem key={semester} value={semester} className="dropdown-item">
                {semester}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>

      {filteredExams.length > itemsPerPage && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1, px: 2 }}>
          <Pagination
            count={Math.ceil(filteredExams.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            shape="rounded"
          />
        </Box>
      )}

      {/* THIS BOX IS NOT SCROLLABLE, ONLY THE TABLE AREA BELOW IS */}
      <Box sx={{
        flexGrow: 1,
        px: 2,
        pb: 2,
        display: 'flex',
        flexDirection: 'column',
        minHeight: 0, // Important for flexbox children to allow shrinking
      }}>
        <TableContainer
          component={Paper}
          elevation={3}
          sx={{
            width: '100%',
            maxHeight: { xs: 300, sm: 400, md: 500 }, // Set your desired height here
            overflowY: 'auto'
          }}
        >
          <Table stickyHeader sx={{ minWidth: 650 }}>
            <TableHead>
  <TableRow>
    <TableCell sx={{ color: '#fff', backgroundColor: '#1e293b',fontSize: '1.15rem', fontWeight: 600 }}>Date</TableCell>
    <TableCell sx={{ color: '#fff', backgroundColor: '#1e293b',fontSize: '1.15rem', fontWeight: 600 }}>Semester</TableCell>
    <TableCell sx={{ color: '#fff', backgroundColor: '#1e293b',fontSize: '1.15rem', fontWeight: 600 }}>Course</TableCell>
    <TableCell sx={{ color: '#fff', backgroundColor: '#1e293b',fontSize: '1.15rem', fontWeight: 600 }}>Actions</TableCell>
  </TableRow>
</TableHead>

            <TableBody>
              {currentExams.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} align="center" sx={{ fontStyle: 'italic', py: 4 }}>
                    No exams found.
                  </TableCell>
                </TableRow>
              ) : (
                currentExams.map(exam => (
                  <TableRow key={exam.id} hover>
                    <TableCell>{exam.date}</TableCell>
                    <TableCell>{exam.semester}</TableCell>
                    <TableCell>{exam.course}</TableCell>
                    <TableCell>
                      <Button
                        component={Link}
                        to={`/admin/exams/${exam.id}`}
                        variant="contained"
                        size="small"
                        sx={{ mr: 1, backgroundColor: '#1976d2' }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default ExamList;
