import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./CSS/layout.css";

const Layout = () => {
  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <>
      <div id="fi">
        <div class="topnav" id="myTopnav">
          <div id="nev_margin">
            <NavLink to="Home"      > Home </NavLink>
            <NavLink to="About"   > About Me </NavLink>
            <NavLink to="Projects"     > Projects </NavLink>
            <NavLink to="Contact"    > Contact </NavLink>
            <NavLink to="" className="icon " onClick={myFunction}> <i className="fa fa-bars" ></i> </NavLink>
          </div>
        </div>
      </div>

      <div id="changeContant">
        <Outlet />
      </div>

      <div class="copyright">
        <marquee ><h1>This Is A React Website Developed By Amarth</h1> </marquee>
      </div>
    </>
  );
}

export default Layout;
