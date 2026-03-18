export default function People() {
    return (
        <div className="container pt-5 pb-5 text-center">
            <h3 className="text-muted pb-5">People</h3>
            <div className="row pt-5">
                <div className="col-1"></div>
                <div className="col-5 text-center" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.8rem", justifyContent: "center" }}>
                    <img src="media\images\nithin-kamath.jpg" style={{ borderRadius: "50%", height: "18rem" }} alt="" />
                    <h4>Nithin Kamath</h4>
                    <p>Founder, CEO</p>
                </div>

                <div className="col-5 text-start">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.

                    </p><p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).

                    </p><p>Playing basketball is his zen.

                    </p><p>Connect on Homepage / TradingQnA / Twitter</p>
                </div>
            </div>
        </div>
    )
}