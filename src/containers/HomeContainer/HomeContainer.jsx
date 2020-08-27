import React, { Component } from "react";
import NotificationPanel from "./../../components/NotificationPanelComponent/NotificationPanel";
import Header from "./../../components/HeaderComponent/HeaderComponent";
import Highlight from "./../../components/HighlightComponent/HighlightComponent";
import Footer from "./../../components/FooterComponent/Footer";
import Newsletter from "./../../components/NewsletterComponent/Newsletter";

class HomeContainer extends Component {
  render() {
    return (
      <div className="wrap wrapper">
        <NotificationPanel />
        <Header />
        <Highlight />
        <Footer />
        <Newsletter />
      </div>
    );
  }
}

export default HomeContainer;
