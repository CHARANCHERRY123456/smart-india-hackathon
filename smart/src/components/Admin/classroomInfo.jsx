import React from 'react';
import './classroomInfo.css';

const classroomData = [
  { classroom: 'Sec A', students: 70, faculties: ['Prof. John Doe', 'Prof. Alice Johnson'] },
  { classroom: 'Sec B', students: 71, faculties: ['Prof. Jane Smith'] },
  { classroom: 'Sec C', students: 74, faculties: ['Prof. Alice Johnson', 'Prof. Bob Brown', 'Prof. Michael Lee'] },
  { classroom: 'Sec D', students: 78, faculties: ['Prof. Bob Brown', 'Prof. John Doe'] },
];

const ClassroomInfo = () => {
  return (
    <div className="classroom-details">
      <h1>Classroom Information</h1>
      <table className="classroom-table">
        <thead>
          <tr>
            <th>Classroom</th>
            <th>Number of Students</th>
            <th>Assigned Faculties</th>
          </tr>
        </thead>
        <tbody>
          {classroomData.map((classroom, index) => (
            <tr key={index} className="table-row">
              <td>{classroom.classroom}</td>
              <td>{classroom.students}</td>
              <td>
                {classroom.faculties.map((faculty, idx) => (
                  <span key={idx} className="faculty-name">
                    {faculty}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassroomInfo;
