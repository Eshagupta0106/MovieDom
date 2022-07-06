import React from "react";
import "./footer.scss";

import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/tmovie.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt="logo" />
            <Link to="/">Moviedom</Link>
          </div>
        </div>

        <div className="footer__content__menus">
          <div className="footer__content__menu">
            {/* <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link> */}
            <div>Home</div>
            <div>Contact us</div>
            <div>Term of services</div>
            <div>About us</div>
          </div>

          <div className="footer__content__menu">
            {/* <Link to="/">Live</Link>
            <Link to="/">FAQ </Link>
            <Link to="/">Premium</Link>
            <Link to="/">Privacy policy</Link> */}
            <div>Live</div>
            <div>FAQ </div>
            <div>Premium</div>
            <div>Privacy policy</div>
          </div>

          <div className="footer__content__menu">
            {/* <Link to="/">Must watch</Link>
            <Link to="/">Recent Releases</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">Top IMDB</Link> */}
            <div>Must watch</div>
            <div>Recent Releases</div>
            <div>Term of services</div>
            <div>Top IMDB</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;