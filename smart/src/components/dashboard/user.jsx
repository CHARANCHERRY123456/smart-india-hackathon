import React, { useState } from 'react';
import './user.css';

const UserProfile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [user, setUser] = useState({
    name: 'John Doe',
    id: '12345',
    subjects: ['OS', 'SE', 'CN'],
    gender: 'Male',
    attendance: '85%',
    cgpa: '3.7',
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="user-profile">
      <div className="profile-pic">
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileChange} 
          style={{ display: 'none' }} 
          id="profile-pic-input"
        />
        <label htmlFor="profile-pic-input">
          <img 
            src={profilePic || 'https://via.placeholder.com/150'} 
            alt="Profile" 
            className="profile-pic-img"
          />
        </label>
      </div>

      <div className="user-info">
        <h2>{user.name}</h2>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Subjects:</strong> {user.subjects.join(', ')}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>Attendance:</strong> {user.attendance}</p>
        <p><strong>CGPA:</strong> {user.cgpa}</p>
      </div>
    </div>
  );
};

export default UserProfile;
