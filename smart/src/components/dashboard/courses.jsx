import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';  // Font Awesome CSS
import course from "../../data/course.json";
import "./Home.css"
function Course(){
    return(
        <div>
            <h3 className="subjects">Subjects</h3>
            <div className="course_card d-flex  justify-content-center 
            align-items-center">
                {
                    course.map((cour)=>(
                        <div key={cour.id}className="c_card d-flex">
                            <div>
                                <h4 className={`${cour.class}`}>{cour.icon}</h4>
                            </div>
                            <div className=" course d-flex flex-column">
                            
                                <h5>{cour.title}</h5>
                                <p>Topics:{cour.topics}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Course