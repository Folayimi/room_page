import React from "react";
import {useState,useEffect} from 'react';
import SalesPage from "./Components/SalesPage/SalesPage";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter as 
        Router, 
        Routes, 
        Route} 
    from 'react-router-dom'

function App (){
    const [mobile,setMobile] = useState(false);
    const [size,setSize] = useState(window.innerWidth)
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setSize(window.innerWidth);
        });
        window.removeEventListener('resize',()=>{
            setSize(window.innerWidth);
        })
        if(size>675){
            setMobile(false);
        }
        else if(size<=675){
            setMobile(true)
        }
    },[size])
    return(
        <>
        <Router>            
            <Navbar mobile={mobile}/>
            <Routes>
                <Route exact path="/" element={<SalesPage mobile={mobile}/>}/>                
            </Routes>            
        </Router>
        </>
    )
}
export default App;