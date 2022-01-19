import React from "react"

import './headerPortfolio.css'

function HeaderPortfolio() {
    return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
            <h2>
              Hi, I'm Hoang Nguyen
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
        <div className="heading-wrapper">
            <h1 className="text">
                HUST Mechatronics Student
            </h1>
        </div>
        <a
            className="primary-btn" 
            href="https://github.com/hoangnv170752"
        >
            CONNECT WITH ME
        </a>
        </div>
      </div>
    </div>
  )
}

export default HeaderPortfolio