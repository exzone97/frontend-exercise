import React from "react";

export const NotificationPanel = function (props) {
  return (
    <div
      className="d-flex justify-content-center pt-4 pb-4"
      style={{ backgroundColor: "#f2f2f2" }}
    >
      <div className="" style={{ maxWidth: "720px" }}>
        <div className="row">
          <div className="col-md-10 d-flex align-items-center justify-content-center">
            <div>
              By accessing and using this website, you acknowledge that you have
              read and understand our <a href="./#">Cookie Policy</a>,{" "}
              <a href="./#">Privacy Policy</a>, and our{" "}
              <a href="./#">Terms of Service</a>.
            </div>
          </div>
          <div className="col-md-2 d-flex align-items-center justify-content-center">
            <div className="">
              <button className="btn btn-primary">Got it</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPanel;
