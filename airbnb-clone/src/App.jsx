import "./style.css";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

// we can console.log the data (array of objects) to see what it looks like
// console.log(data);

function App() {
	// explain: We map over the data an array of objects and for each item in the array we return a Card component with the props that we want to pass. We then store the result of this in a variable called cardData. We then return the cardData variable which is an array of Card components.
	const cardData = data.map((card) => {
		// explain: We destructure the card object and store the values in variables. We then pass these variables as props to the Card component.
		const {
			id,
			coverImg,
			stats: { rating, reviewCount },
			location,
			title,
			price,
		} = card;
		return (
			<Card
				key={id}
				img={coverImg}
				rating={rating}
				reviewCount={reviewCount}
				location={location}
				title={title}
				price={price}
			/>
		);
	});
	return (
		<div className="App">
			<Navbar />
			{/* <Hero /> */}
			{/* <Card
				img={"katie-zaferes.png"}
				rating={"5.0"}
				reviewCount={6}
				country={"USA"}
				title={"Life lessons with Katie Zaferes"}
				price={136}
			/> */}
			<section className="cards-lists">{cardData}</section>
		</div>
	);
}

export default App;
