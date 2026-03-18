export default function Currency() {
    return (
        <div className="container">
            <div className="table-responsive">
                <table
                    className="table table-striped align-middle text-start"
                    style={{ fontSize: "0.95rem" }}
                >
                    <thead className="table-light">
                        <tr style={{ height: "4rem" }}>
                            <td style={{ width: "18rem" }}></td>
                            <td style={{fontSize:"1.1rem"}}>Currency futures</td>
                            <td style={{fontSize:"1.1rem"}}>Currency options</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ height: "4rem" }}>
                            <td>Brokerage</td>
                            <td>0.03% or ₹20 / executed order whichever is lower</td>
                            <td>₹20 / executed order</td>
                        </tr>

                        <tr style={{ height: "4rem" }}>
                            <td>STT/CTT</td>
                            <td>No STT</td>
                            <td>No STT</td>
                        </tr>

                        <tr style={{ height: "4rem" }}>
                            <td>Transaction charges</td>
                            <td>
                                <div>NSE: 0.00035%</div>
                                <div>BSE: 0.00045%</div>
                            </td>
                            <td>
                                <div>NSE: 0.0311%</div>
                                <div>BSE: 0.001%</div>
                            </td>
                        </tr>

                        <tr style={{ height: "4rem" }}>
                            <td>GST</td>
                            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                        </tr>

                        <tr style={{ height: "4rem" }}>
                            <td>SEBI charges</td>
                            <td>₹10 / crore</td>
                            <td>₹10 / crore</td>
                        </tr>

                        <tr style={{ height: "4rem" }}>
                            <td>Stamp charges</td>
                            <td>0.0001% or ₹10 / crore on buy side</td>
                            <td>0.0001% or ₹10 / crore on buy side</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}



