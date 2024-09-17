import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./Sidebar";
import DashBoard from "./dashboard";
import AnnouncementPage from "./announce1";
import Course from "./courses";
import YourSelf from "./yourself";
import Timetable from "./Timetable";
import AttendanceDisplay from "./attendance_chart";
// import ScheduledClasses from "./schedule";
import PastClasses from "./past";
import Ques from "./question";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Tab } from "bootstrap";
function Home(){
    return(
        <BrowserRouter>
        <div className="d-flex">
            <div className="col-auto position-sticky">
                <Sidebar/>
            </div>
            <div>
               <Routes>
                    <Route path="/" element={<Home1/>}></Route>
                    <Route path="/Time" element={<Time/>}></Route>
                    <Route path="/Report" element={<Report/>}></Route>
                    <Route path="/Announcement" element={<Announcement/>}></Route>
                    <Route path="/Attendance" element={<Attendance/>}></Route>
                    <Route path="/ScheduledClasses" element={<ScheduledClasse/>}></Route>
                    <Route path="/Question" element={<Question/>}></Route>
                    <Route path="/Yourself" element={<Yourself/>}></Route>
               </Routes>
            </div>
        </div>
        </BrowserRouter>
    )
}
export default Home

function Yourself(){
   return(
    <div>
        <YourSelf/>
    </div>
   )
}
function Question(){
    return (
        <div>
            <Ques/>
        </div>
    )
}
function ScheduledClasse(){
    return (
        <div>
           <PastClasses/>
        </div>
    )
}
function Attendance(){
        return (
            <div>
                <AttendanceDisplay/>
            </div>
        )
}
function Home1(){
   return(
    <div>
        <DashBoard/>
    </div>
   )
}
function Time(){
    return (
        <div>
            <Timetable/>
        </div>
    )
}
function Report(){
    return (
        <div>
            <Course/>
        </div>
    )
}
function Announcement(){
    return(
        <div>
            <AnnouncementPage/>
        </div>
    )
}
