import React from 'react';
import './studentlist.css'; // Import the CSS for styling

const StudentDetailsTable = () => {
  // Define the student data
  const students = [
    { id: 1, name: 'Alice Johnson', section: 'A',percentage:"77%" },
    { id: 2, name: 'Bob Smith', section: 'A' ,percentage:"78%"},
    { id: 3, name: 'Charlie Brown', section: 'A',percentage:"87%" },
    { id: 4, name: 'Daisy Miller', section: 'A',percentage:"91%" },
    { id: 5, name: 'Edward Johnson', section: 'A',percentage:"77%" },
    { id: 6, name: 'Fiona White', section: 'B',percentage:"82%" },
    { id: 7, name: 'George Green', section: 'B' ,percentage:"89%"},
    { id: 8, name: 'Hannah Williams', section: 'B' ,percentage:"93%"},
    { id: 9, name: 'Ian Davis', section: 'B' ,percentage:"87%"},
    { id: 10, name: 'Julia Brown', section: 'B' ,percentage:"85%"},
  ];

  return (
    <div className="table-container">
      <h2>Student Details</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>ID Number</th>
            <th>Name</th>
            <th>Section</th>
            <th>Attendance(%)</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>Section {student.section}</td>
              <td>{student.percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDetailsTable;
