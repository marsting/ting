import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Clickbtn.css';

function Clickbtn(){
    return(
        <>
        <div className="click">
       <div></div>

        

                <div className="btnn">
                <div className="">
                <div className="shadow-pop-tr">

                   <Link to="/Reseume" style={{ textDecoration: 'none' }} >
                    <div className="Hr shadow-pop-tr "></div>
                    <img className='HRimg' src={require('../img/HR.png')} alt="" ></img>
                    </Link>
                </div>
                   <br/>
                  <h4>Reseume</h4>
                  <p>"It's about me"</p>
                </div>
                <div>
                <div className="shadow-pop-tr">
                <Link to="/Project" style={{ textDecoration: 'none' }} >
                    <div className="Hp shadow-pop-tr"></div>
                <img className='HPimg' src={require('../img/HP.png')} alt="" ></img>
                </Link>
                </div>
                <br/>
                <h4>Project</h4>
                    <p>”Like a museum“</p>
                </div>
                <div>
                <div className="shadow-pop-tr">

                <Link to="/Contact" style={{ textDecoration: 'none' }} >
                    <div className="Hc shadow-pop-tr"></div>
                <img className='HCimg' src={require('../img/HC.png')} alt="" ></img>
                </Link>
                </div>
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