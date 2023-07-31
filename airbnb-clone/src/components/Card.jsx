import React from "react";
import "../style.css";
import CardStar from "/img/star.png";

const Card = (props) => {
	console.log(props);

	let badgeText;
	if (props.item.openSpots === 0) {
		badgeText = "SOLD OUT";
	} else if (props.item.location === "Online") {
		badgeText = "ONLINE";
	}
	return (
		<div className="card--container">
			{/* If the openSpots prop is equal to zero then we will show the "sold out" badge */}
			{/* {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>} */}
			{badgeText && <div className="card--badge">{badgeText}</div>}
			{/* On <img> this is string interpolation where an expression
			is inserted into a string or literal
			 */}
			<img
				src={`img/${props.item.coverImg}`}
				alt="katie zaferes"
				className="card--image"
			/>
			<div className="card--stats">
				<img src={CardStar} alt="star" className="card--star" />
				<span>{props.item.stats.rating}</span>
				<span className="gray">({props.item.stats.reviewCount}) • </span>
				<span className="gray">{props.item.location} </span>
			</div>
			<p className="card--title">{props.item.title}</p>
			<p className="card--price">
				<span className="bold"> From ${props.item.price} </span> / person
			</p>
		</div>
	);
};

export default Card;
