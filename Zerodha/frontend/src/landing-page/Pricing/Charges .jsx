export default function Charges() {
  return (
    <div className="container pt-5">
      <h4 className="pb-5">Calculate your costs upfront using our brokerage calculator</h4>
      <div className="table-responsive pt-5 pb-5 text-start">
      <h3 className="pb-3 text-muted">Charges for account opening</h3>
        <table
          className="table table-bordered table-striped text-start"
          style={{ fontSize: "1.2rem" }}
        >
          <thead className="table-light">
            <tr style={{ height: "3rem" }}>
              <td>Type of account</td>
              <td>Charges</td>
            </tr>
          </thead>
          <tbody>
            <tr style={{ height: "3rem" }}>
              <td>Online account</td>
              <td>Free</td>
            </tr>
            <tr style={{ height: "3rem" }}>
              <td>Offline account</td>
              <td>Free</td>
            </tr>
            <tr style={{ height: "3rem" }}>
              <td>NRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>
            <tr style={{ height: "3rem" }}>
              <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table-responsive pt-5 pb-5 text-start">
      <h3 className="pb-3 text-muted">Charges for optional value added services</h3>
        <table
          className="table table-bordered table-striped text-start"
          style={{ fontSize: "1.2rem" }}
        >
          <thead className="table-light">
            <tr style={{ height: "3rem" }}>
              <td>Type of account</td>
              <td>Charges</td>
            </tr>
          </thead>
          <tbody>
            <tr style={{ height: "3rem" }}>
              <td>Online account</td>
              <td>Free</td>
            </tr>
            <tr style={{ height: "3rem" }}>
              <td>Offline account</td>
              <td>Free</td>
            </tr>
            <tr style={{ height: "3rem" }}>
              <td>NRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>
            <tr style={{ height: "3rem" }}>
              <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table-responsive pt-5 pb-5 text-start">
      <h3 className="pb-3 text-muted">Demat AMC (Annual Maintenance Charge)</h3>
        <table
          className="table table-bordered table-striped text-start"
          style={{ fontSize: "1.2rem" }}
        >
          <thead className="table-light">
            <tr style={{ height: "3rem" }}>
              <td>Type of account</td>
              <td>Charges</td>
            </tr>
          </thead>
          <tbody>
            <tr style={{ height: "3rem" }}>
              <td>Online account</td>
              <td>Free</td>
            </tr>
            <tr style={{ height: "3rem" }}>
              <td>Offline account</td>
              <td>Free</td>
            </tr>
            <tr style={{ height: "3rem" }}>
              <td>NRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>
            <tr style={{ height: "3rem" }}>
              <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
