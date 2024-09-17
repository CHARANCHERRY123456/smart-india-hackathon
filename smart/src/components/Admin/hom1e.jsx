import React from "react";
import Sidebar1 from "./sidebar1";
import HomePage from "./dashboard";
import ClassroomInfo from "./classroomInfo";
import Announcements from "./announcements";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProfile from "./user";
import FacultyList from "./FacultyList";
import "./home1.css"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import DashBoard from "../dashboard/dashboard";
import AttendanceChart from "./attendance";
import Students from "./studentsList";
function Home1(){
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
                        </Routes>
                    
                </div>
            </div>
        </BrowserRouter>
    )
}
export default Home1


function Dash(){
    return (
        <div className="d-flex flex-wrap">
            <h3 className="dash_heading">Dashboard</h3>
            <HomePage/>
            <AttendanceChart/>
            <ClassroomInfo/>
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
            <Students/>
        </div>
    )
}
function Flist(){
    return (
        <div>
            <FacultyList/>
        </div>
    )
}
function Your(){
    return (
        <div>
            <UserProfile/>
        </div>
    )
}