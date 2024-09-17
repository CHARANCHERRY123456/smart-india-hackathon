import React, { useState , useEffect } from 'react';
import './announcement.css';
import axios from 'axios'

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Post a new announcement
  const handlePostAnnouncement = () => {
    const newAnnouncement = {
      id: announcements.length + 1,
      title: title,
      description: description,
      author: 'Admin',
      upvotes: 0,
      comments: [],
    };
  
    // Sending the email after posting the announcement
    axios.post("/api/send-email")
      .then((res) => {
        console.log("Email sent successfully");
      })
      .catch((err) => {
        console.log("Error sending email:", err);
      });
  
    // Update the state with the new announcement
    setAnnouncements([...announcements, newAnnouncement]);
    setTitle('');
    setDescription('');
  };
  

  // Upvote an announcement
  const handleUpvote = (id) => {
    setAnnouncements(announcements.map((announcement) => {
      if (announcement.id === id) {
        return { ...announcement, upvotes: announcement.upvotes + 1 };
      }
      return announcement;
    }));
  };

  // Add a comment to an announcement
  const handleAddComment = (id, comment) => {
    setAnnouncements(announcements.map((announcement) => {
      if (announcement.id === id) {
        return {
          ...announcement,
          comments: [...announcement.comments, { text: comment, student: 'Admin', date: new Date() }],
        };
      }
      return announcement;
    }));
  };

  return (
    <div className="announcement-container">
      <h1>Announcements</h1>

      {/* Form to post new announcements */}
      <div className="announcement-form">
        <input
          type="text"
          name='title'
          placeholder="Announcement Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name='desc'
          placeholder="Announcement Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handlePostAnnouncement}>Post Announcement</button>
      </div>

      {/* Display list of announcements */}
      <div className="announcement-list">
        {announcements.map((announcement) => (
          <Announcement
            key={announcement.id}
            announcement={announcement}
            onUpvote={handleUpvote}
            onAddComment={handleAddComment}
          />
        ))}
      </div>
    </div>
  );
};

// Component to display each announcement
const Announcement = ({ announcement, onUpvote, onAddComment }) => {
  const [comment, setComment] = useState('');

  return (
    <div className="announcement-card">
      <h3>{announcement.title}</h3>
      <p>{announcement.description}</p>
      <p><strong>Author:</strong> {announcement.author}</p>
      <p><strong>Upvotes:</strong> {announcement.upvotes}</p>
      <button onClick={() => onUpvote(announcement.id)}>Upvote</button>

      <div className="comments-section">
        <h4>Comments:</h4>
        {announcement.comments.map((c, index) => (
          <p key={index}><strong>{c.student}:</strong> {c.text}</p>
        ))}
        <input
          type="text"
          placeholder="Add a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={() => { onAddComment(announcement.id, comment); setComment(''); }}>
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default Announcements;
