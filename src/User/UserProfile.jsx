import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = () => {
  const [userData] = useState({
    name: 'John Doe',
    department: 'Computer Science',
    email: 'user@university.edu',
    phone: '+91 9876543210'
  });

  return (
    <div className="main-content">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            {/* You can use a real image or initials */}
            <span>{userData.name.split(' ').map(n => n[0]).join('').toUpperCase()}</span>
          </div>
          <div>
            <h3 className="profile-name">{userData.name}</h3>
            <p className="profile-dept">{userData.department}</p>
          </div>
        </div>
        <div className="profile-details">
          <div className="detail-item">
            <label>Email:</label>
            <span>{userData.email}</span>
          </div>
          <div className="detail-item">
            <label>Phone:</label>
            <span>{userData.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
