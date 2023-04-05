import React from "react";
import "../style.css";
import logo from "../assets/img/airbnb-logo.png";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="logo">
				<img src={logo} alt="logo" className="logo-img" />
			</div>
		</div>
	);
};

export default Navbar;
