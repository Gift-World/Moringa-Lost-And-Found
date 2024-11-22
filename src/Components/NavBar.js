import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';
import { useNavigate } from "react-router-dom";



function NavBar() {
  const navigate = useNavigate();
  const img = "https://i.pinimg.com/564x/2e/4f/d3/2e4fd3fd8f2aff9c26b15c1f1c23b11e.jpg"

  const handleSignUp = () => {
    navigate(`/signup`, { state: { img } });
  }
  return (
    <div className="navbar">
      <img
        className="img1"
        src="https://images.vexels.com/content/198875/preview/lost-and-founds-label-flat-50fdf0.png" id="imagelogo"
        />

      
      
      <nav className="nav">

      <header>
      <a href="#" id="textlogo">Moringa Lost And Found</a>
      <ul className="navbar" >
       <NavLink to="/"> <li><a href="#home">Home</a></li></NavLink> 
       <NavLink to="/lostitem"><li><a href="#contact">Lost Items</a></li></NavLink>
       <NavLink to="/claim"> <li><a href="#about">Claims</a></li></NavLink>
    
      </ul>
      
    </header>
       
      </nav>
      <img
        className="img2"
        src="https://i.pinimg.com/564x/2e/4f/d3/2e4fd3fd8f2aff9c26b15c1f1c23b11e.jpg"
       onClick={handleSignUp} />
    </div>
  );
}

export default NavBar;