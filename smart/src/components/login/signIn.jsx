import React from "react";
import DashBoard from "../Admin/dashboard";
import {BrowserRouter,Routes,Route} from "react-router-dom"
function Sign(){
    return(
        <BrowserRouter>
            <div>
                <Routes>
                    <Route to="/admin" element ={<Admin/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default Sign

function Admin(){
    return(
        <div>
            hello hello
        </div>
    )
}