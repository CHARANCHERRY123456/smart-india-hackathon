import React, { useState } from 'react';
import './user.css';

const UserProfile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [user, setUser] = useState({
    name: 'Nishka Prasan',
    id: '12345',
    role:"Administrator",
    Gender:"Female",
    description:"responsible for managing and overseeing the daily actvities of studnets and faculty",
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
       
        <p><strong>Gender:</strong> {user.Gender}</p>
        <p><strong>role:</strong>{user.role}</p>
        <p><strong>Description:</strong>{user.description}</p>
      </div>
    </div>
  );
};

export default UserProfile;
