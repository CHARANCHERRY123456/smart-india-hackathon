import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import './dashboard.css';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const data = {
  labels: ['Teachers', 'Students', 'Non-Teaching Staff'],
  datasets: [
    {
      label: 'Number of People',
      data: [50, 360, 30], // Example data: [number of teachers, students, non-teaching staff]
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      borderWidth: 0,
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
          return `${tooltipItem.label}: ${tooltipItem.raw}`;
        },
      },
    },
  },
};

const HomePage = () => {
  return (
    <div className="home-page">
        <h4>Details</h4>
      <div className="charts">
        <div className="chart-container">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
