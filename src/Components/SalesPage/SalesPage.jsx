import React,{useState,useEffect} from 'react'
import './salespage.css';
import {roomDataD,roomDataM} from './Data/roomData';
import aboutDark from './Images/aboutDark.jpg';
import aboutLight from './Images/aboutLight.jpg';

const SalesPage = ({mobile}) =>{
    const [Id, setId] = useState(1);
    useEffect(()=>{
        if(Id>3){
            setId(1);
        }
        else if(Id<1){
            setId(3);
        }
    },[Id])
    return(
        <>
            <div className="displayCont">
                {
                    mobile ?
                     <AboutRoom roomDataD={roomDataD} Id={Id} setId={setId}
                     roomDataM={roomDataM} mobile={mobile}/>
                    :
                    <AboutRoom  roomDataD={roomDataD} Id={Id} setId={setId}
                    roomDataM={roomDataM} mobile={mobile}/>                                        
                }
            </div>
            <div className="dispOrder">
                <div className="dark">
                    <img src={aboutDark} alt="dark"/>
                </div>
                <div className="abtFun">
                    <h1>About Our Furniture</h1>
                    <p>Our multifunctional collection blends design and 
                        function to suit your individual taste. Make each 
                        room unique, or pick a cohesive theme that best 
                        express your interests and what inspires you. 
                        Find the furniture pieces you need, from traditional 
                        to contemporary styles or anything in between. 
                        Product specialists are available to help you create 
                        your dream space.</p>
                </div>
                <div className="light">
                    <img src={aboutLight} alt="light"/>
                </div>
            </div>
        </>
    )
}
export default SalesPage;

const AboutRoom = ({Id,roomDataM,roomDataD,mobile,setId})=>{
    const roomM = roomDataM.find((item)=>item.id===Id)
    const roomD= roomDataD.find((item)=>item.id===Id)        
    return(
            mobile?
            <>
                <div className="room">
                    <img src={roomM.img} alt="img"/>
                    <div className="toggleM">
                    <div className="left" onClick={()=>{
                        if(Id>1){
                            setId(Id-1);
                        }
                        else(setId(3))
                        }}>
                    <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
                    </div>
                    <div className="right" onClick={()=>{
                        if(Id<3){
                            setId(Id+1);
                        }
                        else(setId(1))
                        }}>
                    <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
                    </div>
                    </div>
                </div>
                <div className="Details">
                    <h1>{roomM.topic}</h1>
                    <p>{roomM.details}</p>
                    <div className="Shop">
                        <p>SHOP NOW</p>
                        <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero"/></svg>
                    </div>
                </div>                                                                
            </>
            :
            <>
            <div className="room">
                <img src={roomD.img} alt="img"/>
                <div className="toggleD">
                <div className="left" onClick={()=>{
                        if(Id>1){
                            setId(Id-1);
                        }
                        else(setId(3))
                        }}>
                    <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
                    </div>
                    <div className="right" onClick={()=>{
                        if(Id<3){
                            setId(Id+1);
                        }
                        else(setId(1))
                        }}>
                    <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
                    </div>
                </div>
            </div>
            <div className="Details">
                <h1>{roomD.topic}</h1>
                <p>{roomD.details}</p>
                <div className="Shop">
                    <p>SHOP NOW</p>
                    <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero"/></svg>
                </div>
            </div>
            </>
    )
}

