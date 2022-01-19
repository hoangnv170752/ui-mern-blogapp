import React from "react"
import { icons } from "react-icons"
import './footerPortfolio.css'

function Footer() {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
            <h1>Contact me <icons>👋</icons></h1>
          <a className="email-link" href={`mailto:hoang.nv.ral@gmail.com`}>
            hoang.nv.ral@gmail.com
          </a>
          <span>
            Made by 
            <a href="https://www.facebook.com/profile.php?id=100008450770058">Hoang Nguyen</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer