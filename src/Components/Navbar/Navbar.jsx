import { Link } from "react-router-dom";
import "./Navbar.css";
import { logout } from "../../firebase";
import profile from "../../Photos/profile.jpg";

export default function Navbar() {
  
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/dashboard">
              HOME
            </Link>
          </li>
          <li className="topListItem" >
              NEWS
          </li>
          <li className="topListItem">
            <Link className="link" to="/portfolio">
              PORTFOLIO
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={logout}>LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <Link className="link" to="/settings">
            <img
              className="topImg"
              src={profile}
              alt="profile"
            />
        </Link> 
      </div>
    </div>
  );
}