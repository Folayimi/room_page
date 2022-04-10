import React,{useState} from 'react';
import './navBar.css'
const Navbar = ({mobile}) =>{
    const [menu,setMenu] = useState(false);
    const [show,setShow] = useState(false);    
    return(
        <>
            <div className="headCont">
            <div className="header">                
                {
                    mobile?
                        <div className="burgerCont">
                            {
                                show?
                                <div className="close" onClick={()=>{
                                    setMenu(false);
                                    setShow(false);
                                }}>
                                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z" fill="#000" fill-rule="evenodd" opacity=".201"/></svg>
                                </div>
                                :
                                <div className="hamburger" onClick={()=>{
                                    setMenu(true);
                                    setShow(true)
                                }}>
                                    <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#FFF" fill-rule="evenodd"/></svg>
                                </div>
                            }    
                            <div className="logoM">                
                                <p>room</p>     
                            </div>                        
                        </div>
                    :
                    <>
                        <div className="logoD">                
                            <p>room</p>     
                        </div>
                        <div className="navCont">
                        <div className="Home">
                            <p>home</p>  
                            <div className="navbar"/>
                        </div>
                        <div className="About">
                            <p>shop</p>  
                            <div className="navbar"/>
                        </div>
                        <div className="Contact">
                            <p>about</p>
                            <div className="navbar"/>
                        </div>
                        <div className="Blog">
                            <p>contact</p>
                            <div className="navbar"/>
                        </div>                        
                    </div>                      
                    </>
                }
                
            </div>
            {
                menu?
                    <div className="menu" style={{marginLeft:"0%"}}>
                        <div className="menuCont">
                            <p>home</p>
                            <p>shop</p>
                            <p>about</p>
                            <p>contact</p>                            
                        </div>                        
                    </div>
                :
                    <div className="menu" style={{marginLeft:"-100%"}}>
                        <div className="menuCont">
                            <p>home</p>
                            <p>shop</p>
                            <p>about</p>
                            <p>contact</p>
                        </div>                        
                    </div>
            }     
            </div>       
        </>
    )
}

export default Navbar;