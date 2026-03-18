export default function LeftImage({ imageURL, title, description, demo, learnMore, googlePlay, appStore }) {
    return (
        <div className="container text-center" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "500px" }}>
            <div className="row">
                <div className="col-6">
                    <img src={imageURL} alt="" />
                </div>
                <div className="col-2"></div>
                <div className="col-4 text-start pt-5">
                    <h2 className="fs-3">{title}</h2>
                    <h4 className="text-muted pt-3 pb-3" style={{ fontSize: "1.1rem", width: "90%" }}>{description}</h4>

                    <div className="row text-center" style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
                        <div className="col">
                            {demo && <a href={demo}>{demo}</a>}

                        </div>
                        <div className="col">

                            {learnMore && <a href={learnMore}>{learnMore}</a>}
                        </div>
                    </div>
                    <div className="row text-center" style={{display:"flex" , justifyContent:"center" ,   alignItems:"center"}}>
                        <div className="col">

                            <button className="btn btn-primary fs-5 mt-4" style={{ width: "10rem" }}>Google Play</button>
                        </div>
                        <div className="col">

                            <button className="btn btn-primary fs-5 mt-4" style={{ width: "10rem" }}>App Store</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}