import React, { useState } from "react";
import "./FAQ.css"; // Import the CSS file for styling

// FAQ Item Component
function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="faq-item">
            <div className="faq-question" onClick={toggleAnswer}>
                {question}
                <span className="toggle-icon">{isOpen ? "-" : "+"}</span>
            </div>
            {isOpen && <div className="faq-answer">{answer ? answer : "Answer pending..."}</div>}
        </div>
    );
}

// Main FAQ Component
function FAQ() {
    const initialFaqData = [
        {
            question: "What is React?",
            answer: "React is a JavaScript library for building user interfaces."
        },
        {
            question: "What is JSX?",
            answer: "JSX is a syntax extension to JavaScript used with React to describe what the UI should look like."
        }
    ];

    const [faqData, setFaqData] = useState(initialFaqData);
    const [newQuestion, setNewQuestion] = useState("");

    // Handle form submission
    const handleAddFAQ = (e) => {
        e.preventDefault();

        // Add new question (without answer) to the existing FAQ data
        const newFAQ = {
            question: newQuestion,
            answer: null // No answer provided for student questions
        };

        // Update the FAQ data state
        setFaqData([...faqData, newFAQ]);

        // Clear the input field
        setNewQuestion("");
    };

    return (
        <div>
            <h1 className="faq-title">Frequently Asked Questions</h1>
            <div className="faq-container">
            

            {/* Map through FAQ Data */}
            {faqData.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}

            {/* Form to Post New Question (Only Question) */}
            <div className="faq-form">
                <h2>Post a Question</h2>
                <form onSubmit={handleAddFAQ}>
                    <div className="form-group">
                        <label htmlFor="question">Question:</label>
                        <input
                            type="text"
                            id="question"
                            value={newQuestion}
                            onChange={(e) => setNewQuestion(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="faq-submit-button">Submit</button>
                </form>
            </div>
        </div>
        </div>
        
    );
}

export default FAQ;
