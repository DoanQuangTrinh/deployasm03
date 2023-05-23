import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col customerFooter">
                <h5>CUSTOMER SERVICES</h5>
                <ul className="list-unstyled listLinkFooter ">
                  <li>
                    <a href="#">Help & Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Return & Refunds</a>
                  </li>
                  <li>
                    <a href="#">Online Stores</a>
                  </li>
                  <li>
                    <a href="#">Term & Conditions</a>
                  </li>
                </ul>
              </div>
              <div className="col customerFooter">
                <h5>COMPANY</h5>
                <ul className="list-unstyled listLinkFooter">
                  <li>
                    <a href="#">What We Do</a>
                  </li>
                  <li>
                    <a href="#">Avaliable Services</a>
                  </li>
                  <li>
                    <a href="#">Latest Posts</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                </ul>
              </div>
              <div className="col customerFooter">
                <h5>SOCIAL MEDIA</h5>
                <ul className="list-unstyled listLinkFooter">
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/doanquangtrinh2001">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Pinterest</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      );
}

export default Footer;