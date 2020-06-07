import React from "react";

import actionPng from "../../assets/action.png";

import "./footer.styles.scss";

const Footer = () => (
  <footer className="footer">
    <p>To add the site to your phone's homescreen, open the <a href="#">homepage</a></p>
    <p>On iPhone, click the <img height="24" src={actionPng} alt="options" /> button on the bottom of Safari</p>
    <p>On Android, click on the <i className="material-icons">more_vert</i> button on the top right of Chrome</p>
    <p>Click "Add to Home Screen" <img src="/static/favicons/favicon-32x32.png" alt="" /></p>
    <h4><b><a href="#">Install Instructions (Screenshots)</a></b></h4>

    <hr />

    <p><a href="https://dining.princeton.edu/">Official Campus Dining Website</a></p>
    <p>Order a <a href="https://campusdining.princeton.edu/lunchtogo/">bag lunch!</a></p>
    <p><a href="https://dining.princeton.edu/where-eat/hours-operation">Campus Dining Hours</a></p>
    <p><a href="https://services.jsatech.com/login.php?cid=69">TigerCard Balance</a> (Swipes+Paw Points+Dining Points)</p>
    <p>To get on freefood listserv, email "listserv at princeton dot edu" with "subscribe freefood" in the body.</p>

    <hr />

    <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSd-i9YUoMUk_xJ6l3cNoSl04KKymQ8CAHID9CbwhJpgNn-2QQ/viewform?usp=sf_link">
      Feedback
    </a></p>
    <p><a href="https://github.com/axu2/tiger-menus">Code (GitHub)</a> Please contribute!</p>
    <p><a href="#">About</a></p>
  </footer>
)

export default Footer;