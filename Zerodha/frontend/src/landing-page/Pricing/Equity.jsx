function Equity() {
  return (
    <div className="container">
      <div className="table-responsive">
        <table
          className="table table-striped align-middle text-start"
          style={{ fontSize: "0.85rem" }}
        >
          <thead className="table-light">
            <tr style={{ height: "5rem" }}>
              <td style={{ width: "18rem" }}></td>
              <td>Equity delivery</td>
              <td>Equity intraday</td>
              <td>F&amp;O - Futures</td>
              <td>F&amp;O - Options</td>
            </tr>
          </thead>
          <tbody>
            <tr style={{ height: "5rem" }}>
              <td>Brokerage</td>
              <td>Zero Brokerage</td>
              <td>0.03% or ₹20 / executed order, whichever is lower</td>
              <td>0.03% or ₹20 / executed order, whichever is lower</td>
              <td>Flat ₹20 per executed order</td>
            </tr>

            <tr style={{ height: "5rem" }}>
              <td>STT/CTT</td>
              <td>0.1% on buy &amp; sell</td>
              <td>0.025% on the sell side</td>
              <td>0.02% on the sell side</td>
              <td style={{ whiteSpace: "normal" }}>
                <div>0.125% of the intrinsic value on options that are bought and exercised</div>
                <div>0.1% on sell side (on premium)</div>
              </td>
            </tr>

            <tr style={{ height: "5rem" }}>
              <td>Transaction charges</td>
              <td>
                <div>NSE: 0.00297%</div>
                <div>BSE: 0.00375%</div>
              </td>
              <td>
                <div>NSE: 0.00297%</div>
                <div>BSE: 0.00375%</div>
              </td>
              <td>
                <div>NSE: 0.00173%</div>
                <div>BSE: 0</div>
              </td>
              <td>
                <div>NSE: 0.03503% (on premium)</div>
                <div>BSE: 0.0325% (on premium)</div>
              </td>
            </tr>

            {/* GST row updated */}
            <tr style={{ height: "5rem" }}>
              <td>GST</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            </tr>

            <tr style={{ height: "5rem" }}>
              <td>SEBI charges</td>
              <td colSpan="4">₹10 / crore</td>
            </tr>

            <tr style={{ height: "5rem" }}>
              <td>Stamp charges</td>
              <td>0.015% or ₹1500 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
              <td>0.002% or ₹200 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Equity;
