import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerflex">
          <div className="about">
            <h3>ABOUT</h3>
            <p>
              Contact Us
              <br />
              About Us
              <br />
              Careers
              <br />
              ShoeCart Stories
              <br />
              Press
              <br />
              ShoeCart Wholesale
              <br />
              Cleartrip
              <br />
              Corporate Information
            </p>
          </div>
          <div className="helps">
            <h3>HELP</h3>
            <p>
              Payments
              <br />
              Shipping
              <br />
              Cancellation & Returns
              <br />
              FAQ
              <br />
              Report Infringement
            </p>
          </div>
          <div className="policy">
            <h3>CONSUMER POLICY</h3>
            <p>
              Cancellation & Returns
              <br />
              Terms Of Use
              <br />
              Security
              <br />
              Privacy
              <br />
              Sitemap
              <br />
              Grievance Redressal
              <br />
              EPR Compliance
            </p>
          </div>
          <div className="social">
            <h3>SOCIAL</h3>
            <p>
              Facebook <br />
              Instagram <br />
              YouTube
              <br />
            </p>
          </div>

          <div className="mail">
            <h3>Mail Us</h3>
            <p>
              {" "}
              ShoeCart Internet Private Limited, <br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,
              <br />
              Outer Ring Road, Devarabeesanahalli Village,
              <br />
              Bengaluru, 560103,
              <br />
              Karnataka, India
              <br />
            </p>
          </div>
          <div className="office">
            <h3>Registered Office Address:</h3>
            <p>
              
              ShoeCart Internet Private Limited,
              <br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,
              <br />
              Outer Ring Road, Devarabeesanahalli Village,
              <br />
              Bengaluru, 560103,
              <br />
              Karnataka, India
              <br />
              CIN : U51109KA2012PTC066107
              <br />
              Telephone: 044-45614700
              <br />
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
