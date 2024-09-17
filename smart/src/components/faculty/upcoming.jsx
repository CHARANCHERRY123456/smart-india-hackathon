import React from 'react';
import './upcoming.css'; 

const UpcomingClasses = () => {

  const upcomingClasses = [
    { day: 'Day 1', subject: 'Operating Systems (OS)', time: '10:00 AM - 11:00 AM',sec:"sec A" },
    { day: 'Day 1', subject: 'Computer Networks (CN)', time: '11:00 AM - 12:00 PM' ,sec:"sec B"},
    { day: 'Day 1', subject: 'Data Mining (DM)', time: '1:00 PM - 2:00 PM' ,sec:"sec B"},
    { day: 'Day 1', subject: 'Software Engineering (SE)', time: '2:00 PM - 3:00 PM' ,sec:"sec A"},
    { day: 'Day 2', subject: 'MFDS', time: '9:00 AM - 10:00 AM' ,sec:"sec B"},
    { day: 'Day 2', subject: 'Operating Systems (OS)', time: '10:00 AM - 11:00 AM',sec:"sec A" },
    { day: 'Day 2', subject: 'Computer Networks (CN)', time: '11:00 AM - 12:00 PM' ,sec:"sec A"},
    { day: 'Day 3', subject: 'Data Mining (DM)', time: '9:00 AM - 10:00 AM' ,sec:"sec B"},
    { day: 'Day 3', subject: 'MFDS', time: '10:00 AM - 11:00 AM' ,sec:"sec B"},
    { day: 'Day 3', subject: 'Software Engineering (SE)', time: '11:00 AM - 12:00 PM' ,sec:"sec A"},
  ];

  return (
    <div className="classes-container">
      <h2>Upcoming Classes for the Next 3 Days</h2>
      <table className="classes-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Subject</th>
            <th>Time</th>
            <th>Section</th>
          </tr>
        </thead>
        <tbody>
          {upcomingClasses.map((cls, index) => (
            <tr key={index}>
              <td>{cls.day}</td>
              <td>{cls.subject}</td>
              <td>{cls.time}</td>
              <td>{cls.sec}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingClasses;
