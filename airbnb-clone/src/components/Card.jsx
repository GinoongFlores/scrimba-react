import React from "react";
import "../style.css";
import CardStar from "../assets/img/star.png";

const Card = (props) => {
	// console.log(props);
	return (
		<div className="card--container">
			{/* this is string interpolation where an expression
			is inserted into a string or literal
			 */}
			<img
				src={`src/assets/img/${props.img}`}
				alt="katie zaferes"
				className="card--image"
			/>
			<div className="card--stats">
				<img src={CardStar} alt="star" className="card--star" />
				<span>{props.rating}</span>
				<span className="gray">({props.reviewCount}) • </span>
				<span className="gray">{props.country} </span>
			</div>
			<p className="card--title">{props.title}</p>
			<p className="card--price">
				<span className="bold"> From ${props.price} </span> / person
			</p>
		</div>
	);
};

export default Card;
