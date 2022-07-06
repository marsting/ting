import React from 'react';
import './Contact.css'
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

function Contact (){
    return(
        <>
        
        <div className='container'>
        <img className='Ctitle' src={require('../img/contact.png')} alt="" ></img>
                <div className='ccontact'>
                    <img className='cPic' src={require('../img/CP.png')} alt="" ></img>
                    <div className='ccontent'>
                        <div className='lineS'></div>
                    
                            <h2>歡迎與我聯繫～</h2>
                            <br/>
                            <h2>以下為聯絡資訊</h2>
                            <br/>
                                <div className='info'>
                                    <AiOutlinePhone size={30}/>
                                    <p>0911086680</p>
                                </div>
                                <div className='info'>
                                <AiOutlineMail size={30}/>
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