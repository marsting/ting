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
                    <div className="Hr shadow-pop-tr color-change-2x"></div>
                    </Link>
                <br/>
                  <h4>Reseume</h4>
                  <p>"It's about me"</p>
                </div>
                <div>
                <Link to="/Project" style={{ textDecoration: 'none' }} >
                    <div className="Hp shadow-pop-tr"></div>
                </Link>
                <br/>
                <h4>Project</h4>
                    <p>”Like a museum“</p>
                </div>
                <div>
                <Link to="/Contact" style={{ textDecoration: 'none' }} >
                    <div className="Hc shadow-pop-tr"></div>
                </Link>
                <br/>
                <h4>Contact</h4>
                    <p>”Nice to meet you“</p>
                </div>

            
                </div>
        </div>

        </>
    )
}
export default Clickbtn