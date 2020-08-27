import React, { useEffect } from "react";
import $ from "jquery";

export const Newsletter = function (props) {
  let isClicked = false;
  let scrollOneThirdPage = false;
  let highestPageYOffset = 0;
  let isShow = false;

  useEffect(() => {
    /**
     * Calling event listener every time scroll the page.
     * 
     */
    let currentPageYOffset = 0;
    window.addEventListener(
      "scroll",
      function () {
        let bodyHeight = document.body.clientHeight;
        currentPageYOffset = window.pageYOffset;
        // if current page scroll height > document body height / 3 (one-third page) it will set variable scrollOneThirdPage = true
        if (currentPageYOffset >= bodyHeight / 3) {
          scrollOneThirdPage = true;
          // set highest page offset with current page.
          if (currentPageYOffset > highestPageYOffset) {
            highestPageYOffset = currentPageYOffset;
          }
        }
        // if the scroll offset pass over one third page (scrollOneThirdPage == true) and 
        // the user scroll up the page ( currentPageYOffset < highestPageYOffset)
        if (
          scrollOneThirdPage &&
          currentPageYOffset < highestPageYOffset &&
          isShow === false
        ) {
          // slide animation 
          if (!isClicked && currentPageYOffset >= bodyHeight / 3) {
            isShow = true;
            $(".newsletter-container").slideDown("slow", function () {
              $(".newsletter-container").css({
                display: "block",
              });
            });
          }
        }
      },
      false
    );
  }, []);

  const hide = () => {
    /**
     * handle for button 'x' click
     */
    $(".newsletter-container").slideUp("slow", function () {
      $(".newsletter-container").css({
        display: "none",
      });
    });

    // set timeout every 10 minute (10 * 60 * 1000))
    setTimeout(function () {
      scrollOneThirdPage = false;
      highestPageYOffset = 0;
      isShow = false;
      isClicked = false;
    }, 10 * 60 * 1000);
  };

  return (
    <div className="newsletter-container">
      <div className="container-fluid newsletter-inside">
        <button type="button" class="close" aria-label="Close" onClick={hide}>
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
};

export default Newsletter;
