// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';

// Admin Pages
import AdminDashboard from './Admin/AdminDashboard';
import ExamList from './Admin/ExamList';
import AddExam from './Admin/AddExam';
import EditExam from './Admin/EditExam';
import ExamDetails from './Admin/ExamDetails';
import DutyManagement from './Admin/DutyManagement';
import SlotAllocation from './Admin/SlotAllocation';
import ResourceManagement from './Admin/ResourceManagement';
import SlotGeneration from './Admin/SlotGeneration';

// User Pages
import UserDashboard from './User/UserDashboard';
import SlotCalendar from './User/SlotCalendar';
import DutySummary from './User/DutySummary';
import UserProfile from './User/UserProfile';

// Shared/Error Page
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<ExamList />} />
          <Route path="exams" element={<ExamList />} />
          <Route path="exams/add" element={<AddExam />} />
          <Route path="exams/:id" element={<ExamDetails />} />
          <Route path="exams/:id/edit" element={<EditExam />} />
          <Route path="duties" element={<DutyManagement />} />
          <Route path="allocations" element={<SlotAllocation />} />
          <Route path="resources" element={<ResourceManagement />} />
          <Route path="slot-generation" element={<SlotGeneration />} />
        </Route>

        {/* User Routes */}
        <Route path="/user" element={<UserDashboard />}>
          <Route index element={<UserProfile />} /> {/* This will show by default */}
          <Route path="profile" element={<UserProfile />} />
          <Route path="slots" element={<SlotCalendar />} />
          <Route path="duties" element={<DutySummary />} />
        </Route>


        {/* Error Page */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
