import React from "react";
import Sidebar1 from "./sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./home.css"
import UpcomingClasses from "./upcoming";
import StudentDetailsTable from "./studentList";
import AttendanceBarGraph from "./attendance";
import ClassSchedule from "./schedule";
import Announcements from "./announcements";
import AttendanceDoughnuts from "./dashboard";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function Home2(){
    return(
        <BrowserRouter>
            <div className="d-flex">
                <Sidebar1/>
                <div className="home-tab">
                    
                        <Routes>
                            {/* <Route path="/home" element={<Home/>} /> */}
                            <Route path="/dashboard" element={<Dash/>}></Route>
                            <Route path="/announce" element={<Announce/>}></Route>
                            <Route path="/Notice" element={< Notice/>}></Route>
                            <Route path="/Slist" element={<Slist/>}></Route>
                            <Route path="/FList" element={<Flist/>}></Route>
                            <Route path="/yourself" element={<Your/>}></Route>
                            <Route path="/attendance" element={<Attend/>}></Route>
                            <Route path="/upcoming" element={<Upcoming/>}></Route>
                            <Route path="/schedule" element={<Schedule/>}></Route>
                        </Routes>
                    
                </div>
            </div>
        </BrowserRouter>
    )
}
export default Home2


function Dash(){
    return (
        <div>
           <AttendanceDoughnuts/>
        </div>
    )
}
function Schedule(){
    return(
        <div>
            <ClassSchedule/>
        </div>
    )
}
function Upcoming(){
    return(
        <div>
            <UpcomingClasses/>
        </div>
    )
}
function Announce(){
    return (
        <div>
            <Announcements/>
        </div>
    )
}
function Notice(){
    return <h2>Faculty List</h2>
}
function Slist(){
    return (
        <div>
            <StudentDetailsTable/>
        </div>
    )
}

function Attend(){
    return(
        <div>
            <AttendanceBarGraph/>
        </div>
    )
}
function Flist(){
    return (
        <div>
            faculty list
        </div>
    )
}
function Your(){
    return (
        <div>
           userprofile
        </div>
    )
}