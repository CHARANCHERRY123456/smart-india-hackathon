import React from "react";
import "./Timetable.css"; // Import the CSS file

function Timetable() {
    const timetableData = [
        { time: "9:00 - 10:00", monday: "MFDS", tuesday: "OS", wednesday: "CN", thursday: "SE", friday: "DM" },
        { time: "10:00 - 11:00", monday: "DM", tuesday: "", wednesday: "SE", thursday: "MFDS", friday: "" },
        { time: "11:00 - 12:00", monday: "Computer Science", tuesday: "English", wednesday: "Math", thursday: "History", friday: "Physics" },
        { time: "12:00 - 1:00", monday: "Lunch", tuesday: "Lunch", wednesday: "Lunch", thursday: "Lunch", friday: "Lunch" },
        { time: "1:00 - 2:00", monday: "Physics", tuesday: "Biology", wednesday: "Computer Science", thursday: "Math", friday: "English" },
        { time: "2:00 - 3:00", monday: "History", tuesday: "Physics", wednesday: "English", thursday: "Computer Science", friday: "Math" },
    ];

    return (
        <div className="timetable-container">
            <h1 className="timetable-title">Weekly Timetable</h1>
            <table className="timetable">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                    </tr>
                </thead>
                <tbody>
                    {timetableData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.time}</td>
                            <td>{row.monday}</td>
                            <td>{row.tuesday}</td>
                            <td>{row.wednesday}</td>
                            <td>{row.thursday}</td>
                            <td>{row.friday}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Timetable;
