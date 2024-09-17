import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import './attendance.css';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const data = {
  labels: ['Sec A', 'Sec B', 'Sec C', 'Sec D','Sec E'], // Example class names
  datasets: [
    {
      label: 'Boys Attendance',
      data: [20, 30, 35, 18,31], // Example data for boys' attendance
      backgroundColor: '#FF6384',
      stack: 'Stack 0',
    },
    {
      label: 'Girls Attendance',
      data: [18, 29, 40, 15,21], // Example data for girls' attendance
      backgroundColor: '#36A2EB',
      stack: 'Stack 0',
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => {
          return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
        },
      },
    },
  },
  scales: {
    x: {
      stacked: true,
      barPercentage: 0.5, // Adjust this value to make bars thinner
      categoryPercentage: 0.6, // Adjust this value to control the space for each category
      grid: {
        display: false,
      },
      ticks: {
        padding: 10,
      },
    },
    y: {
      stacked: true,
      beginAtZero: true,
      grid: {
        display: true,
        color: '#e0e0e0',
      },
      ticks: {
        padding: 10,
      },
    },
  },
};

const AttendanceChart = () => {
  return (
    <div className="attendance-chart">
      <h4>Class-wise Attendance</h4>
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default AttendanceChart;
