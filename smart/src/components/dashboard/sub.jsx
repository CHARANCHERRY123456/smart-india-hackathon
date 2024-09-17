import React from 'react';
import './sub.css';

const subjects = [
  { name: 'OS', logo: 'https://via.placeholder.com/50?text=OS', topics: 10 },
  { name: 'DM', logo: 'https://via.placeholder.com/50?text=DM', topics: 8 },
  { name: 'MFDS', logo: 'https://via.placeholder.com/50?text=MFDS', topics: 12 },
  { name: 'CN', logo: 'https://via.placeholder.com/50?text=CN', topics: 9 },
  { name: 'SE', logo: 'https://via.placeholder.com/50?text=SE', topics: 11 },
];

const SubjectCard = () => {
  return (
    <div className="subject-cards">
      {subjects.map((subject, index) => (
        <div key={index} className="subject-card">
          <img src={subject.logo} alt={`${subject.name} logo`} className="subject-logo" />
          <div className="subject-info">
            <h3 className="subject-name">{subject.name}</h3>
            <p className="subject-topics">Number of Topics: {subject.topics}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubjectCard;
