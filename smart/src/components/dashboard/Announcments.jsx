import React,{useState} from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./Home.css";
function Announce() {
    const [count,setCount]=useState([0,0,0])
    const increment=(index)=>{
        const newUpvote=[...count];
        newUpvote[index]=newUpvote[index]+1
        setCount(newUpvote)
    }
    return (
      
        <div className="Announe_main_card d-flex flex-column justify-content-center align-items-center">
            <h3 className="dash_heading">Announcements</h3>
            <div>
            <div className="announce_card">
                <div className="d-flex justify-content-end p-4">
                    <span>Date: </span>    12/09/2024
                </div>
                <p className="text-center"><span>Note:</span> Vinayaka Chavithi Culturals are held in Rkv Grounds Every one attend and Enjoy the day. Please Follows the Rules and Regulations if any one found not following will be punished </p>
                <hr />
                <div className="d-flex justify-content-between">
                    <div className="d-flex ">
                    <i className="bi bi-link link"></i>
                        <p className="posted_by">Posted By: Dean of Academics Rgukt Rkv</p>
                    </div>
                    <div className="d-flex m-2 justify-content-end align-items-center text-center">
                        <h4 className="upvote">upvote</h4>
                        <i className="bi bi-hand-thumbs-up thumbsicon" onClick={()=>increment(0)}></i>
                        <span className="span1 m-2">{count[0]}</span>
                    </div>
                    
                </div>
            </div>
            
            <div className="announce_card">
                <div className="d-flex justify-content-end p-4">
                    <span>Date: </span>    12/09/2024
                </div>
                <p className="text-center"><span>Note:</span> Vinayaka Chavithi Culturals are held in Rkv Grounds Every one attend and Enjoy the day. Please Follows the Rules and Regulations if any one found not following will be punished </p>
                <hr />
                <div className="d-flex justify-content-between">
                    <div className="d-flex ">
                    <i className="bi bi-link link"></i>
                        <p className="posted_by">Posted By: Dean of Academics Rgukt Rkv</p>
                    </div>
                    <div className="d-flex m-2 justify-content-end align-items-center text-center">
                        <h4 className="upvote">upvote</h4>
                        <i className="bi bi-hand-thumbs-up thumbsicon" onClick={()=>increment(1)}></i>
                        <span className="span1 m-2">{count[1]}</span>
                    </div>
                    
                </div>
            </div>
            <div className="announce_card">
                <div className="d-flex justify-content-end p-4">
                    <span>Date: </span>    12/09/2024
                </div>
                <p className="text-center"><span>Note:</span> Vinayaka Chavithi Culturals are held in Rkv Grounds Every one attend and Enjoy the day. Please Follows the Rules and Regulations if any one found not following will be punished </p>
                <hr />
                <div className="d-flex justify-content-between">
                    <div className="d-flex ">
                    <i className="bi bi-link link"></i>
                        <p className="posted_by">Posted By: Dean of Academics Rgukt Rkv</p>
                    </div>
                    <div className="d-flex m-2 justify-content-end align-items-center text-center">
                        <h4 className="upvote">upvote</h4>
                        <i className="bi bi-hand-thumbs-up thumbsicon" onClick={()=>increment(2)}></i>
                        <span className="span1 m-2">{count[2]}</span>
                    </div>
                    
                </div>
            </div>
            
            </div>
        </div>
    );
}

export default Announce;
