import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Project.css'
import ReactPlayer from 'react-player'
import { FaRegHandPointRight } from "react-icons/fa";




function ProjectBurner (){
    return(
        <>
        <div className='pC '>
                <Link to="/project" style={{ textDecoration: 'none' }} className="title" >
               <img className='Ptitle' src={require('../img/PROJECT.png')} alt="" ></img>
               </Link> 
                <div className='Burner bC1'>
                    <div className='B1C'>
                        <img className='BP' src={require('../img/poster.jpg')} alt="" ></img>
                        <div className='BCT1'>
                            <h1>Burner Graffiti Museum</h1>
                            <p>Master Degree Essay 2019 </p>
                            <img className='BL' src={require('../img/burner.png')} alt="" ></img>

                            <p>Street art is visual art created in public locations; usually, unsanctioned artwork executed outside of the context of traditional art venues. I have lived in the UK since 2018, for this period I had discovered numerous graffiti on the wall, it is like a street gallery. Artist presents their outstanding work to the audience and the audience took a picture when they saw an interesting graffiti, two sides of them give each other an interest profit. Like exchange a value. In Asia, street art is not as famous as in Europe, artist does not have too much freedom to paint their graffiti. Therefore, my project is building a platform for artists and also audiences.</p>     
                          <div >
                            <img className='BF' src={require('../img/flyer.png')} alt="" ></img>
                            <img className='BT' src={require('../img/ticket.png')} alt="" ></img>
                            {/* <img className='BE' src={require('../img/exhibition.jpg')} alt="" ></img> */}

                          </div>
                        
                        </div>
                    </div>
                
                </div>
                <Link to="/project" style={{ textDecoration: 'none' }}><div className="backbtn"><p>BACK</p></div></Link>

        </div>
        </>
    )
}
    export default ProjectBurner