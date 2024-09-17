import React, { useState } from 'react';
import './students.css';

const Students = () => {
  const [students] = useState([
    { id: 'S001', name: 'John Doe', class: 'Sec A' },
    { id: 'S002', name: 'Alice Johnson', class: 'Sec A' },
    { id: 'S003', name: 'Bob Brown', class: 'Sec A' },
    { id: 'S004', name: 'Jane Smith', class: 'sec B' },
    { id: 'S005', name: 'Michael Lee', class: 'Sec C' },
    { id: 'S006', name: 'Chris Green', class: 'Sec C' },
  ]);

  // Group students by class
  const groupedStudents = students.reduce((acc, student) => {
    if (!acc[student.class]) {
      acc[student.class] = [];
    }
    acc[student.class].push(student);
    return acc;
  }, {});

  return (
    <div className="students-container">
      <h1 className='student_heading'>Student List Categorized by Class</h1>
      {Object.keys(groupedStudents).map((className) => (
        <div key={className} className="class-group">
          <h2>{className}</h2>
          <table className="students-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {groupedStudents[className].map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Students;
