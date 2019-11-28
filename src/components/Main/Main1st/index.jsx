import React from "react";
import "./index.scss";

function Main1st() {
  return (
    <>
      <section className="App">
        <div className="main1st-wrapper">
          <div className="main1st-header">
            <img src="/assets/logo.png" alt="logo img" />
            <br></br>
            <img src="/assets/slogan.png" alt="slogan img" />
          </div>
          <div className="main1st-construct">
            <img src="/assets/construct.png" alt="construct img" />
          </div>
          <div className="main1st-opps">
            <strong>Oops!</strong>
            <h1>Under Construction</h1>
            <p>
              We will be back with a better website. Mean while visit our others
              Brands.
            </p>
          </div>
          <div className="main1st-other-brands">
            <a href="http://aminoacidshrimps.com">
              <img src="/assets/aminoacidshrimps.png" alt="aminoacidshrimps" />
            </a>
            <a href="http://sautenserve.com">
              <img src="/assets/sautenserve.png" alt="sautenserve" />
            </a>
          </div>
          <a href="/report.html">
            Link to Report
          </a>
        </div>
      </section>
    </>
  );
}

export default Main1st;
