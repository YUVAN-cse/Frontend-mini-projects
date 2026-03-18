import React from "react";

export default function Education(){
    return (
       <div className="container pt-5 pb-5 text-center">
        <div className="row">
            <div className="col-6"><img src="media\images\index-education.svg" alt="" /></div>
            <div className="col-5 text-start">
                <div className="fs-3" style={{fontWeight:"400"}}>Free and open market education</div>
                <p className="pt-4" style={{lineHeight:"1.8", width:"120%", fontSize:"1.1rem"
                }}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href="" style={{fontSize:"1.1rem"}}>Varsity <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="blue" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg></a>
                <p className="pt-4" style={{lineHeight:"1.8", width:"120%", fontSize:"1.1rem"
                }}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href="" style={{fontSize:"1.1rem"}}>TradingQ&A<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="blue" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg></a>
            </div>
        </div>
       </div>
    )
}

