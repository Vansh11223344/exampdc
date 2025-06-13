import { useState, useRef, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./UserDashboard.css";

const UserDashboard = () => {
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
        aria-controls="user-sidebar"
      >
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </button>
      {/* Overlay for mobile */}
      {sidebarOpen && <div className="sidebar-backdrop" aria-hidden="true"></div>}
      <aside
        ref={sidebarRef}
        id="user-sidebar"
        className={`sidebar${sidebarOpen ? " open" : ""}`}
      >
        <h2>Faculty Panel</h2>
        <nav>
          <ul>
            <li>
              <Link to="profile">Profile</Link>
            </li>
            <li>
              <Link to="slots">Select Slots</Link>
            </li>
            <li>
              <Link to="duties">Duty Summary</Link>
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

export default UserDashboard;
