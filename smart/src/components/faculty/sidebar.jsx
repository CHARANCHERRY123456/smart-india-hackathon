import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Link} from "react-router-dom";
function Sidebar1(){
    return(
        <div className="d-flex flex-column bg-dark admin_sidebar">
            <h3 className="text-white">Faculty Dashboard</h3>
            <Link to="/dashboard">
                <i className="bi bi-tools"></i>  
                Dashboard  
            </Link>
            <Link to="/announce">
                <i className="bi bi-megaphone"></i>
                Announcements
            </Link>
            <Link to="/Slist"> 
                <i className="bi bi-people"></i>
                Students List
            </Link>
            <Link to="/upcoming">
                <i className="bi bi-people"></i>
                Upcoming Classes
            </Link> 
            <Link to="/schedule">
                <i className="bi bi-people"></i>
                Scheduled Classes
            </Link> 
            <Link to="/attendance">
                <i className="bi bi-people"></i>
                attendance of students
            </Link> 
            <Link to="/yourself">
                <i  className="bi bi-person"></i>
                Yourself
            </Link>
        </div>
    )
}
export default Sidebar1
