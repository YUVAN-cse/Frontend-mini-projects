export default function Hero() {
    return (
        <div className="pt-3" style={{  padding: "2.5rem 4.5rem" , backgroundColor:"#F6F6F6" }}>
            <div className="row pt-2 " style={{ marginTop: "5rem", height: "5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <h1 className="col text-start">Support Portal</h1>
                <div className="col text-end"><button className="btn  fs-5 mt-4" style={{ width: "25%", height: "45px", backgroundColor: "#387ED1", color: "white" }}>My Tickets</button>
                </div>
            </div>
            <div class="input-group flex-nowrap pt-3">
                <span class="input-group-text" id="addon-wrapping">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                        <path d="M17 17L21 21" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
                <input type="text" class="form-control" placeholder="Eg: How do I open my account , How do i activate F&O..." aria-label="Username" aria-describedby="addon-wrapping" style={{ height: "3.5rem" }} />
            </div>
        </div>
    )
}