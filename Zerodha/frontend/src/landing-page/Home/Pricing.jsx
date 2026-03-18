import React from "react";

export default function Pricing() {
    return (
        <div className="container pt-5 pb-5">
            <div className="row">
                <div className="col-5 text-start">
                    <h4 className="fs-3">Unbeatable pricing</h4>
                    <p className="text-muted pt-3" style={{ lineHeight: "1.8" }}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" className="fs-6">See pricing <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                        <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></a>
                </div>
                <div className="col-6">
                    <div className="row" style={{ display:"flex" , justifyContent:"center" , alignItems:"center" , gap:"2rem" , width:"120%"}}>
                        <div className="col" style={{display:"flex" , justifyContent:"center" , alignItems:"center", height:"100px" }}><img src="media\images\pricing-eq.svg" style={{height:"70%" , width:"60%"}} alt="" /><p className="text-muted text-start" style={{fontSize:"0.8rem"}}>Free account
                            opening</p></div>
                        <div className="col" style={{display:"flex" , justifyContent:"center" , alignItems:"center", height:"100px" }}><img src="media\images\pricing-eq.svg" style={{height:"70%" , width:"60%"}} alt="" /><p className="text-muted text-start" style={{fontSize:"0.8rem"}}>Free account
                            opening</p></div>
                        <div className="col" style={{display:"flex" , justifyContent:"center" , alignItems:"center", height:"100px" }}><img src="media\images\pricing-eq.svg" style={{height:"70%" , width:"60%"}} alt="" /><p className="text-muted text-start" style={{fontSize:"0.8rem"}}>Free account
                            opening</p></div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

