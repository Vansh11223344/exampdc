import { useState, useEffect, useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const location = useLocation();

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  // Close sidebar if clicked outside (mobile)
  useEffect(() => {
    if (!sidebarOpen) return;
    const handleClick = (e) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        !e.target.classList.contains("sidebar-toggle")
      ) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [sidebarOpen]);

  return (
    <div className={`dashboard-container${sidebarOpen ? " sidebar-active" : ""}`}>
      <button
        className="sidebar-toggle"
        aria-label="Toggle sidebar"
        onClick={() => setSidebarOpen((open) => !open)}
        aria-expanded={sidebarOpen}
        aria-controls="admin-sidebar"
      >
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </button>
      {/* Overlay for mobile */}
      {sidebarOpen && <div className="sidebar-backdrop" aria-hidden="true"></div>}
      <aside
        ref={sidebarRef}
        id="admin-sidebar"
        className={`sidebar${sidebarOpen ? " open" : ""}`}
      >
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <li>
              <Link to="exams" className={location.pathname.endsWith("/exams") ? "active" : ""}>Exam List</Link>
            </li>
            <li>
              <Link to="exams/add" className={location.pathname.endsWith("/exams/add") ? "active" : ""}>Add Exam</Link>
            </li>
            <li>
              <Link to="duties" className={location.pathname.endsWith("/duties") ? "active" : ""}>Duty Management</Link>
            </li>
            <li>
              <Link to="allocations" className={location.pathname.endsWith("/allocations") ? "active" : ""}>Slot Allocation</Link>
            </li>
            <li>
              <Link to="resources" className={location.pathname.endsWith("/resources") ? "active" : ""}>Resource Management</Link>
            </li>
            <li>
              <Link to="slot-generation" className={location.pathname.endsWith("/slot-generation") ? "active" : ""}>Slot Generation</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
