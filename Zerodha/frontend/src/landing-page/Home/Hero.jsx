import React from "react";

export default function Hero(){
    return (
        <div className="container text-center pt-5 pb-5" style={{marginTop:"4rem"}}>
           
            <img  src="media\images\landing.png" alt="landing_img" style={{height:"60%" , width:"60%", paddingBottom:"2rem"}} />
            
            <div className="row text-center" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <h1 className="fs-3 pb-2 pt-3">Invest in everything</h1>
                <p className="fs-5 pb-3">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="btn  fs-5 mt-4" style={{width:"18%" , height:"45px" , backgroundColor:"#387ED1" , color:"white"} }>Sign up for free</button>
           
            </div>
        </div>
    )
}

