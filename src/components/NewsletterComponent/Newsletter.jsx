import React, { Component } from "react";
import $ from "jquery";

class Newsletter extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    $(".notification-container").animate({ height: "0px" }, 1000);
    setTimeout(function () {
      $(".notification-container").removeClass("d-flex").addClass("d-none");
    }, 800);
  }

  render() {
    return (
      <div className="newsletter-container">
        <div className="container-fluid p-4">
          <button type="button" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <p className="newsletter-title">
            Get latest updates in web technologies
          </p>
          <p className="newsletter-description">
            I write articles related to web technologies, such as design trends,
            development tools, UI/UX case studies and reviews, and more. Sign up
            to my newsletter to get them all.
          </p>
          <form onsubmit="myFunction(); return false;">
            <div className="d-flex flex-wrap">
              <div className="newsletter-form-email">
                <input
                  type="email"
                  required
                  className="form-control"
                  placeholder="Email address"
                />
              </div>
              <div className="newsletter-form-submit">
                <button className="btn" type="submit">
                  Count me in!
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Newsletter;
