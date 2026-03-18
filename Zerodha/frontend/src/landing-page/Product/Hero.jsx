export default function Hero(){
    return(
         <div className="container pt-5 mt-5 mb-5 border-bottom" style={{height:"350px", display:"flex" , alignItems:"center" , justifyContent:"center"}}>
            <div className="row text-center" style={{display:"flex" , flexDirection:"column" , alignItems:"center" , justifyContent:"center" , gap:"1rem"}}>
                <h1 className="fs-2">Zerodha Products</h1>
                  <h4 className="fs-4 text-muted">Sleek, modern, and intuitive trading platforms</h4>
                  <p className="fs-6">Check out our investment offerings →</p>
            </div>
        </div>
    )
}