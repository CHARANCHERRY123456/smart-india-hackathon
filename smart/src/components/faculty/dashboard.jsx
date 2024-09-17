
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './dashboard.css';

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const AttendanceDoughnuts = () => {
  // Data for Section A and Section B for two classes
  const attendanceData = [
    {
      class: 'Operating Systems (OS)',
      sectionA: 57, // 18 students attended out of 25
      sectionB: 77, // 20 students attended out of 25
    },
    
  ];

  const totalStudents = 25;

  // Create doughnut chart data for Section A and Section B
  const createDoughnutData = (attended, section) => ({
    labels: [`Attended`, `Absent`],
    datasets: [
      {
        label: `Attendance ${section}`,
        data: [attended, totalStudents - attended],
        backgroundColor: ['#36A2EB', '#FF6384'], // Blue for attended, red for absent
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  });

  return (
    <div className="attendance-container">
        <h4 className='dash_heading'>DashBoard</h4>
      <h2>Class Attendance</h2>
      <div className="attendance-rows">
        {attendanceData.map((classData, index) => (
          <div key={index} className="attendance-row">
            <h3>{classData.class}</h3>
            <div className="charts">
              <div className="chart">
                <h4>Section A</h4>
                <Doughnut data={createDoughnutData(classData.sectionA, 'Section A')} />
              </div>
              <div className="chart">
                <h4>Section B</h4>
                <Doughnut data={createDoughnutData(classData.sectionB, 'Section B')} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceDoughnuts;
