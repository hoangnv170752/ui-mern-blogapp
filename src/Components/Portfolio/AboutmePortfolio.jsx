import React from "react"
import { icons } from "react-icons"
import profile2 from '../../Photos/profile2.jpg'
import './aboutmePortfolio.css'

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
              <h1>About Me<icons>🐧</icons></h1>
            <p>
              My name is Hoang Nguyen and I am currently a software intern in RAL Company
              <br></br>
              <br></br>
              I am interested in developing my skills in Javascript, Flutter and many more
              <br></br>
              <br></br>
              Hope to connect with all of you , my gmail is hoang.nv.ral@gmail.com
            </p>
          </div>
          <div className="image-wrapper">
            <img src={profile2} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About