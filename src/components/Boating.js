import React from "react";
import Header from "./Header";

const Boating = () => {
  return (
    <div>
      <Header />
      <section className="hero">
        <div className="detail-content">
          <a href="/">
            <i className="fa fa-times fa-2x exit"></i>
          </a>
          <h2>Boating in Lake Macondo</h2>
          <div className="detail boating-detail">
            <img src="https://i.imgur.com/oexkbbn.jpg" alt="canoe"></img>
            <div className="boating-text">
              <h3>
                Taking a boat on the lake can be a great way to get a different
                perspective on Lake Macondo and the beautiful scenery that
                surrounds it.
              </h3>
              <h3>
                Canoes and kayaks are available for rent at the station next to
                the boat landing.
              </h3>
              <h3>Fishing is also permitted with proper liscensing.</h3>
            </div>
          </div>
          <h2 className="section-end">
            Motors are not allowed, please keep the lake quiet.
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Boating;
