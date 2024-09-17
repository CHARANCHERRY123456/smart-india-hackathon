import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './attendance.css'; // Import the CSS file

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AttendanceBarGraph = () => {
  const attendanceData = [
    { className: 'Class 1', sectionA: 25, sectionB: 22 },
    { className: 'Class 2', sectionA: 30, sectionB: 28 },
    { className: 'Class 3', sectionA: 18, sectionB: 20 },
    { className: 'Class 4', sectionA: 26, sectionB: 24 },
    { className: 'Class 5', sectionA: 22, sectionB: 19 },
  ];

  const chartData = {
    labels: attendanceData.map((item) => item.className),
    datasets: [
      {
        label: 'Section A',
        data: attendanceData.map((item) => item.sectionA),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(54, 162, 235, 0.9)',
        hoverBorderColor: 'rgba(54, 162, 235, 1)',
      },
      {
        label: 'Section B',
        data: attendanceData.map((item) => item.sectionB),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 99, 132, 0.9)',
        hoverBorderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeInOutBounce',
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Students',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Classes',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: `Total Students in Section A & B`,
      },
    },
  };

  return (
    <div className="chart-container">
      <h2>Attendance</h2>
      <div className="bar-chart">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default AttendanceBarGraph;
