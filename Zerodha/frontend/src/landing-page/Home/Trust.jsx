import React from "react";

export default function Trust() {
    return (
        <div className="container pt-5 pb-5 text-center">
            <div className="row">
                <div className="col-5 text-start">
                    <h2 className="fs-3 pb-3">Trust with confidence</h2>

                    <h2 className="fs-5 pt-3">Customer-first always</h2>
                    <p className="text-muted" style={{lineHeight:"1.8", fontSize:"1.1rem"}}>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                    <h2 className="fs-5 pt-3">No spam or gimmicks</h2>
                    <p className="text-muted" style={{lineHeight:"1.8", fontSize:"1.1rem"}}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

                    <h2 className="fs-5 pt-3">The Zerodha universe</h2>
                    <p className="text-muted" style={{lineHeight:"1.8", fontSize:"1.1rem"}}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h2 className="fs-5 pt-3">Do better with money</h2>
                    <p className="text-muted" style={{lineHeight:"1.8", fontSize:"1.1rem"}}>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-6 text-center">
                    <img src="media\images\Trust.png" style={{  width: "120%", objectFit: "contain" }} alt="" />
                    <div  style={{ display:"flex" , justifyContent:"center" , alignItems:"center" , width:"120%",   gap:"1rem"}}>
                    <a href="">Explore our products <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="blue" fill="none">
    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"  stroke="#4b67cdff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg></a>
                    <a href="">Try Kite demo <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="#4b67cdff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg></a>
                    </div>
                </div>
                <div className="row pb-5" style={{display:"flex", flexDirection:"column", alignItems:"center", paddingTop:"3rem"}}>
                <img src="media\images\press-logos.png"  style={{width:"60%"}} alt=""  />
                </div>
            </div>
        </div>
    )
}

