export default function Commodity(){
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
              <td>Commodity futures</td>
              <td>Commodity options</td>
            </tr>
          </thead>
          <tbody>
            <tr style={{ height: "5rem" }}>
              <td>Brokerage</td>
              <td>0.03% or ₹20 / executed order whichever is lower</td>
              <td>₹20 / executed order</td>
            </tr>

            <tr style={{ height: "5rem" }}>
              <td>STT/CTT</td>
              <td>0.01% on sell side (Non-Agri)</td>
              <td>0.05% on sell side</td>
            </tr>

            <tr style={{ height: "5rem" }}>
              <td>Transaction charges</td>
              <td>
                <div>MCX: 0.0021%</div>
                <div>NSE: 0.0001%</div>
              </td>
              <td>
                <div>MCX: 0.0418%</div>
                <div>NSE: 0.001%</div>
              </td>
            </tr>

            <tr style={{ height: "5rem" }}>
              <td>GST</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            </tr>

            <tr style={{ height: "5rem" }}>
              <td>SEBI charges</td>
              <td>
                <div>Agri: ₹1 / crore</div>
                <div>Non-agri: ₹10 / crore</div>
              </td>
              <td>₹10 / crore</td>
            </tr>

            <tr style={{ height: "5rem" }}>
              <td>Stamp charges</td>
              <td>0.002% or ₹200 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
