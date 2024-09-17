import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./Home.css";
import ScheduledClasses from "./schedule";
function DashBoard() {
    return (
        <div>
            <h3 className="dash_heading">Dashboard</h3>
            <div className="d-flex justify-content-between mt-4 dash_container">
                <div className= " dash_card d-flex align-items-center justify-content-center ">
                    <div className="dash_icons">
                        <i className="people_icon bi bi-person-workspace fs-1"></i> {/* Larger icon */}
                    </div>
                    <div className="d-flex flex-column justify-content-cener">
                        <h6>Teachers</h6>
                        <h5>10</h5>
                    </div>
                </div>
                <div className= " dash_card d-flex align-items-center justify-content-center ">
                    <div className="dash_icons">
                        <i className="people_icon1 bi bi-people fs-1"></i> {/* Larger icon */}
                    </div>
                    <div className="d-flex flex-column justify-content-cener">
                        <h6>No of Classes <br/> Attended</h6>
                        <h5>10/13</h5>
                    </div>
                </div>
                <div className= " dash_card d-flex align-items-center justify-content-center">
                    <div className="dash_icons">
                        <i className="people_icon bi bi-people fs-1"></i> {/* Larger icon */}
                    </div>
                    <div className="d-flex flex-column justify-content-cener">
                        <h6>Students</h6>
                        <h5>2300</h5>
                    </div>
                </div>
                <div className= " dash_card d-flex align-items-center justify-content-center">
                    <div className="dash_icons">
                        <i className="people_icon bi bi-people fs-1"></i> {/* Larger icon */}
                    </div>
                    <div className="d-flex flex-column justify-content-cener">
                        <h6>Students</h6>
                        <h5>2300</h5>
                    </div>
                </div>
            </div>
            <div className="w-50">
                <h4>Todays Classes</h4>
                <ScheduledClasses/>
            </div>
        </div>
    );
}

export default DashBoard;
