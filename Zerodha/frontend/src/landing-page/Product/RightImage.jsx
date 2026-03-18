export default function RightImage({imageURL , title , description , demo , learnMore , googlePlay , appStore}){
    return(
         <div className="container text-center" style={{ display: "flex", alignItems: "center" , justifyContent: "center", height: "500px" }}>
            <div className="row">
               
                <div className="col-5 text-start pt-5" style={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"flex-start" , gap:"1rem"}}>
                    <h2 className="fs-3">{title}</h2>
                    <h4 className="text-muted pt-3 pb-3" style={{ fontSize: "1.1rem", width: "90%" }}>{description}</h4>

                            {demo && <a href={demo}>{demo}</a>}
                            {learnMore && <a href={learnMore}>{learnMore}</a>}
                

                </div>
                <div className="col-1"></div>
                 <div className="col-4 " >
                    <img src={imageURL} alt="" />
                </div>
               
            </div>
        </div>
    )
}