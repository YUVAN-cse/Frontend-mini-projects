export default function Rupees() {
    return (
        <div className="container pt-5 pb-5 mb-5 text-center" style={{ marginTop: "5rem", height: "450px", display: "flex", alignItems: "center" , justifyContent: "center", flexDirection: "column", gap: "2rem" }}>
            <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem" }}>
                <div className="col" style={{ display: "flex", justifyContent: "center",flexDirection: "column", alignItems: "center", height: "400px" , width:"30%" }}>
                    <img src="media\images\pricing-eq.svg" style={{height:"250px" }} alt="" />
                    <h1 className="fs-3">Free equity delivery</h1>
                    <p className="text-muted text-center pt-3" style={{ fontSize: "1rem" }}>
                        All equity delivery investments (NSE, BSE),
                        <br /> are absolutely free — ₹ 0 brokerage.commission commission commission
                    </p>
                </div>
                <div className="col" style={{ display: "flex", justifyContent: "center",flexDirection: "column", alignItems: "center", height: "400px" , width:"30%" }}>
                    <img src="media\images\other-trades.svg" style={{height:"250px" }} alt="" />
                    <h1 className="fs-3">Intraday and F&O trades</h1>
                    <p className="text-muted text-center pt-3" style={{ fontSize: "1rem" }}>
                        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.5                    </p>
                </div>
                <div className="col" style={{ display: "flex", justifyContent: "center",flexDirection: "column", alignItems: "center", height: "400px" , width:"30%" }}>
                    <img src="media\images\pricing-eq.svg" style={{height:"250px" }} alt="" />
                    <h1 className="fs-3">Free direct MF</h1>
                    <p className="text-muted text-center pt-3" style={{ fontSize: "1rem" }}>
                        All direct mutual fund investments are absolutely commission commission commission commission free — ₹ 0  & DP charges.
                    </p>
                </div>
            </div>
        </div>
    )
}