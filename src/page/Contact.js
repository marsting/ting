import React from 'react';
import './Contact.css'
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineSmile } from "react-icons/ai";
import { AiOutlineReddit } from "react-icons/ai";

function Contact (){
    return(
        <>
        
        <div className='Ce'>
        <div className='title'>
        <img className='Ctitle' src={require('../img/contact.png')} alt="" ></img>
        </div>
                <div className='ccontact'>
                    <img className='cPic' src={require('../img/CP.png')} alt="" ></img>
                    <div className='ccontent'>
                        <div className='lineS'></div>
                    
                            <h2 className='cc'>歡迎與我聯繫～</h2>
                            <br/>
                            <h2 className='cc'>以下為聯絡資訊</h2>
                            <br/>
                                <div className='info'>
                                    <AiOutlineSmile size={30} color="#7003FA"/>
                                    <p>朱韻婷</p>
                                </div>
                                <div className='info'>
                                    <AiOutlineReddit size={30} color="#7003FA"/>
                                    <p>Tiana</p>
                                </div>
                                <div className='info'>
                                    <AiOutlinePhone size={30} color="#7003FA"/>
                                    <p>0911086680</p>
                                </div>
                                <div className='info'>
                                <AiOutlineMail size={30} color="#7003FA"/>
                                   <p>t2893919@gmail.com</p>
                                </div>
                          
                        <div className='lineS'></div>
                    </div>
                </div>
        </div>
    
       
        </>
    )
}
    export default Contact