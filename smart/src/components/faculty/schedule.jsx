import React from 'react';
import './schedule.css';

const ClassSchedule = () => {

  const schedule = [
    {
      day: 'Monday',
      classes: [
        { time: '9:00 AM - 10:30 AM', subject: 'Operating Systems (OS)', section: 'A' },
        { time: '10:45 AM - 12:15 PM', subject: 'Computer Networks (CN)', section: 'A' },
        { time: '1:00 PM - 2:30 PM', subject: 'Operating Systems (OS)', section: 'B' },
        { time: '2:45 PM - 4:15 PM', subject: 'Computer Networks (CN)', section: 'B' },
      ],
    },
    {
      day: 'Tuesday',
      classes: [
        { time: '9:00 AM - 10:30 AM', subject: 'MFDS', section: 'A' },
        { time: '10:45 AM - 12:15 PM', subject: 'Software Engineering (SE)', section: 'A' },
        { time: '1:00 PM - 2:30 PM', subject: 'MFDS', section: 'B' },
        { time: '2:45 PM - 4:15 PM', subject: 'Software Engineering (SE)', section: 'B' },
      ],
    },
    {
      day: 'Wednesday',
      classes: [
        { time: '9:00 AM - 10:30 AM', subject: 'Data Mining (DM)', section: 'A' },
        { time: '10:45 AM - 12:15 PM', subject: 'Operating Systems (OS)', section: 'A' },
        { time: '1:00 PM - 2:30 PM', subject: 'Data Mining (DM)', section: 'B' },
        { time: '2:45 PM - 4:15 PM', subject: 'Operating Systems (OS)', section: 'B' },
      ],
    },
  ];

  return (
    <div className="schedule-container">
      <h2>Class Schedule</h2>
      {schedule.map((daySchedule, index) => (
        <div key={index} className="day-schedule">
          <h3>{daySchedule.day}</h3>
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Subject</th>
                <th>Section</th>
              </tr>
            </thead>
            <tbody>
              {daySchedule.classes.map((cls, i) => (
                <tr key={i}>
                  <td>{cls.time}</td>
                  <td>{cls.subject}</td>
                  <td>Section {cls.section}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ClassSchedule;
