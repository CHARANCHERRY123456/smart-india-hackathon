import React from 'react';
import './schedule.css';

const subjects = ['OS', 'SE', 'CN', 'MFDS', 'DM'];
const periods = ['Period 1', 'Period 2', 'Period 3', 'Period 4'];
const leisurePeriod = 'Leisure Period';
const labPeriod = 'Lab Period';

const getRandomSubjects = (num) => {
  const shuffled = [...subjects].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const ScheduledClasses = () => {
  const morningSubjects = getRandomSubjects(3);
  const afternoonLab = getRandomSubjects(1)[0];

  return (
    <div className="today-classes">
      <div className="morning-session">
        <h2>Morning Session</h2>
        {periods.map((period, index) => (
          <div key={index} className="class-period">
            {index < morningSubjects.length ? (
              <div className="class-subject">{morningSubjects[index]}</div>
            ) : (
              <div className="class-subject">{leisurePeriod}</div>
            )}
          </div>
        ))}
      </div>

      <div className="afternoon-session">
        <h2>Afternoon Session</h2>
        <div className="class-period lab-period">
          <div className="class-subject">{afternoonLab} - {labPeriod}</div>
        </div>
      </div>
    </div>
  );
};

export default ScheduledClasses;
