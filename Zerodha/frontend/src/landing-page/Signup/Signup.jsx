export default function Signup() {
    return (
        <div className="container pb-5">
            <div className="row">
                <div className="col-6">
                    <img src="media\images\account_open.svg" alt="" />
                </div>
                <div className="col-1"></div>
                <div className="col-5 text-start" style={{display:"flex" , flexDirection:"column" , alignItems:"flex-start" , justifyContent:"center" }}>
                    <h3>Signup now</h3>
                    <p className="text-muted pt-2 pb-2">Or track your existing application</p>
                    <div class="input-group flex-nowrap" style={{width:"20rem"}}>
                        <span class="input-group-text" id="addon-wrapping">@</span>
                        <input type="text" class="form-control" placeholder="Enter your mobile number" aria-label="Username" aria-describedby="addon-wrapping" style={{ height:"4rem"}}/>
                    </div>
                    <button className="btn  fs-5 mt-4 mb-3" style={{width:"12rem" , height:"55px" , backgroundColor:"#387ED1" , color:"white"} }>Get OTP</button>
                    <p className="text-muted" style={{fontSize:"0.8rem"}}>By proceeding, you agree to the Zerodha terms & privacy policy</p>
           
                </div>
            </div>
        </div>
    )
}