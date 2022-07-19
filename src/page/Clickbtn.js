import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Clickbtn.css';

function Clickbtn(){
    return(
        <>
        <div className="click">
       <div></div>

        

                <div className="btnn">
                <div>
                   <Link to="/Reseume" style={{ textDecoration: 'none' }} >
                    <div className="Hr shadow-pop-tr">Reseum</div>
                    </Link>
                  <p>”Hi 這是我的履歷“</p>
                </div>
                <div>
                <Link to="/Project" style={{ textDecoration: 'none' }} >
                    <div className="Hp shadow-pop-tr">Project</div>
                </Link>
                <br/>
                    <p>”Hi 這是我的作品集“</p>
                </div>
                <div>
                <Link to="/Contact" style={{ textDecoration: 'none' }} >
                    <div className="Hc shadow-pop-tr">Contact</div>
                </Link>
                    <p>”Hi 這是我的聯絡方式“</p>
                </div>

            
                </div>
        </div>

        </>
    )
}
export default Clickbtn