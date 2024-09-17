import React, { useState } from 'react';
import './announce.css';

function AnnouncementPage() {
  // Sample announcements data
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      date: "2024-09-13",
      content: "Final exams will be held from October 15th to October 25th.",
      postedBy: "Admin",
      upvotes: 5,
      comments: [],
    },
    {
      id: 2,
      date: "2024-09-10",
      content: "New library books have arrived. Please check them out.",
      postedBy: "Library",
      upvotes: 3,
      comments: [],
    }
  ]);

  const [commentInput, setCommentInput] = useState('');
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  // Handle adding a new comment
  const handleAddComment = (announcementId) => {
    if (commentInput.trim() === "") return;
    
    setAnnouncements(prevAnnouncements =>
      prevAnnouncements.map(announcement =>
        announcement.id === announcementId
          ? {
              ...announcement,
              comments: [...announcement.comments, { text: commentInput, date: new Date().toLocaleString() }]
            }
          : announcement
      )
    );
    setCommentInput(''); // Clear input field after submission
  };

  // Handle upvoting an announcement
  const handleUpvote = (announcementId) => {
    setAnnouncements(prevAnnouncements =>
      prevAnnouncements.map(announcement =>
        announcement.id === announcementId
          ? { ...announcement, upvotes: announcement.upvotes + 1 }
          : announcement
      )
    );
  };

  return (
    <div className="announcement-page">
      <h1>Announcements</h1>
      <div className="announcement-list">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="announcement-card">
            <p><strong>Date:</strong> {announcement.date}</p>
            <p><strong>Note:</strong> {announcement.content}</p>
            <p><strong>Posted by:</strong> {announcement.postedBy}</p>
            <p><strong>Upvotes:</strong> {announcement.upvotes}</p>
            <button className="upvote-btn" onClick={() => handleUpvote(announcement.id)}>
              Upvote
            </button>

            {/* Comment section */}
            <div className="comment-section">
              <h4>Comments:</h4>
              {announcement.comments.length > 0 ? (
                announcement.comments.map((comment, index) => (
                  <p key={index}>
                    <strong>{comment.date}</strong> - {comment.text}
                  </p>
                ))
              ) : (
                <p>No comments yet.</p>
              )}

              {/* Input field to add new comment */}
              <div className="add-comment">
                <input
                  type="text"
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  placeholder="Write a comment..."
                />
                <button onClick={() => handleAddComment(announcement.id)}>Reply</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnnouncementPage;
