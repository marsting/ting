import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Clickbtn.css';

function Clickbtn(){
    return(
        <>
        <div className="click">
                <div className="btnn">
                    <div className="">
                       <Link to="/Resume" style={{ textDecoration: 'none' }} >
                            <div className="shadow-pop-tr">
                                <div className="Hr"></div>
                                <img className='HRimg' src={require('../img/HR.png')} alt="" ></img>
                            </div>
                        </Link>
                        <br/>
                        <h4>Resume</h4>
                        <p>"It's about me"</p>
                    </div>
                     <div>
                        <Link to="/Project" style={{ textDecoration: 'none' }} >
                            <div className="shadow-pop-tr">
                                <div className="Hp "></div>
                                 <img className='HPimg' src={require('../img/HP.png')} alt="" ></img>
                            </div>
                         </Link>
                        <br/>
                        <h4>Project</h4>
                     <p>”Like a museum“</p>
                    </div>
                    <div>
                        <Link to="/Contact" style={{ textDecoration: 'none' }} >
                            <div className="shadow-pop-tr">
                                <div className="Hc "></div>
                                <img className='HCimg' src={require('../img/HC.png')} alt="" ></img>
                            </div>
                        </Link>
                        <br/>
                        <h4>Contact</h4>
                        <p>”Nice to meet you“</p>
                    </div>
                </div>
                <div className="mbtn">

                </div>
        </div>

        </>
    )
}
export default Clickbtn