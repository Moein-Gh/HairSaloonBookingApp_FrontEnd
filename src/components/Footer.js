const footer = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="card bg-white">
        <div>سینوا</div>
        <div className="divider mb-4"> </div>
        <div className="row" style={{ fontSize: "10px" }}>
          <div className="col-md-6 col-sm-6 col-xs-6">
            <div className="pull-left">
              <p>
                <i className="fa fa-copyright"></i> 2020 thezpdesign
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-6">
            <div className="pull-right mr-4 d-flex policy">
              <div>Terms of Use</div>
              <div>Privacy Policy</div>
              <div>Cookie Policy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
