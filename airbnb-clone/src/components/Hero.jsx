import React from "react";
import "../style.css";
// import HeroImage from "../assets/img/photo-grid.png";

const Hero = () => {
	return (
		<section className="hero--container">
			<img
				src={"img/photo-grid.png"}
				className="hero--image"
				alt="hero-image"
			/>
			<div className="hero--description">
				<h1>Online Experiences</h1>
				<p>
					Join unique interactive activities led by one-of-a-kind hosts—all
					without leaving home.
				</p>
			</div>
		</section>
	);
};

export default Hero;
