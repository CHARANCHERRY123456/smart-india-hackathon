import React, { useState } from 'react';
import './Faculty.css';

const FacultyList = () => {
  const [faculty] = useState([
    { id: 'F001', name: 'Dr. John Smith', subject: 'Operating Systems' },
    { id: 'F002', name: 'Ms. Alice Johnson', subject: 'Data Structures' },
    { id: 'F003', name: 'Dr. Bob Brown', subject: 'Computer Networks' },
    { id: 'F004', name: 'Prof. Jane Williams', subject: 'Software Engineering' },
    { id: 'F005', name: 'Mr. Michael Lee', subject: 'Database Management' },
    { id: 'F006', name: 'Ms. Chris Green', subject: 'Mathematics' },
  ]);

  // Group faculty by subject
  const groupedFaculty = faculty.reduce((acc, member) => {
    if (!acc[member.subject]) {
      acc[member.subject] = [];
    }
    acc[member.subject].push(member);
    return acc;
  }, {});

  return (
    <div className="faculty-container">
      <h1>Faculty List Categorized by Subject</h1>
      {Object.keys(groupedFaculty).map((subject) => (
        <div key={subject} className="subject-group">
          <h2>{subject}</h2>
          <table className="faculty-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Subject</th>
              </tr>
            </thead>
            <tbody>
              {groupedFaculty[subject].map((member) => (
                <tr key={member.id}>
                  <td>{member.id}</td>
                  <td>{member.name}</td>
                  <td>{member.subject}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default FacultyList;
