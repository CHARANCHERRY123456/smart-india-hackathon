
import React, { useState } from "react";
import "./Home.css";

function YourSelf() {
    const [image, setImage] = useState(null); // To store the selected image file
    const [previewUrl, setPreviewUrl] = useState(null); 
    const handleFileChange = (e) => {
        const file = e.target.files[0]; 
        if (file) {
            setImage(file);


            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result); 
            };
            reader.readAsDataURL(file); 
        }
    };

    return (
        <div className="profile">
            
            <div className="prodie_card">
            {previewUrl && (
                    <div>
                        <img src={previewUrl} alt="Profile Preview" style={{ width: "200px", height: "200px", borderRadius: "50%" }} />
                    </div>
                )}
                <h1>P A Nagsudha</h1>
                <div>
                    <div className="details">
                    <input type="file" accept="image/*" placeholder="upload" onChange={handleFileChange} />
                        <h4>Id:<span>R200610</span></h4>
                        <h4>Gender:<span>Female</span></h4>
                        <h4>Cgpa:<span></span></h4>
                        <h4>Attendance percentage:<span>80%</span></h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default YourSelf;
