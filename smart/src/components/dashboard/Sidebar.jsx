import React from "react";
import "./Home.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";
function Sidebar(){
    return(
        <div className=" d-flex flex-column justify-content-between bg-dark p-4 vh-100 sidebar">
            <div className="dashboard">
            <a href="d-flex align-items-center" className="text-white">
                <i className="bi bi-person  me-2 ">
                </i>
                <span>Student DashBoard</span>
            </a>
            <hr className="text-secondary mt-2"/>
            <ul className="nav nav-pils flex-column p-0 m-0">
                <li className="nav-item p-2">
                    <Link to="/" className="nav-link text-white">
                        <i className="bi bi-speedometer me-2 fs-5"></i>
                        <span className={"fs-5"}>Dashboard</span>
                    </Link>
                </li>
                <li className="nav-item p-2">
                    <Link to="Time" className="nav-link text-white">
                        <i className="bi bi-table me-2 fs-5"></i>
                        <span className={"fs-5"}>TimeTable</span>
                    </Link>
                </li>
                <li className="nav-item p-2">
                     <Link to="Announcement" className="nav-link text-white">
                        <i className="bi bi-megaphone me-2 fs-5"></i>
                        <span className={"fs-5"}>Annoucements</span>
                    </Link>
                </li>
                <li className="nav-item p-2">
                    <Link to="Report" className="nav-link text-white">
                        <i className="bi bi-grid me-2 fs-5"></i>
                        <span className={"fs-5"}>Subjects</span>
                    </Link>
                </li>
                <li className="nav-item p-2">
                    <Link to="Attendance" className="nav-link text-white">
                    <i className="bi bi-check-circle me-2 fs-5"></i>
                    <span className={"fs-5"}>Track Attendance</span>
                    </Link>
                </li>
                <li className="nav-item p-2">
                    <Link to="ScheduledClasses" className="nav-link text-white">
                    <i className="bi bi-calendar me-2 fs-5"></i>
                    <span className={"fs-5"}>Scheduled Classes</span>
                    </Link>
                </li>
                <li className="nav-item p-2">
                    <Link to="Question" className="nav-link text-white">
                    <i className="bi bi-question-circle me-2 fs-5"></i>
                    <span className={"fs-5"}>Question(Q&A)</span>
                    </Link>
                </li>
                <li className="nav-item p-2">
                    <a  href="http://localhost:8080/run-python" className="nav-link text-white">
                    <i className="bi bi-question-circle me-2 fs-5"></i>
                    <span className={"fs-5"}>Attendance</span>
                    </a>
                </li>
                <li className="nav-item  mt-5">
                    <Link to="Yourself" className="nav-link text-white">
                    <i className="bi bi-person me-2 fs-5 "></i>
                    <span className={"fs-5"}>YourSelf</span>
                    </Link>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Sidebar