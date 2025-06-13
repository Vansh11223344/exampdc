import { Link, Outlet } from "react-router-dom";
import "./UserDashboard.css";

const UserDashboard = () => (
  <div className="dashboard-container">
    <aside className="sidebar">
      <h2>Faculty Panel</h2>
      <nav>
        <ul>
          <li><Link to="profile">Profile</Link></li>
          <li><Link to="slots">Select Slots</Link></li>
          <li><Link to="duties">Duty Summary</Link></li>
        </ul>
      </nav>
    </aside>
    <main className="main-content">
      <Outlet />
    </main>
  </div>
);

export default UserDashboard;
