import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import "./attendance.css"
// Register chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function AttendanceDisplay() {
    // Updated sample student data with attendance for six subjects
    const students = [
        {
            name: "John",
            subjects: {
                CN: { present: 5, absent: 2 },
                SE: { present: 4, absent: 3 },
                MFDS: { present: 6, absent: 1 },
                DM: { present: 5, absent: 2 },
                OS: { present: 6, absent: 1 }
               
            }
        }
    ];

    // Prepare chart data for each student
    const getChartDataForStudent = (student) => {
        const subjects = Object.keys(student.subjects);

        return {
            labels: subjects,
            datasets: [
                {
                    label: "Present",
                    data: subjects.map((subject) => student.subjects[subject].present),
                    backgroundColor: "#36A2EB",
                },
                {
                    label: "Absent",
                    data: subjects.map((subject) => student.subjects[subject].absent),
                    backgroundColor: "#4caf50",
                }
            ],
        };
    };

    return (
        <div>
            <div className="attendance-display">
                <h1>Track Your Attendance</h1>

                {/* Render a chart for each student */}
                {students.map((student) => (
                    <div key={student.name} className="student-attendance-chart">
                        <h2>{student.name}'s Attendance</h2>
                        <Bar data={getChartDataForStudent(student)} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AttendanceDisplay;
