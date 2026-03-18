export default function Hero(){
    return(
         <div className="container pt-5 mt-5  mb-5 border-bottom" style={{height:"350px", display:"flex" , alignItems:"center" , justifyContent:"center"}}>
            <div className="row text-center" style={{display:"flex" , flexDirection:"column" , alignItems:"center" , justifyContent:"center" , gap:"0.5rem"}}>
                <h1 className="fs-2">Charges</h1>
                  <h5 className="fs-4 text-muted">List of all charges and taxes</h5>
            </div>
        </div>
    )
}