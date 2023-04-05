import React from "react";
import "../style.css";
import logo from "../assets/img/airbnb-logo.png";

const Navbar = () => {
	return (
		<nav>
			<img src={logo} alt="logo" className="nav--logo" />
		</nav>
	);
};

export default Navbar;
