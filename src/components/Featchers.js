import "../css/featchers.css";

function Featchers() {
  return (
    <>
      <div className=" featchers">
        <div className="container">
          <div className="row">
            <div className="free-shipping col-4 ">
              <span class="material-symbols-outlined">box</span>
              <h6 className="ms-3">Free Shipping Above 850 EGP</h6>
            </div>
            <div className="free-shipping col-4 ">
              <span class="material-symbols-outlined">undo</span>
              <h6 className="ms-3">Fast Exchange & Returns</h6>
            </div>
            <div className="free-shipping col-4">
              <span class="material-symbols-outlined">
                nest_clock_farsight_analog
              </span>
              <h6 className="ms-3">At Your Service 24/7</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featchers;
