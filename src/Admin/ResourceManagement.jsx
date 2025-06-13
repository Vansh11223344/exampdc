// src/Admin/ResourceManagement.jsx
import { useState } from "react";
import "./ResourceManagement.css"; 
const initialRequests = [
  // Example data
  { id: 1, department: "Physics", requested: 3 },
  { id: 2, department: "Mathematics", requested: 2 },
];

const initialRequired = [
  { id: 1, department: "ICT", required: 1 },
];

const departments = [
  "Physics", "Mathematics", "ICT", "CSE", "AIML", "DSE", "Other"
];

const ResourceManagement = () => {
  const [requests, setRequests] = useState(initialRequests);
  const [required, setRequired] = useState(initialRequired);

  const [newRequest, setNewRequest] = useState({ department: "", requested: "" });
  const [newRequired, setNewRequired] = useState({ department: "", required: "" });

  // Handle adding a new resource request
  const handleAddRequest = (e) => {
    e.preventDefault();
    if (!newRequest.department || !newRequest.requested) return;
    setRequests([
      ...requests,
      {
        id: Date.now(),
        department: newRequest.department,
        requested: Number(newRequest.requested),
      },
    ]);
    setNewRequest({ department: "", requested: "" });
  };

  // Handle adding a new resource required
  const handleAddRequired = (e) => {
    e.preventDefault();
    if (!newRequired.department || !newRequired.required) return;
    setRequired([
      ...required,
      {
        id: Date.now(),
        department: newRequired.department,
        required: Number(newRequired.required),
      },
    ]);
    setNewRequired({ department: "", required: "" });
  };

  return (
    <div>
      <h2>Resource Management</h2>

      <div className="resource-section">
        <h3>Resources Requested from Other Departments</h3>
        <form className="resource-form" onSubmit={handleAddRequest}>
          <select
            value={newRequest.department}
            onChange={(e) =>
              setNewRequest({ ...newRequest, department: e.target.value })
            }
            required
          >
            <option value="">Select Department</option>
            {departments.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          <input
            type="number"
            min={1}
            placeholder="Number of resources"
            value={newRequest.requested}
            onChange={(e) =>
              setNewRequest({ ...newRequest, requested: e.target.value })
            }
            required
          />
          <button className="btn-primary" type="submit">Add Request</button>
        </form>
        <table className="resource-table">
          <thead>
            <tr>
              <th>Department</th>
              <th>Requested</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id}>
                <td>{req.department}</td>
                <td>{req.requested}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="resource-section">
        <h3>Resources Required by Other Departments from Us</h3>
        <form className="resource-form" onSubmit={handleAddRequired}>
          <select
            value={newRequired.department}
            onChange={(e) =>
              setNewRequired({ ...newRequired, department: e.target.value })
            }
            required
          >
            <option value="">Select Department</option>
            {departments.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          <input
            type="number"
            min={1}
            placeholder="Number of resources"
            value={newRequired.required}
            onChange={(e) =>
              setNewRequired({ ...newRequired, required: e.target.value })
            }
            required
          />
          <button className="btn-primary" type="submit">Add Required</button>
        </form>
        <table className="resource-table">
          <thead>
            <tr>
              <th>Department</th>
              <th>Required</th>
            </tr>
          </thead>
          <tbody>
            {required.map((req) => (
              <tr key={req.id}>
                <td>{req.department}</td>
                <td>{req.required}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResourceManagement;
