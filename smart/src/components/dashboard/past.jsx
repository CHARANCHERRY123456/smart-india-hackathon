import React from 'react';
import './past.css';

const subjects = ['OS', 'SE', 'CN', 'MFDS', 'DM'];
const periods = ['Period 1', 'Period 2', 'Period 3', 'Period 4'];
const time = ["8:00AM" , "9:00AM" , "10:00AM" , "11:00AM"] //ADDED BY CV
const leisurePeriod = 'Leisure Period';
const labPeriod = 'Lab Period';

const getRandomSubjects = (num) => {
  const shuffled = [...subjects].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const generateSchedule = () => {
  const schedule = [];
  for (let day = 1; day <= 3; day++) {
    const morningSubjects = getRandomSubjects(3);
    const afternoonLab = getRandomSubjects(1)[0];
    schedule.push({
      day: `Day ${day}`,
      morning: [...morningSubjects, leisurePeriod],
      afternoon: { subject: afternoonLab, lab: labPeriod },
    });
  }
  return schedule;
};

const PastClasses = () => {
  const schedule = generateSchedule();

  return (
    <div><h3 className='past'>Past Scheduled Classes</h3>
        <div className="class-schedule">
      {schedule.map((daySchedule, index) => (
        <div key={index} className="day-schedule">
          <h2>{daySchedule.day}</h2>
          <div className="session morning-session">
            <h3>Morning Session</h3>
            {periods.map((period, idx) => (
              <div key={idx} className="class-period">
                <div className="class-subject">
                  {daySchedule.morning[idx] || ''}
                </div>
              </div>
            ))}
          </div>
          <div className="session afternoon-session">
            <h3>Afternoon Session</h3>
            <div className="class-period lab-period">
              <div className="class-subject">
                {daySchedule.afternoon.subject} - {daySchedule.afternoon.lab}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default PastClasses;
