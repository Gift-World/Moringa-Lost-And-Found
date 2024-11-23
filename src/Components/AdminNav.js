import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';
import { useNavigate } from "react-router-dom";



function NavBar() {
  const navigate = useNavigate();
  const img = "https://thumbs.dreamstime.com/b/logout-glassy-cyan-blue-round-button-isolated-abstract-illustration-97912713.jpg"

  const handleLogOut = () => {
    navigate(`/`, { state: { img } });
  }
  return (
    <div className="navbar">
      <img
        className="img1"
        src="https://images.vexels.com/content/198875/preview/lost-and-founds-label-flat-50fdf0.png" id="imagelogo"
        />

      
      
      <nav className="nav">

      <header>
      <a href="#" id="textlogo">Admin DashBoard</a>
      <ul className="navbar" >
       {/* <NavLink to="/"> <li><a href="#home">Home</a></li></NavLink>  */}
       <NavLink to="/lostadminlist"><li><a href="#contact">Lost Items</a></li></NavLink>
       <NavLink to="/founditem"> <li><a href="#about">Recovered Items</a></li></NavLink>
       <NavLink to="/report"> <li><a href="#about">Reports</a></li></NavLink>
       {/* <NavLink to="/contact"> <li><a href="#gamesdiv">Approved Items</a></li></NavLink> */}
        {/* <NavLink to="/admin"><li><a href="#contact">Admin</a></li></NavLink> */}
      </ul>
      
    </header>
       
      </nav>
      <img
        className="img2"
        src="https://thumbs.dreamstime.com/b/logout-glassy-cyan-blue-round-button-isolated-abstract-illustration-97912713.jpg"
       onClick={handleLogOut} />
    </div>
  );
}

export default NavBar;