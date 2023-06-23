import React from "react";
import "../style.css";
import CardStar from "../assets/img/star.png";

const Card = (props) => {
	console.log(props);
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
			<div className="star--container">
				<img src={CardStar} alt="star" className="star--image" />
				<span>{props.rating}</span>
				<span className="gray">({props.reviewCount}) • </span>
				<span className="gray">{props.country} </span>
			</div>
			<p>{props.title}</p>
			<p>
				<span className="bold"> From ${props.price} </span> / person
			</p>
		</div>
	);
};

export default Card;
