import React, { Component } from "react";
import $ from "jquery";

class NotificationPanel extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    $(".notification-container").animate({ height: "0px" }, 1000);
    setTimeout(function () {
      $(".notification-container").removeClass("d-flex").addClass('d-none');
    }, 800);
  }

  render() {
    return (
      <div className="d-flex sticky-top justify-content-center notification-container">
        <div className="container-fluid pt-3 pb-3" style={{ maxWidth: "720px" }}>
          <div className="d-flex flex-wrap justify-content-between">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ width: "600px" }}
            >
              <div className="notification-text">
                By accessing and using this website, you acknowledge that you
                have read and understand our <a href="./#">Cookie Policy</a>,{" "}
                <a href="./#">Privacy Policy</a>, and our{" "}
                <a href="./#">Terms of Service</a>.
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <div className="">
                <button
                  onClick={this.handleClick}
                  className="btn notification-button"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotificationPanel;
