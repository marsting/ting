import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Project.css'
import ReactPlayer from 'react-player'
import {useEffect} from 'react';





function Project (){
    const scroll =()=>{
        window.scroll(0,0)
    }
    useEffect(() => {
      // 👇️ scroll to top on page load
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      document.querySelector(".navB").style.display="block"

    }, []);
    return(
        <>
        <div className='pC'>
               <Link to="/project" style={{ textDecoration: 'none' }} className="title" >
               <img className='Ptitle' src={require('../img/PROJECT.png')} alt="" ></img>
               </Link> 
                <div className='PSelect'>
                <div className='pcard'>

                  <Link to="/project/coffee" style={{ textDecoration: 'none' }} onClick={scroll} className="allm" >
                   
                    <div className="toptext">
                    <div>WEB</div>
                    <div>C.2022</div>
                    </div>
                    <div className='tape'></div>
                    <img className='pBg' src={require('../img/pBg.jpg')} alt="" ></img>
                    <img className='SLOGO' src={require('../img/好室咖啡拷貝.png')} alt="" ></img>
                    <div className="btext">COFFEE&ensp;HOUSE</div>
                  </Link>
                </div>
                <div className='pcard'>
                  <Link to="/project/burner" style={{ textDecoration: 'none' }} className="allm" >
                    
                    <div className="toptext">
                    <div>BRAND</div>
                    <div>C. 2019</div>
                    </div>
                    <div className='tape'></div>
                    <img className='pBg' src={require('../img/pBg.jpg')} alt="" ></img>
                    <img className='BLOGO' src={require('../img/burner.png')} alt="" ></img>
                    <div className="btext">BURNER</div>
                  
                  </Link>
                 </div>
               
                  </div>
                  <div className='bott'></div>
               

        </div>
        </>
    )
}
    export default Project